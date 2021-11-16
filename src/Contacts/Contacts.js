import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {Button, FormControl, FormGroup, TextField} from "@mui/material";
import Grid from "antd/es/card/Grid";
import style from './Contacts.module.scss'
import Fade from "react-reveal/Fade";

export const Contacts = () => {
    const [state, setState] = useState('')
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_57dxiab', 'template_mj8kssk', e.target, 'user_wQbvHfAuCTKF0KItWzVHg')
            .then((result) => {
                setState('Message sent, thank you!')
            }, (error) => {
                setState(error.text);
            });
        e.target.reset()
    };
    return (
            <Grid className={style.contactsContainer} id={'contacts'}>
                <Fade left>
                    <form onSubmit={sendEmail}>
                        <FormControl fullWidth sx={{width: 280}}>
                            <FormGroup>
                                <TextField label="name"
                                           margin="dense"
                                           id="name"
                                           type="text"
                                           name="email"
                                />
                                <TextField label="email"
                                           margin="dense"
                                           id="email"
                                           type="email"
                                           name="email"
                                />
                                <TextField label="subject" margin="dense"
                                           id="subject"
                                           type="subject"
                                           name="subject"
                                />
                                <TextField
                                    label="message"
                                    id="message"
                                    type="message"
                                    multiline
                                    rows={5}
                                    margin="dense"
                                    name="message"
                                />
                                <Button color={"inherit"} type="submit">Send</Button>
                                <div className={style.message}>{state}</div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Fade>
            </Grid>
    )
}