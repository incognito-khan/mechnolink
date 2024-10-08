import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';
import classes from './service.module.scss';

function ServiceItem({ service }) {
    const imagePath = `/images/services/${service?.slug}/${service?.mediumImage}`;
    const linkPath = `/services/${service?.slug}`;

    return (
        <div className={classes.service_items}>
        <div className="service-item">
            <Link href='/services/marketing-services' className={classes.img}>
                <img
                    className="img-full"
                    src='/images/services/marketing-services/marketing-services-md.svg'
                    alt='Marketing Services'
                />
            </Link>
            <div className={classes.add__action}>
                <h2 className="title mb-0">
                    <Link href='/services/marketing-services'>Marketing Services</Link>
                </h2>
                <div className={classes.icon}>
                    <Link href="/services/marketing-services" passHref>
                        <IoAddSharp />
                    </Link>
                </div>
            </div>
        </div>
        <div className="service-item">
            <Link href='/services/engineering-services' className={classes.img}>
                <img
                    className="img-full"
                    src='/images/services/engineering-services/engineering-services-md.jpg'
                    alt='Engineering Services'
                />
            </Link>
            <div className={classes.add__action}>
                <h2 className="title mb-0">
                    <Link href='/services/engineering-services'>Engineering Services</Link>
                </h2>
                <div className={classes.icon}>
                    <Link href="/services/engineering-services" passHref>
                        <IoAddSharp />
                    </Link>
                </div>
            </div>
        </div>
        <div className="service-item">
            <Link href='/services/engineering-consulting' className={classes.img}>
                <img
                    className="img-full"
                    src='/images/services/engineering-consulting/engineering-consulting-md.jpg'
                    alt='Engineering Consulting'
                />
            </Link>
            <div className={classes.add__action}>
                <h2 className="title mb-0">
                    <Link href='/services/engineering-consulting'>Engineering Consulting</Link>
                </h2>
                <div className={classes.icon}>
                    <Link href="/services/engineering-consulting" passHref>
                        <IoAddSharp />
                    </Link>
                </div>
            </div>
        </div>
        <div className="service-item">
            <Link href='/services/manufacturing-services' className={classes.img}>
                <img
                    className="img-full"
                    src='/images/services/manufacturing-services/manufacturing-services-md.jpg'
                    alt='Manufacturing-Services'
                />
            </Link>
            <div className={classes.add__action}>
                <h2 className="title mb-0">
                    <Link href='/services/manufacturing-services'>Manufacturing-Services</Link>
                </h2>
                <div className={classes.icon}>
                    <Link href="/services/manufacturing-services" passHref>
                        <IoAddSharp />
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
}

ServiceItem.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceItem;
