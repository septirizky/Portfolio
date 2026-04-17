import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import BrandLoader from '../BrandLoader'
import './index.scss'

const highlights = [
  {
    title: 'Frontend Focus',
    text: 'Building responsive interfaces that feel clean, fast, and intuitive across desktop and mobile.',
  },
  {
    title: 'Backend Ready',
    text: 'Comfortable handling APIs, business logic, and data-driven features for real-world products.',
  },
  {
    title: 'Current Work',
    text: 'Currently working full-time at Bandar Djakarta and contributing part-time at madebyhumans.',
  },
]

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="about-layout">
          <section className="about-copy">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
            </h1>
            <p>
              I am Septi Rizky, a fullstack developer who enjoys turning ideas
              into clean, useful, and production-ready digital experiences.
            </p>
            <p>
              My work is strongest around JavaScript and TypeScript ecosystems,
              especially React, Next.js, Node.js, and modern UI development. I
              am comfortable working across frontend and backend, with a strong
              interest in building products that are both functional and
              pleasant to use.
            </p>
            <p>
              Right now I work full-time at Bandar Djakarta and also contribute
              part-time at madebyhumans. That mix helps me stay sharp across
              business-focused product work, interactive experiences, and
              collaborative delivery.
            </p>
          </section>

          <aside className="about-aside">
            <div className="about-avatar-card">
              <div className="avatar-frame">
                <img src="/avatar.png" alt="Septi Rizky avatar" />
              </div>
              <div className="avatar-copy">
                <h2>Fullstack Developer</h2>
                <p>
                  Focused on modern web apps, polished interfaces, and practical
                  user experiences.
                </p>
              </div>
            </div>

            <div className="about-highlights">
              {highlights.map((item) => (
                <div className="highlight-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
      <BrandLoader />
    </>
  )
}

export default About
