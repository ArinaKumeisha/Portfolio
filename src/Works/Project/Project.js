import React from 'react';
import style from './Project.module.scss'
import {Button} from "@mui/material";
import styles from "../../common/components/button/Button.module.scss";
import Swing from "react-reveal/Swing";


const Project = (props) => {
    return (
        <Swing>
        <div className={style.project}>
            <div className={style.img} style={props.style} >
                <Button color={"inherit"}
                        className={styles.btn}>
                    <a href={props.href}
                       style={{color: 'white'}}>project</a>
                </Button>
            </div>

            <div className={style.info}>
                <h4 className={style.projectTitle}>
                   <div>{props.title}</div>
                </h4>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
            </Swing>
    );
};

export default Project;