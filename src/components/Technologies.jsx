import React from 'react'
import global from '../css/Global.module.css'
import style from '../css/Technologies.module.css'
import tech_stack from '../data/tech_stack.json'

function Technologies() {
  return (
    <section>
      <div className={global.container} id='tech'>
        <h2 className={global.secondary_text}>I've worked with a range of technologies, ranging from frontend to backend and databases.</h2>
        <div className={style.box_container}>
          {tech_stack.map((stack, index) => (
            <div  key={index} className={style.box}>
              <h3 className={`${global.sub_text} ${style.box_heading}`}>{stack.name}</h3>
              <div className={style.img_container}>
                  {stack.technology.map((tech, index) => (
                    <div key={index} className={style.img_center}>
                      <img className={`${style.img_nodrag} ${style.img_size}`} src={tech.img} alt={`${tech.name} Logo`}/>
                      <h3 className={style.technology_name}>{tech.name}</h3>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
