import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import style from '../css/Navigation.module.css'
import useWindowDimensions from './useWindowDimensions'

function Navigation() {
  return (
    <nav>
      <div className={style.navigation_bar}>
        {useWindowDimensions().width > 700 &&
          <div className={style.logo}>
            Mahi Rahman
          </div>
        }
        <div className={style.nav_links}>
          <a href="#about">About</a>
          <a href="#tech">Technologies</a>
          <a href="#projects">Projects</a>
        </div>
        <div className={style.social_links}>
          <a href='https://github.com/mahirahman' target="_blank" rel="noreferrer" aria-label="Github Profile">
            <GitHubIcon/>
          </a>
          <a href='https://www.linkedin.com/in/mahirahman/' target="_blank" rel="noreferrer" aria-label="Linkedin Profile">
            <LinkedInIcon/>
          </a>
          <a href='mailto:mahi.rahman@gmx.us' aria-label="Email Address">
            <EmailIcon/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
