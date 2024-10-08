import PropTypes from 'prop-types';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import classes from './service.module.scss';

function ServiceSidebar({ sidebarList, servicesSidebar, service }) {
    
    return (
        <Col lg={{ span: 3 }} style={{paddingLeft: '40px'}}>
            {servicesSidebar?.map((serviceSidebar) => (
                <div className={`sidebar ${classes.sidebar}`} key={serviceSidebar.id}>
                    {/* <div className={`${classes.sidebar_widget} mb-30`}>
                        <ul className={classes.sidebar_list}>
                                <li>
                                    <Link
                                        href="/services/ex-stock-sales"
                                        download
                                    >
                                        Ex-stock Sales
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/indent-sales"
                                        download
                                    >
                                        Indent Sales
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/engineering-services"
                                        download
                                    >
                                        Engineering Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/engineering-consulting"
                                        download
                                    >
                                        Engineering Consulting
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/manufacturing-services"
                                        download
                                    >
                                        Manufacturing Services
                                    </Link>
                                </li>
                        </ul>
                    </div> */}
                    {/* <div
                        className={`${classes.sidebar_brochure__widget} mb-30`}
                    >
                        <ul className={`${classes.sidebar_brochure__list}`}>
                            {serviceSidebar?.downloadBrochure?.map(
                                (brochureList) => (
                                    <li key={brochureList.id}>
                                        <Link
                                            href={brochureList?.path}
                                            download
                                        >
                                            {brochureList?.listItem}
                                        </Link>
                                        <a
                                            href={brochureList?.path}
                                            download
                                        >
                                            {brochureList?.listItem}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div> */}
                    {/* <div className={`${classes.sidebar_widget__banner}`}>
                        <img
                            src={serviceSidebar?.widgetBanner}
                            alt={serviceSidebar?.widgetBannerAlt}
                        />
                    </div> */}

                    <div className={classes.banner}>
                        {service?.largeImage && (
                            <img
                                className={service?.slug === 'ex-stock-sales' ? classes.img_ex_stock : 'img-full'}
                                src={service?.largeImage}
                                alt={service?.title}
                            />
                        )}

                        {service?.firstImage && (
                            <img
                                className={service?.slug === 'ex-stock-sales' ? classes.img_ex_stock : 'img-full'}
                                src={service?.firstImage}
                                alt={service?.title}
                            />
                        )}
                        {service?.secondImage && (
                            <img
                                className={service?.slug === 'ex-stock-sales' ? classes.img_ex_stock : 'img-full'}
                                src={service?.secondImage}
                                alt={service?.title}
                            />
                        )}

                        {service?.thirdImage && (
                            <img
                                className={service?.slug === 'ex-stock-sales' ? classes.img_ex_stock : 'img-full'}
                                src={service?.thirdImage}
                                alt={service?.title}
                            />
                        )}
                        {service?.fourthImage && (
                            <img
                                className={service?.slug === 'ex-stock-sales' ? classes.img_ex_stock : 'img-full'}
                                src={service?.fourthImage}
                                alt={service?.title}
                            />
                        )}
                        {service?.fifthImage && (
                            <img
                                className={service?.slug === 'ex-stock-sales' ? classes.img_ex_stock : 'img-full'}
                                src={service?.fifthImage}
                                alt={service?.title}
                            />
                        )}
                        {service?.sixthImage && (
                            <img
                                className={service?.slug === 'ex-stock-sales' ? classes.img_ex_stock : 'img-full'}
                                src={service?.sixthImage}
                                alt={service?.title}
                            />
                        )}
                        {service?.seventhImage && (
                            <img
                                className={service?.slug === 'ex-stock-sales' ? classes.img_ex_stock : 'img-full'}
                                src={service?.seventhImage}
                                alt={service?.title}
                            />
                        )}
                    </div>
                </div>
            ))}
        </Col>
    );
}

ServiceSidebar.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
    sidebarList: PropTypes.instanceOf(Object).isRequired,
    servicesSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceSidebar;
