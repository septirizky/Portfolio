import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import S1 from '../../assets/images/Aditi.png'
import S2 from '../../assets/images/Realta.png'
import S3 from '../../assets/images/Quote.png'
import S4 from '../../assets/images/MitraMix.png'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="text">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <div className="flexbox-portfolio">
          <div className="content-portfolio">
            <img src={S1} alt="Logo1" />
            <div className="layer">
              <h2>Aditi Engineering</h2>
              <p>Company profile website for business truck modification</p>
              <p>#ReactJS #Typescript #NextJs #Tailwind #Daisyui</p>
              <a href="https://aditi-engineering.vercel.app/">
                <i className="bx bx-lunk-external"></i>
              </a>
            </div>
          </div>
          <div className="content-portfolio">
            <img src={S2} alt="Logo2" />
            <div className="layer">
              <h2>Realta Hotel</h2>
              <p>
                This website is used to assist realta hotels in the room booking
                process
              </p>
              <p>#Postgresql #ExpressJs #Sequelize #Multer #React #Bootstrap</p>
              <a href="#">
                <i className="bx bx-lunk-external"></i>
              </a>
            </div>
          </div>
          <div className="content-portfolio">
            <img src={S3} alt="Logo3" />
            <div className="layer">
              <h2>Random Quote Generator</h2>
              <p>
                Our Random Quote Generator is a simple yet powerful tool
                designed to inspire, motivate, and entertain.
              </p>
              <p>#Third-party APIs #ReactJs #MaterialUI</p>
              <a href="https://septi-random-quote.vercel.app/">
                <i className="bx bx-lunk-external"></i>
              </a>
            </div>
          </div>
          <div className="content-portfolio">
            <img src={S4} alt="Logo4" />
            <div className="layer">
              <h2>MITRAMIX</h2>
              <p>Company profile website for ready mix supplier.</p>
              <p>#ReactJS #Typescript #NextJs #Tailwind #Daisyui</p>
              <a href="https://septi-random-quote.vercel.app/">
                <i className="bx bx-lunk-external"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
