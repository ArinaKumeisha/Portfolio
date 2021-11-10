import React from 'react';
import style from './Skill.module.scss'

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}><img src={props.image}/></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.text}</span>
        </div>

    );
}

export default Skill;