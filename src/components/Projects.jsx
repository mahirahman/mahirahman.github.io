import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import global from '../css/Global.module.css'
import style from '../css/Projects.module.css'
import projects from '../data/projects.json'

function Projects() {
  return (
    <section>
      <div className={global.container}>
        <h2 className={global.secondary_text}>Projects</h2>
        <div className={style.project_container}>
          {projects.map((project, index) => (
            <Card className={style.card_color} key={index} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                className={style.project_img_size}
                component="img"
                image={project.thumbnail}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography className={style.card_description}>
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
