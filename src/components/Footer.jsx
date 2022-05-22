import React from 'react'
import style from '../css/Footer.module.css'

function Footer() {
  return (
    <footer>
      <div className={style.footer_bar}>
        <div className={style.footer_text}>
          <div>I am always open to new opportunities.</div>
          <div>Feel free to get in touch with me at <span className={style.email}>mahi.rahman@student.unsw.edu.au</span></div>
        </div>
        <div className={style.copyright}>
          Copyright © {new Date().getFullYear()} Mahi Rahman
        </div>
      </div>
    </footer>
  )
}

export default Footer
