import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { Col, Container, Row } from 'react-bootstrap';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';
import classes from '../services/service.module.scss';
import { Slide } from '../swiper';

function HomePageServices({ serviceSectionItems, settings }) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    settings = {
        spaceBetween: 30,
        pagination: false,
        // navigation: {
        //     nextEl: '.service-button-next',
        //     prevEl: '.service-button-prev',
        // },
        slidesPerView: 5,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    };

    const [isHoveredOne, setIsHoveredOne] = useState(false);
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const [isHoveredThree, setIsHoveredThree] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const boxRef = useRef(null);

    const handleClickOutside = (event) => {
        if (boxRef.current && !boxRef.current.contains(event.target)) {
            setIsBoxVisible(false);
        }
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMouseMove = (event) => {
        const boundingRect = event.currentTarget.getBoundingClientRect();
        setTooltipPosition({
            x: event.clientX - boundingRect.left + 20,
            y: event.clientY - boundingRect.top + 20
        });
    };

    return (
        <div className={classes.area}>
            <Container>
                {serviceSectionItems.map((item) => (
                    <div className={classes.section} key={item.id}>
                        <div className={classes.section_title}>
                            <span>{item?.subTitle}</span>
                            <h2
                                dangerouslySetInnerHTML={{
                                    __html: item.title,
                                }}
                            />
                        </div>
                        <div className={classes.section_banner}>
                            <h3
                                className={classes.info}
                                dangerouslySetInnerHTML={{
                                    __html: item.bannerInfo,
                                }}
                                
                            />
                            <span className={classes.info_phone}>{item?.bannerPhone}</span>
                        </div>
                    </div>
                ))}
                <Row>
                    <Col lg={{ span: 12 }}>
                        {/* <SwiperComps
                                settings={settings}
                                className={classes.slider}
                            >
                                <ServiceItem service='/service/engineering-consulting' />
                                <ServiceItem service='engineering-services' />
                                <ServiceItem service='indent-sales' />
                                    
                            </SwiperComps> */}
                        <div className={classes.services}>
                            <SwiperComps settings={settings}>
                                <Slide>
                                    <div
                                        className={classes.service_item}
                                    >
                                        <Link href="/services/marketing-services">
                                            <img
                                                className={classes.services_imagess}
                                                src='/images/services/marketing-services/marketing-services-md.svg'
                                                alt='Marketing Services'
                                            />
                                        </Link>
                                        <div className={classes.add__action}>
                                            <Link href="/services/marketing-services">
                                                <h2 className={classes.title}>
                                                    Marketing Services
                                                </h2>
                                            </Link>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide>
                                    <div
                                        className={classes.service_item}
                                    >
                                        <Link href='/services/engineering-services'>
                                            <img
                                                className={classes.services_imagess}
                                                src='/images/services/engineering-services/engineering-services-md.jpg'
                                                alt='Engineering Services'
                                            />
                                        </Link>
                                        <div className={classes.add__action}>
                                            <h2 className="title mb-0">
                                                <Link href='/services/engineering-services'>Engineering Services</Link>
                                            </h2>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide>
                                    <div
                                        className={classes.service_item}
                                    >
                                        <Link href='/services/manufacturing-services'>
                                            <img
                                                className={classes.services_imagess}
                                                src='/images/services/manufacturing-services/manufacturing-services-md.jpg'
                                                alt='Manufacturing Services'
                                            />
                                        </Link>
                                        <div className={classes.add__action}>
                                            <h2 className="title mb-0">
                                                <Link href='/services/manufacturing-services'>Manufacturing Services</Link>
                                            </h2>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide>
                                    <div
                                        className={classes.service_item}
                                    >
                                        <Link href='/services/engineering-consulting'>
                                            <img
                                                className={classes.services_imagess}
                                                src='/images/services/engineering-consulting/engineering-consulting-md.jpg'
                                                alt='Engineering Consulting'
                                            />
                                        </Link>
                                        <div className={classes.add__action}>
                                            <h2 className="title mb-0">
                                                <Link href='/services/engineering-consulting'>Engineering Consulting</Link>
                                            </h2>
                                        </div>
                                    </div>
                                </Slide>
                            </SwiperComps>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

HomePageServices.propTypes = {
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default HomePageServices;
