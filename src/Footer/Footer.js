import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Arina Kumeisha</h3>

                <div className={style.field}>

                    <div className={style.item_grew}>
                        <a href="https://e.mail.ru/inbox/?rf=https%253A%252F%252Fe.mail.ru%252F"
                           className={style.link}>
                            <h3>e-mail</h3>
                        </a>
                    </div>

                    <div className={style.item_grew}>
                        <a href="https://www.linkedin.com/in/%D0%B0%D1%80%D0%B8%D0%BD%D0%B0-%D0%BA%D1%83%D0%BC%D0%B5%D0%B9%D1%88%D0%B0-3051ab221/"
                           className={style.link}>
                            <h3> Linkedin</h3>
                        </a>
                    </div>
                    <div className={style.item_grew}>
                        <a href="https://github.com/ArinaKumeisha"
                           className={style.link}>
                            <h3> Github</h3>
                        </a>

                    </div>
                    <div className={style.item_grew}>
                        <a href="https://www.codewars.com/users/Arina%20Kumeisha"
                           className={style.link}>
                            <h3> CodeWars</h3>
                        </a>
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