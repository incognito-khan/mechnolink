import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import classes from './index.module.scss';
import "react-toastify/dist/ReactToastify.css";


function Contact({ contactItems }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        let errorMessage = '';

        const response = await fetch('http://mechnolink.com.pk/mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message,
            })
        }).then(async response => {
            if (!response.ok) {
                errorMessage = await response.json().then(error => error.message);
            }
            return response;
        })

        if (response && response.ok) {
            console.log('Email sent successfully');
            toast.success("Email Sent!", {
                position: "bottom-right"
              });
            setName('');
            setEmail('');
            setMessage('');
        } else {
            console.log(errorMessage)
            console.error('Error sending email');
            toast.error(`${errorMessage}`, {
                position: "bottom-right"
              });
        }
    };

    return (
        <main>
            {contactItems?.map((contactItem) => (
                <Container key={contactItem.id}>
                    <div className={classes.area}>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <div className={classes.img_wrap}>
                                    <div className={classes.img}>
                                        <img
                                            className="img-full"
                                            src={contactItem?.image}
                                            alt={contactItem?.imageAlt}
                                        />
                                    </div>
                                    <div className={classes.pattern}>
                                        <img
                                            src={contactItem?.pattern}
                                            alt={contactItem?.patternAlt}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{ span: 6 }} className="ps-50">
                                <div className={classes.content}>
                                    <span className={classes.subtitle}>
                                        {contactItem?.subTitle}
                                    </span>
                                    <h2 className={classes.title}>
                                        {contactItem?.title}
                                    </h2>
                                    <p className={classes.desc}>
                                        {contactItem?.desc}
                                    </p>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.addressTitle}
                                        </h3>
                                        <p className={classes.info_desc}>
                                            {contactItem?.addressDesc}
                                        </p>
                                    </div>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.infoTitle}
                                        </h3>
                                        <ul className={classes.info_list}>
                                            {contactItem?.infoList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        {item.listText}
                                                        <Link href={item.path}>
                                                            {item.listValue}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={classes.form_area}>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <ToastContainer />
                                <h2 className={classes.form_title}>
                                    {contactItem?.formTitle}
                                </h2>
                                <p className={`${classes.form_desc} mb-0`}>
                                    {contactItem?.formDesc}
                                </p>
                                <form className={classes.form} onSubmit={handleSubmit}>
                                    <div className={classes.form_group__input}>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name*"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={`${classes.form_input__field} me-30`}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email*"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={
                                                classes.form_input__field
                                            }
                                        />
                                    </div>
                                    <textarea
                                        type="text"
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className={`${classes.form_textarea__field} mt-30`}
                                    />
                                    <div className={classes.form_btn__wrap}>
                                        <button
                                            className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__primary}`}
                                            type="submit"
                                        >
                                            {contactItem?.btnText}
                                        </button>
                                    </div>
                                </form>
                            </Col>
                            <Col lg={{ span: 6 }} className="ps-lg-50">
                                <div className="map_with__pattern">
                                    <iframe
                                        title="Oxybuild contact title"
                                        className="map_size"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108885.88420581912!2d72.99475275451753!3d31.477881018795976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242053cf30205%3A0xfeb2add972f50fa1!2sMechnolink%20International!5e0!3m2!1sen!2s!4v1709196330268!5m2!1sen!2s"
                                    />
                                    <div className="map_pattern">
                                        <img
                                            src={contactItem?.mapPattern}
                                            alt={contactItem?.mapPatternAlt}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            ))}
        </main>
    );
}

Contact.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default Contact;
