import { useEffect, useState } from 'react'
import Bootstrap from '../../assets/images/bootstrap.png'
import Angular from '../../assets/images/angular.png'
import ReactLogo from '../../assets/images/reactjs.png'
import Next from '../../assets/images/nextjs.png'
import Redux from '../../assets/images/redux.png'
import Tailwind from '../../assets/images/tailwind.png'
import Flutter from '../../assets/images/flutter.png'
import Javascript from '../../assets/images/javascript.png'
import Typescript from '../../assets/images/typescript.png'
import Python from '../../assets/images/python.png'
import Dart from '../../assets/images/dart.png'
import Java from '../../assets/images/java.png'
import NodeJs from '../../assets/images/nodejs.png'
import Express from '../../assets/images/express-js.png'
import NestJs from '../../assets/images/nestjs.png'
import Flask from '../../assets/images/flask.png'
import FastAPI from '../../assets/images/fastapi.png'
import Html from '../../assets/images/html.png'
import Css from '../../assets/images/css.png'
import Git from '../../assets/images/git.png'
import Postgre from '../../assets/images/postgresql.png'
import MongoDb from '../../assets/images/mongodb.png'
import AnimatedLetters from '../AnimatedLetters'
import BrandLoader from '../BrandLoader'
import './index.scss'

const techGroups = [
  {
    title: 'Languages',
    description: 'Programming languages I commonly use across my projects.',
    items: [
      { name: 'JavaScript', image: Javascript },
      { name: 'TypeScript', image: Typescript },
      { name: 'Python', image: Python },
      { name: 'Dart', image: Dart },
      { name: 'Java', image: Java },
    ],
  },
  {
    title: 'Frontend',
    description:
      'Responsive interfaces and modern user-facing web experiences.',
    items: [
      { name: 'React', image: ReactLogo },
      { name: 'Next.js', image: Next },
      { name: 'Flutter', image: Flutter },
      { name: 'Angular', image: Angular },
      { name: 'Redux', image: Redux },
      { name: 'Tailwind CSS', image: Tailwind },
      { name: 'Bootstrap', image: Bootstrap },
    ],
  },
  {
    title: 'Backend',
    description:
      'APIs, integrations, and application logic for production workflows.',
    items: [
      { name: 'Node.js', image: NodeJs },
      { name: 'Express', image: Express },
      { name: 'NestJS', image: NestJs },
      { name: 'Flask', image: Flask },
      { name: 'FastAPI', image: FastAPI },
    ],
  },
  {
    title: 'Database & Tools',
    description:
      'Core tools I use to support fullstack development and delivery.',
    items: [
      { name: 'PostgreSQL', image: Postgre },
      { name: 'MongoDB', image: MongoDb },
      { name: 'Git', image: Git },
      { name: 'HTML', image: Html },
      { name: 'CSS', image: Css },
    ],
  },
]

const Tech = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const aboutArray = ['T', 'e', 'c', 'h', 'n', 'o', 'l', 'o', 'g', 'y']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container tech-page">
        <div className="tech-shell">
          <div className="tech-header">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={aboutArray}
                idx={15}
              />
            </h1>
            <p>
              A selection of technologies I use across frontend, backend, and
              fullstack development.
            </p>
          </div>

          <div className="tech-groups">
            {techGroups.map((group) => (
              <section className="tech-group-card" key={group.title}>
                <div className="tech-group-copy">
                  <h2>{group.title}</h2>
                  <p>{group.description}</p>
                </div>

                <div className="tech-icon-grid">
                  {group.items.map((item) => (
                    <div className="tech-icon-card" key={item.name}>
                      <div className="tech-icon-frame">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <BrandLoader />
    </>
  )
}

export default Tech
