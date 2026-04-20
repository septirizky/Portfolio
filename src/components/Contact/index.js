import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import BrandLoader from '../BrandLoader'
import './index.scss'

const contactDetails = [
  { label: 'Email', value: 'septirizky79@gmail.com' },
  { label: 'Location', value: 'Tangerang Selatan, Indonesia' },
  {
    label: 'Availability',
    value: 'Open to freelance work, collaborations, and relevant career opportunities',
  },
]

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const contactArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="contact-shell">
          <section className="contact-intro">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={contactArray}
                idx={15}
              />
            </h1>
            <p>
              I am open to freelance work, collaborations, and relevant career
              opportunities. If you have a project in mind or would like to
              discuss potential work together, feel free to send me a message.
            </p>

            <div className="contact-info-card">
              {contactDetails.map((item) => (
                <div className="contact-info-row" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="contact-form-card">
            <form action="https://formspree.io/f/mdoqkoar" method="POST">
              <div className="contact-form-grid">
                <div className="field half">
                  <input placeholder="Name" type="text" name="name" required />
                </div>
                <div className="field half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="field full">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="field full">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="contact-actions">
                <input type="submit" className="flat-button" value="SEND" />
              </div>
            </form>
          </section>
        </div>
      </div>
      <BrandLoader />
    </>
  )
}

export default Contact
