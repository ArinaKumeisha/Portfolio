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
                <Jello>
                <div className={style.projects}>
                    <Project
                        style={social}
                        title={"TodoList"}
                        description={"Проект написан на React TypeScriptПроект написан на Redux TypeScript"}
                        href={''}/>
                    <Project
                        style={counter}
                        title={"Counter"}
                        description={"Проект написан на Redux TypeScript.Проект написан на Redux TypeScript"}
                        href={'https://arinakumeisha.github.io/counter_Redux/'}/>
                    <Project
                        style={todo}
                        title={"Social Network"}
                        description={"Проект написан на Redux TypeScript.Проект написан на Redux TypeScript"}
                        href={'https://arinakumeisha.github.io/my_new_social_network/#/profile'}/>
                </div>
                </Jello>
            </div>
        </div>
    );
};

export default Projects;