import React from 'react';
import style from './skills.module.scss'
import styleContainer from '../common/styles/container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import react from '../image/react.png'
import redux from '../image/redux.png'
import js from '../image/js.jpg'
import csss from '../image/css.jpg'
import Roll from "react-reveal/Roll";


const Skills = () => {

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <Title title={'Skills'}/>
                <div className={style.skills}>

                    <Roll left> <Skill
                        title={"React"}
                        text={"I have been studying React for over 6 months."}
                        image={react}/></Roll>

                    <Roll right> <Skill
                        title={"Redux"}
                        text={"I am learning redux, I use redux in my applications as a business state"}
                        image={redux}/></Roll>

                    <Roll left><Skill
                        title={"JS"}
                        text={"I improve my knowledge of js every day, this is where codewars and books help me"}
                        image={js}/></Roll>

                    <Roll right> <Skill
                        title={"CSS"}
                        text={"I am learning CSS and expanding my knowledge in SCSS"}
                        image={csss}/></Roll>
                </div>

            </div>

        </div>
    )
};

export default Skills;