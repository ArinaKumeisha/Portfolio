import React from 'react';
import style from './Skill.module.scss'
import Roll from "react-reveal/Roll";

const Skill = (props) => {
    return (
        <Roll left>
            <div className={style.skill}>
                <div>
                    <img src={props.image} className={style.icon} alt={''}/>
                </div>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.text}</span>
            </div>
        </Roll>

    );
}

export default Skill;