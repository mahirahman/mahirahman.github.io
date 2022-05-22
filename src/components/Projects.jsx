import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import Button from '@mui/material/Button';
import global from '../css/Global.module.css'
import style from '../css/Projects.module.css'
import projects from '../data/projects.json'

function Projects() {
  return (
    <section>
      <div className={global.container} id='projects'>
        <h2 className={global.secondary_text}>Projects</h2>
        <div className={style.project_container}>
          {projects.map((project, index) => (
            <Card className={style.card_color} key={index} sx={{ maxWidth: 345 }}>
              <CardMedia
                className={style.project_img_size}
                component='img'
                image={project.thumbnail}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {project.title}
                </Typography>
                <Typography className={style.card_description}>
                  {project.description}
                </Typography>
                <div className={style.btn_container}>
                  {project.url && <Button variant="contained" onClick={() => window.open(project.url, '_blank').focus()}>URL</Button>}
                  <Button variant="contained" onClick={() => window.open(project.repository, '_blank').focus()}>Git Repository</Button>
                </div>
                <div className={style.tags_container}>
                  {project.stack.map((tag, index) => (
                    <Chip key={index} className={style.tags} label={tag}/>
                  ))}
                </div>
              </CardContent>
          </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
