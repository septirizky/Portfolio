import { useEffect, useState } from 'react'
import Bootstrap from '../../assets/images/bootstrap.png'
import Axios from '../../assets/images/axios.png'
import Angular from '../../assets/images/angular.png'
import React from '../../assets/images/reactjs.png'
import Next from '../../assets/images/nextjs.png'
import Redux from '../../assets/images/redux.png'
import Tailwind from '../../assets/images/tailwind.png'
import Javascript from '../../assets/images/javascript.png'
import Typescript from '../../assets/images/typescript.png'
import NodeJs from '../../assets/images/nodejs.png'
import Express from '../../assets/images/express-js.png'
import NestJs from '../../assets/images/nestjs.png'
import Html from '../../assets/images/html.png'
import Css from '../../assets/images/css.png'
import Git from '../../assets/images/git.png'
import Postgre from '../../assets/images/postgresql.png'
import MongoDb from '../../assets/images/mongodb.png'
import Multer from '../../assets/images/multer.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Tech = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const aboutArray = ['T', 'e', 'c', 'h', 'n', 'o', 'l', 'o', 'g', 'y']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container tech-page">
        <div className="text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
        </div>
        <div className="flexbox-tech">
          <div className="content-tech">
            <div className="cubespinner">
              <div className="face1">
                <div className="logo">
                  <img src={Bootstrap} alt="bootstrap" />
                </div>
              </div>
              <div className="face2">
                <div className="logo">
                  <img src={Angular} alt="angular" />
                </div>
              </div>
              <div className="face3">
                <div className="logo">
                  <img src={React} alt="react" />
                </div>
              </div>
              <div className="face4">
                <div className="logo">
                  <img src={Next} alt="nextJs" />
                </div>
              </div>
              <div className="face5">
                <div className="logo">
                  <img src={Redux} alt="Redux" />
                </div>
              </div>
              <div className="face6">
                <div className="logo">
                  <img src={Tailwind} alt="Tailwind" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-tech">
            <div className="cubespinner">
              <div className="face1">
                <div className="logo">
                  <img src={Javascript} alt="Javascript" />
                </div>
              </div>
              <div className="face2">
                <div className="logo">
                  <img src={Typescript} alt="Typescript" />
                </div>
              </div>
              <div className="face3">
                <div className="logo">
                  <img src={NodeJs} alt="NodeJs" />
                </div>
              </div>
              <div className="face4">
                <div className="logo">
                  <img src={Axios} alt="Axios" />
                </div>
              </div>
              <div className="face5">
                <div className="logo">
                  <img src={Express} alt="Express" />
                </div>
              </div>
              <div className="face6">
                <div className="logo">
                  <img src={NestJs} alt="NestJs" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-tech">
            <div className="cubespinner">
              <div className="face1">
                <div className="logo">
                  <img src={Html} alt="Html" />
                </div>
              </div>
              <div className="face2">
                <div className="logo">
                  <img src={Css} alt="Css" />
                </div>
              </div>
              <div className="face3">
                <div className="logo">
                  <img src={Git} alt="Git" />
                </div>
              </div>
              <div className="face4">
                <div className="logo">
                  <img src={Postgre} alt="Postgre" />
                </div>
              </div>
              <div className="face5">
                <div className="logo">
                  <img src={MongoDb} alt="MongoDb" />
                </div>
              </div>
              <div className="face6">
                <div className="logo">
                  <img src={Multer} alt="Multer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Tech
