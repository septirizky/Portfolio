import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import FullStack from '../../assets/images/fullstack.png'
import FrontEnd from '../../assets/images/frontend.png'
import BackEnd from '../../assets/images/backend.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <p>
            I possess versatile expertise in web application development,
            excelling as a Fullstack Developer proficient in Frontend and
            Backend development.
          </p>
          <p>
            I'm a very ambitious looking for a role in an established IT company
            with the opportunity to work with the latest technologies on
            challenging and diverse projects.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
        </div>
        <div className="flexbox">
          <div className="content">
            <div className="logo">
              <img src={FullStack} alt="Fullstack" />
            </div>
            <h2>Fullstack Developer</h2>
          </div>
          <div className="content">
            <div className="logo">
              <img src={FrontEnd} alt="Frontend" />
            </div>
            <h2>Frontend Developer</h2>
          </div>
          <div className="content">
            <div className="logo">
              <img src={BackEnd} alt="Bckend" />
            </div>
            <h2>Backend Developer</h2>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
