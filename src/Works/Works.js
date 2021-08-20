import React from 'react';
import style from './Works.module.css'
import styleContainer from "../common/styles/container.module.css";
import Work from "./Work/Work";

const Works = () => {
    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.projects}>
                    <Work
                        title={"TodoList"}
                        description={"Проект написан на React TypeScript"}/>
                    <Work
                        title={"Counter"}
                        description={"Проект написан на Redux TypeScript"}/>

                </div>
            </div>

        </div>
    );
};

export default Works;