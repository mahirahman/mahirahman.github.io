import React from 'react'
import style from '../css/About.module.css'
import global from '../css/Global.module.css'
import BackgroundAnimation from './BackgroundAnimation'
import useWindowDimensions from './useWindowDimensions'

function About() {
  return (
    <section>
      <div className={style.flex_container} id='about'>
        <div className={global.container}>
        <h1 className={global.main_text}>Hi there, 👋</h1>
          <div className={style.text}>
            <p>I'm Mahi, I'm interested in full stack development and I'm always
              keen on learning new technologies to write secure and scalable solutions.
            </p>
          </div>
        </div>
        {useWindowDimensions().width > 950 &&
          <div className={style.bg_animation}>
            <BackgroundAnimation/>
          </div>
        }
      </div>
    </section>
  )
}

export default About
