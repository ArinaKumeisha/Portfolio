import React from 'react';
import style from './main.module.css'
import styleContainer from '../common/styles/container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            Блок 1
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <h1>Привет!</h1>
                    <span>Меня зовут Арина Кумейша, я front-end разработчик</span>
                </div>
                <div className={style.photo}>фото</div>
            </div>

        </div>

    );
}

export default Main;