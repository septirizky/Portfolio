import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import S1 from '../../assets/images/Graha.png'
import S2 from '../../assets/images/Realta.png'
import S3 from '../../assets/images/Aditi.png'

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
              <h2>Graha Garage</h2>
              <p>Website used to sell vehicle spare parts.</p>
              <p>#react #materialize</p>
              <a href="#">
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
              <p>#react #bootstrap #express #multer</p>
              <a href="#">
                <i className="bx bx-lunk-external"></i>
              </a>
            </div>
          </div>
          <div className="content-portfolio">
            <img src={S3} alt="Logo3" />
            <div className="layer">
              <h2>PT Aditi Multi Karya</h2>
              <p>
                The website contains advertising company profiles to attract
                customers
              </p>
              <p>#vitejs #tailwind</p>
              <a href="#">
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
