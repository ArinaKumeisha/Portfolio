import React from 'react';
import style from './Contacts.module.scss'
import styleButton from '../common/styles/button.module.css'

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h2>Контакты</h2>

                <form className={style.contacts}>
                    <input placeholder={"введите ваше имя"} className={style.item}/>
                    <input placeholder={"телефон"} className={style.item}/>
                    <textarea placeholder={"введите сообщение"}
                              className={style.itemTexteria}/>
                </form>
                <button className={styleButton.button}>Отправить</button>

            </div>
        </div>
    );
};

export default Contacts;