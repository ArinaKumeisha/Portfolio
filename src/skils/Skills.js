import React from 'react';
import style from './skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import react from '../image/react.png'
import redux from '../image/redux.png'
import js from '../image/js.png'
import css from '../image/css.png'


const Skills = () => {

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title title={'Skills'}/>

                <div className={style.skills}>

                    <Skill
                        title={"React"}
                        text={"I am learning react and writing applications using it"}
                        image={react}/>

                    <Skill
                        title={"Redux"}
                        text={" I use redux and Redux toolkit in my applications as a business state"}
                        image={redux}/>

                    <Skill
                        title={"JS"}
                        text={"I improve my knowledge, this is where codewars and books help me"}
                        image={js}/>

                    <Skill
                        title={"CSS"}
                        text={"I am learning CSS,  I improve  my knowledge in SCSS"}
                        image={css}/>


                </div>

            </div>

        </div>
    )
};

export default Skills;