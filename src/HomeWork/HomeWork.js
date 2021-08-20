import React from 'react';
import style from './HomeWork.module.css';
import styleContainer from '../common/styles/container.module.css'
import styleButton from '../common/styles/button.module.css';

const HomeWork = () => {
    return (
        <div className={style.homeWorkBlock}>
            <div className={styleContainer.container}>

                <div className={style.homeWork}>
                    <h2 className={style.title}>
                        Рассматриваю варианты удаленной работы
                    </h2>
                    <button className={styleButton.button}>
                        Нанять меня
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeWork;