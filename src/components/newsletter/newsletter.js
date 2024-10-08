import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import classes from './newsletter.module.scss';
import "react-toastify/dist/ReactToastify.css";

function Newsletter({ newsletterItems }) {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        let errorMessage = '';

        const response = await fetch('http://mechnolink.com.pk/newsletter_mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
            })
        }).then(async response => {
            if (!response.ok) {
                errorMessage = await response.json().then(error => error.message);
            }
            return response;
        })

        if (response && response.ok) {
            console.log('Subscribed Successfully');
            toast.success("Email Sent!", {
                position: "bottom-right"
              });
            setEmail('');
        } else {
            console.log(errorMessage)
            console.error('Error sending email');
            toast.error(`${errorMessage}`, {
                position: "bottom-right"
              });
        }
    };

    return (
        <div className={`${classes.bg}`}>
            <Container>
                <Row>
                    {newsletterItems?.map((newsletterItem) => (
                        <Col lg={{ span: 12 }} key={newsletterItem.id}>
                            <ToastContainer />
                            <div className={classes.item}>
                                <h2 className={classes.title}>
                                    {newsletterItem?.title}
                                </h2>
                                <form className={classes.form} onSubmit={handleSubmit}>
                                    <input
                                        className={classes.input_field}
                                        type="email"
                                        placeholder="To get update, enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className={classes.btn__wrap}>
                                        <button
                                            type="submit"
                                            className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__white}`}
                                        >
                                            Subscribe now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

Newsletter.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
};

export default Newsletter;
