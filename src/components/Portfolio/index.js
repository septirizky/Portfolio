import React, { useEffect, useMemo, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import BrandLoader from '../BrandLoader'
import './index.scss'

const GITHUB_USERNAME = 'septirizky'
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`
const hiddenRepos = new Set([
  'coex',
  'palindrome',
  'mgindotech',
  'fe-enlight-consulting',
  'yellow-fit',
  'web',
  'react-redux',
  'react-crud',
  'code-x',
])

const customDescriptions = {
  Portfolio: 'Personal portfolio website that showcases my work, skills, and experience.',
  'voucher-claim-bandjak':
    'Voucher claim application flow built for a business use case.',
  'QR-Generator':
    'QR code generator web app with a simple interface and fast output.',
  coex: 'Modern web interface project focused on polished user experience.',
  'feedback-taste':
    'Customer feedback platform for collecting opinions and product ratings.',
  body_buddy:
    'Health and fitness themed application for tracking activity and routines.',
  'FE-WebAR':
    'Frontend exploration for web-based augmented reality interactions.',
  'attendance-app':
    'Attendance management app with a clean dashboard and practical workflow.',
  'Printer-Option-Manager':
    'Utility app for managing printer options and related configurations.',
  'mlaku-mulu':
    'Travel or mobility themed project built as a responsive web experience.',
  Palindrome:
    'Small logic project for checking palindrome input with a simple interface.',
  'User-API':
    'Backend API project for managing user-related operations and data.',
  'Aplikasi-Penjualan':
    'Sales application project for handling transactions and product data.',
  'Dashboard-Bandjak':
    'Dashboard interface for monitoring and managing Bandjak operations.',
  'dashboard-reservation':
    'Reservation dashboard project with booking data and admin views.',
  'FE-Reservation':
    'Frontend reservation experience focused on booking flow and usability.',
  'BE-Reservation':
    'Backend service for reservation workflows and supporting endpoints.',
  MGIndoTech:
    'Company-focused web project with a structured, business-oriented layout.',
}

const formatRepoTitle = (name) =>
  name
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const getRepoDescription = (repo) => {
  if (repo.description) return repo.description
  if (customDescriptions[repo.name]) return customDescriptions[repo.name]

  const title = formatRepoTitle(repo.name)
  const languageText = repo.language ? ` built with ${repo.language}` : ''

  return `${title} is one of my public projects${languageText}.`
}

const formatUpdatedAt = (dateString) => {
  if (!dateString) return ''

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateString))
}

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [repos, setRepos] = useState([])
  const [isLoadingRepos, setIsLoadingRepos] = useState(true)
  const [repoError, setRepoError] = useState(false)
  const nameArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let ignore = false

    const loadRepos = async () => {
      try {
        setIsLoadingRepos(true)
        setRepoError(false)

        const response = await fetch(GITHUB_API_URL)

        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }

        const data = await response.json()

        if (ignore) return

        const publicRepos = data
          .filter(
            (repo) => !repo.fork && !hiddenRepos.has(repo.name.toLowerCase())
          )
          .sort(
            (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          )

        setRepos(publicRepos)
      } catch (error) {
        if (ignore) return
        setRepoError(true)
      } finally {
        if (!ignore) {
          setIsLoadingRepos(false)
        }
      }
    }

    loadRepos()

    return () => {
      ignore = true
    }
  }, [])

  const repoCountLabel = useMemo(() => {
    if (isLoadingRepos) return 'Loading repositories...'
    if (repoError) return 'Unable to load repositories right now.'
    return `${repos.length} public projects from GitHub`
  }, [isLoadingRepos, repoError, repos.length])

  return (
    <>
      <div className="container portfolio-page">
        <div className="portfolio-header">
          <h1 className="text">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <p className="portfolio-intro">
            Selected work and experiments from my GitHub profile. Each card links
            directly to the repository, and live demos appear when available.
          </p>
          <div className="portfolio-meta">
            <span className="portfolio-count">{repoCountLabel}</span>
            <a
              className="portfolio-profile-link"
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>

        {repoError ? (
          <div className="portfolio-empty-state">
            <p>I could not load the latest repositories from GitHub.</p>
            <a href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer">
              Open GitHub Profile
            </a>
          </div>
        ) : (
          <div className="portfolio-grid">
            {repos.map((repo) => (
              <article className="portfolio-card" key={repo.id}>
                <div className="portfolio-card-top">
                  <span className="portfolio-language">
                    {repo.language || 'Repository'}
                  </span>
                  <span className="portfolio-updated">
                    Updated {formatUpdatedAt(repo.updated_at)}
                  </span>
                </div>

                <div className="portfolio-card-body">
                  <h2>{formatRepoTitle(repo.name)}</h2>
                  <p>{getRepoDescription(repo)}</p>
                </div>

                <div className="portfolio-card-footer">
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    View GitHub
                  </a>
                  {repo.homepage ? (
                    <a
                      className="secondary-link"
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      <BrandLoader />
    </>
  )
}

export default Portfolio
