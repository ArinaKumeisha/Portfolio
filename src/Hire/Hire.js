import React from 'react';
import style from './Hire.module.scss';
import hand from '../image/ruka.png';

const Hire = () => {
    return (
        <div className={style.homeWorkBlock}>

            <div className={style.homeWork}>
                <h2 className={style.title}>
                    You can call me or write in the form below
                </h2>

                <div>
                    +375-33-673-77-62
                </div>
                <img src={hand} className={style.hand} alt={''}/>
                <div className={style.name}>
                    Arina
                </div>
            </div>


        </div>


    );
};

export default Hire;