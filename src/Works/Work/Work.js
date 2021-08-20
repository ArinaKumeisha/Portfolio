import React from 'react';
import style from './Work.module.css'


const Work = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <p className={style.styleText}>
                    <a href="">Посмотреть</a>
                </p>
            </div>

            <div className={style.description}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    );
};

export default Work;