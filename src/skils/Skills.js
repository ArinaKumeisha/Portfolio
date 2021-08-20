import React from 'react';
import style from './skills.module.css'
import styleContainer from '../common/styles/container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Мои навыки</h2>
                <div className={style.skills}>
                    <Skill
                        title={"React"}
                        text={"Освоила библиотеку реакт, имеется опыт создания приложений."}/>
                    <Skill
                        title={"Redux"}
                        text={"Знакома с редакс, имею опыт работы с редаксом."}/>
                    <Skill
                        title={"JS"}
                        text={"Обучаюсь JS, и в данный момент расширяю свои знания."}/>
                    <Skill
                        title={"CSS"}
                        text={"Интенсивно осваиваю CSS, есть опыт в дизайне сайта, знакома с Flex."}/>
                </div>
            </div>

        </div>
    )
};

export default Skills;