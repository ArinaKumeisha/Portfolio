import React from 'react';
import styleContainer from '../common/styles/container.module.css';
import Project from './Project/Project';
import Title from '../common/components/title/Title';
import style from './Projects.module.scss';
import todoImage from '../assets/image/social.jpg'
import socialImage from '../assets/image/images.jpg'
import counterImage from '../assets/image/counter.png'
import Jello from "react-reveal/Jello";


const Projects = () => {
    const todo = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`,
    }
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`,
    }
    const counter = {
        color: 'blue',
        backgroundImage: `url(${counterImage})`,
    }

    return (
        <div  id='projects' className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
              <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project
                        style={social}
                        title={"TodoList"}
                        description={"The project is written in React, Redux and TypeScript"}
                        href={''}/>
                    <Project
                        style={counter}
                        title={"Counter"}
                        description={"The project is written in React, Redux and TypeScript"}
                        href={'https://arinakumeisha.github.io/counter_Redux/'}/>
                    <Project
                        style={todo}
                        title={"Social Network"}
                        description={"The project is written in React, Redux and TypeScript"}
                        href={'https://arinakumeisha.github.io/my_new_social_network/#/profile'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;