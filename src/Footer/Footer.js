import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/container.module.css'
import mail from '../image/google_plus.png'
import insta from '../image/instagram.png'
import linkedin from '../image/linkedin.png'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Arina Kumeisha</h3>

                <div className={style.field}>

                    <div className={style.item_grew}>
                        <a href="mailto:arinanozdracheva2021@gmail.com">
                            <div><img src={mail} alt='mail'/></div>
                        </a>
                    </div>

                    <div className={style.item_grew}>
                        <a href="https://www.instagram.com/arinakumeisha/">
                            <div><img src={insta} alt='instagramm'/></div>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/in/%D0%B0%D1%80%D0%B8%D0%BD%D0%B0-%D0%BA%D1%83%D0%BC%D0%B5%D0%B9%D1%88%D0%B0-3051ab221/"
                        >
                            <div><img src={linkedin} alt='linkedin'/></div>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/ArinaKumeisha"
                        >
                            <div className={style.link}>
                                <b className={style.git}>git</b>
                            </div>
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