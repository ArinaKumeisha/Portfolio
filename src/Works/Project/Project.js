import React from 'react';
import style from './Project.module.scss'
import Swing from "react-reveal/Swing";
import stylehref from '../../common/styles/href.module.scss'
import Tilt from "react-tilt";

const Project = (props) => {
    return (
        <Tilt className="Tilt" options={{max: 25}}>
        <Swing>
            <a href={props.href} className={stylehref.href}
               style={{color: 'white'}}>
                <div className={style.project}>
           <div className={style.img} style={props.style} >
            </div>

            <div className={style.info}>
                <h4 className={style.projectTitle}>
                   <div>{props.title}</div>
                </h4>
                <p className={style.description}>{props.description}</p>
            </div>
        </div> </a>
            </Swing>
        </Tilt>
    )
}

export default Project;