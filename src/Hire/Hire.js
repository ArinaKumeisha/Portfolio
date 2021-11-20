import React from 'react';
import style from './Hire.module.scss';
import hand from '../image/ruka.png';
import Title from "../common/components/title/Title";

const Hire = () => {
    return (
        <div className={style.homeWorkBlock} id={'contacts'}>
            <Title title={'Contacts details'}/>
            <div className={style.homeWork}>
                <div>
                    +375-33-673-77-62
                    <div>arinanozdracheva2021@gmail.com</div>
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