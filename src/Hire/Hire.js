import React from 'react';
import style from './Hire.module.scss';
import styleContainer from '../common/styles/container.module.css'

const Hire = () => {
    return (
        <div className={style.homeWorkBlock}>
            <div className={styleContainer.container}>

                <div className={style.homeWork}>
                    <h2 className={style.title}>
                        You can call me or write in the form below
                    </h2>

                    <p>
                        <i>+375-33-673-77-62
                        </i>
                    </p>
                    <p>
                        <b style={{fontSize: '25px'}}>Arina</b>
                    </p>


                </div>


            </div>

        </div>


    );
};

export default Hire;