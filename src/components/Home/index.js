import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import BrandLoader from '../BrandLoader'
import LogoTitle from '../../assets/images/logo-s.png'
import LogoS from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['e', 'p', 't', 'i', ' ', 'R', 'i', 'z', 'k', 'y']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="home-content">
          <div className="text-zone">
            <p className="eyebrow">Fullstack Developer</p>
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoTitle} alt="LogoKecil" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2>
              Building fullstack applications with a focus on clean UI, smooth
              user experience, and practical business solutions.
            </h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <div className="logo-brand">
            <img src={LogoS} alt="Logo" />
          </div>
        </div>
      </div>
      <BrandLoader />
    </>
  )
}

export default Home
