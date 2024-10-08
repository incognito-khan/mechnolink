import PropTypes from 'prop-types';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container } from 'react-bootstrap';
import classes from './brand.module.scss';
import { Slide } from '../swiper';

function BrandOne({ brandItems, settings }) {
    const SwiperComps = dynamic(() => import('../swiper'), {
        ssr: false,
    });
    settings = {
        spaceBetween: 0,
        pagination: false,
        loop: true,
        // navigation: {
        //     nextEl: '.brand-button-next',
        //     prevEl: '.brand-button-prev',
        // },
        autoplay: {
            delay: 2000, // delay between transitions in milliseconds
            disableOnInteraction: false, // autoplay will not stop after user interactions
        },
        effect: 'slide', 
        // navigation: {
        //     nextEL: '.brand-button-next',
        //     prevEL: '.brand-button-prev',
        // },
        breakpoints: {
            1200: {
                slidesPerView: 5,
                grid: {
                    rows: 1,
                    fill: 'row',
                },
                spaceBetween: 100,
            },
            768: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row',
                },
                spaceBetween: 100,
            },
            576: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row',
                },
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row',
                },
                spaceBetween: 30,
            },
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                },
                spaceBetween: 30,
            },
        },
    };
    return (
        <div className={`${classes.bg} ${classes.space__top}`}>
            <div className={classes.heading}>
               <h1>Partner of Progress</h1>
            </div>

            <Container>
                {/* <div className={classes.navigation_brand}>
                    <div
                        className={`${classes.button_next_brand} brand-button-next`}
                    >
                        <FaChevronLeft />
                    </div>
                    <div
                        className={`${classes.button_prev_brand} brand-button-prev`}
                    >
                        <FaChevronRight />
                    </div>
                </div> */}
                <SwiperComps settings={settings}>
                    {brandItems.map((brandItem) => {

                        const url = brandItem && brandItem.markdown ? brandItem.markdown.match(/\(([^)]+)\)(?![^()]*\()/)[1] : '';
                        return (
                            <Slide key={brandItem.id}>
                                <a href={url} className={classes.item}>
                                    <a href={brandItem?.path} target='_blank' rel='noreferrer'>
                                    <img
                                        src={brandItem?.image}
                                        alt={brandItem?.imageAlt}
                                    />
                                    </a>
                                </a>
                            </Slide>
                        );
                    })}
                </SwiperComps>
            </Container>
        </div>
    );
}

BrandOne.propTypes = {
    brandItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
};

export default BrandOne;
