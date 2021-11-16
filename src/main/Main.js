import React from 'react';
import style from './main.module.scss';
import mainPhoto from "../assets/image/photo_2021-10-08_00-22-05.jpg";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


const Main = () => {
    const photo = {
        color: 'blue',
        backgroundImage: `url(${mainPhoto})`,
    }
    return (
        <div className={style.mainBlock} id='main'>
            <div className={style.mainContainer}>
                <div className={style.greeting}>
                    <h4>Hello everyone!</h4>
                    <span>I am </span>
                    <span> Arina </span>
                    <span className={style.name}>Kumeisha</span>

                    <h5><ReactTypingEffect
                        text={["I like React and Redux.", "And I am React developer"]}
                    />
                    </h5>

                </div>
                <Tilt className="Tilt" options={{max: 25}}>
                    <div style={photo} className={style.photo}>

                    </div>
                </Tilt>

            </div>
        </div>

    );
}

export default Main;