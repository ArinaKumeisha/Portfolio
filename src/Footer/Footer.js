import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Арина Кумейша</h3>
                <div className={style.field}>
                    <div className={style.item_grew}>
                    </div>
                    <div className={style.item_grew}>
                    </div>
                    <div className={style.item_grew}>
                    </div>
                    <div className={style.item_grew}>
                    </div>
                </div>
                <div className={style.text}>
                    <h3 className={style.title}>© 2021 Все права защищены</h3>
                </div>
            </div>


        </div>
    );
};

export default Footer;