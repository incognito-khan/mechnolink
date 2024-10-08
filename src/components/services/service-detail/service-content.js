import { useRouter } from 'next/router'
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import service from '../../rich-text';
import classes from './index.module.scss';
import OurServices from './our-services';

function ServiceContent({ service, services, ourServices, sidebarList, servicesSidebar }) {
    const router = useRouter()
    // const pageName = router.pathname.split('/').pop()
    // const imagePath = `/images/services/${pageName}/${pageName}-lg.jpg`;
    // const imagePath = `/images/services/${service?.slug}/${service?.largeImage}`;
    const exStockGroupImage = service?.exStockGroupImage
    const downloadImage = `/images/services/download/download.png`;

    return (
        <Col lg={{ span: 9 }} className="pe-lg-45">
            {/* <div className="banner">
                <img
                    className="img-full"
                    src={imagePath}
                    alt={service?.title}
                /> 
            </div> */}



            <div className={classes.content}>
                <div className={classes.main}>
                    <h2 className={classes.title}>{service?.title}</h2>
                    <div
                        className={`${classes.sidebar_brochure__widget} mb-30`}
                    >
                        <ul className={`${classes.sidebar_brochure__list}`}>
                            {service?.firstBrochure && (
                                <li className={classes.list_items}>
                                    <a className={`${classes.brochureName}`}
                                        href={service?.firstBrochurePath}
                                        download
                                    >
                                        {service?.firstBrochure}
                                    </a>
                                    {service?.firstBrochure && <img className={classes.downloadImage} src={downloadImage} alt="Download Button" />}
                                </li>
                            )}
                            {service?.secondBrochure && (
                                <li className={classes.list_items}>
                                    <a className={`${classes.brochureName}`}
                                        href={service?.secondBrochurePath}
                                        download
                                    >
                                        {service?.secondBrochure}
                                    </a>
                                    {service?.secondBrochure && <img className={classes.downloadImage} src={downloadImage} alt="Download Button" />}
                                </li>
                            )}
                            {service?.thirdBrochure && (
                                <li className={classes.list_items}>
                                    <a className={`${classes.brochureName}`}
                                        href={service?.thirdBrochurePath}
                                        download
                                    >
                                        {service?.thirdBrochure}
                                    </a>
                                    {service?.thirdBrochure && <img className={classes.downloadImage} src={downloadImage} alt="Download Button" />}
                                </li>
                            )}

                            {service?.forthBrochure && (
                                <li className={classes.list_items}>
                                    <a className={`${classes.brochureName}`}
                                        href={service?.forthBrochurePath}
                                        download
                                    >
                                        {service?.forthBrochure}
                                    </a>
                                    {service?.forthBrochure && <img className={classes.downloadImage} src={downloadImage} alt="Download Button" />}
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
                <h3 className={classes.subtitle}>{service?.detailSubTitle}</h3>
                <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>{service?.detailDesc}</ReactMarkdown>
            </div>
            <div className={classes.item}>
                <Row className="">
                    {/* pb-35 g-30 */}
                    <Col lg={{ span: 4 }} className={`${classes.content_full} align-self-center`}>
                        <div className={classes.content}>
                            {service?.groupImageThirteen && (
                                <div className={classes.groupImages}>
                                    {service?.groupImageThirteen && (
                                        <img className={classes.groupImage} src={service?.groupImageThirteen} alt='Thirteen' />
                                    )}
                                    {service?.groupImageFourteen && (
                                        <img className={classes.groupImage} src={service?.groupImageFourteen} alt='Fourteen' />
                                    )}
                                </div>
                            )}
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textOne}
                            </ReactMarkdown>
                            {service?.groupImageNine && (
                                <div className={classes.groupImages}>
                                    {service?.groupImageNine && (
                                        <img className={classes.groupImage} src={service?.groupImageNine} alt='Nine' />
                                    )}
                                    {service?.groupImageFour && (
                                        <img className={classes.groupImage} src={service?.groupImageTen} alt='Ten' />
                                    )}
                                </div>
                            )}
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textTwo}
                            </ReactMarkdown>
                            {service?.groupImageSeventeen && (
                                <div className={classes.groupImages}>
                                    {service?.groupImageThirteen && (
                                        <img className={classes.groupImage} src={service?.groupImageSeventeen} alt='Seventeen' />
                                    )}
                                    {service?.groupImageEighteen && (
                                        <img className={classes.groupImage} src={service?.groupImageEighteen} alt='Eighteen' />
                                    )}
                                </div>
                            )}
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textThree}
                            </ReactMarkdown>
                            {service?.groupImageOne && (
                                <div className={classes.groupImages}>
                                    {service?.groupImageOne && (
                                        <img className={classes.groupImage} src={service?.groupImageOne} alt='One' />
                                    )}
                                    {service?.groupImageTwo && (
                                        <img className={classes.groupImage} src={service?.groupImageTwo} alt='Two' />
                                    )}
                                </div>
                            )}
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textFour}
                            </ReactMarkdown>
                            {service?.groupImageNineteen && (
                                <div className={classes.groupImages}>
                                    {service?.groupImageNineteen && (
                                        <img className={classes.groupImage} src={service?.groupImageNineteen} alt='Nineteen' />
                                    )}
                                    {service?.groupImageTwenty && (
                                        <img className={classes.groupImage} src={service?.groupImageTwenty} alt='Twenty' />
                                    )}
                                </div>
                            )}
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textFive}
                            </ReactMarkdown>
                            {service?.groupImageOne && (
                                <div className={classes.groupImages}>
                                    {service?.groupImageThree && (
                                        <img className={classes.groupImage} src={service?.groupImageThree} alt='Three' />
                                    )}
                                    {service?.groupImageFour && (
                                        <img className={classes.groupImage} src={service?.groupImageFour} alt='Four' />
                                    )}
                                </div>
                            )}
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textSix}
                            </ReactMarkdown>
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textSeven}
                            </ReactMarkdown>
                            {service?.groupImageEleven && (
                                <div className={classes.groupImages}>
                                    {service?.groupImageEleven && (
                                        <img className={classes.groupImage} src={service?.groupImageEleven} alt='Eleven' />
                                    )}
                                    {service?.groupImageTwelve && (
                                        <img className={classes.groupImage} src={service?.groupImageTwelve} alt='Twelve' />
                                    )}
                                </div>
                            )}
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textEight}
                            </ReactMarkdown>
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textNine}
                            </ReactMarkdown>
                            {service?.extraBrochure ? (
                                <div className={classes.extraBrochure}>
                                    <ReactMarkdown className={`${classes.desc} ${classes.extraBrochureHeading} mb-0`} rehypePlugins={[rehypeRaw]}>
                                        {service?.textTen}
                                    </ReactMarkdown>
                                    <div className={`${classes.sidebar_brochure__widget} mb-30`}>
                                        <ul className={`${classes.sidebar_brochure__list}`}>
                                            <li className={classes.list_items}>
                                                <a className={`${classes.brochureName}`}
                                                    href={service?.extraBrochurePath}
                                                    download
                                                >
                                                    {service?.extraBrochure}
                                                </a>
                                                {service?.extraBrochure && <img className={classes.downloadImage} src={downloadImage} alt="Download Button" />}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <ReactMarkdown className={`${classes.desc} ${classes.extraBrochureHeading} mb-0`} rehypePlugins={[rehypeRaw]}>
                                    {service?.textTen}
                                </ReactMarkdown>
                            )}
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textEleven}
                            </ReactMarkdown>
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textTwelve}
                            </ReactMarkdown>
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textThirteen}
                            </ReactMarkdown>
                            {service?.groupImageTwentyThree && (
                                <div className={classes.groupImages}>
                                    {service?.groupImageTwentyThree && (
                                        <img className={classes.groupImage} src={service?.groupImageTwentyThree} alt='TwentyOne' />
                                    )}
                                    {service?.groupImageTwentyFour && (
                                        <img className={classes.groupImage} src={service?.groupImageTwentyFour} alt='TwentyTwo' />
                                    )}
                                </div>
                            )}
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textFourteen}
                            </ReactMarkdown>
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textFifteen}
                            </ReactMarkdown>
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textSixteen}
                            </ReactMarkdown>
                            {service?.groupImageTwentyOne && (
                                <div className={classes.groupImages}>
                                    {service?.groupImageTwentyOne && (
                                        <img className={classes.groupImage} src={service?.groupImageTwentyOne} alt='TwentyOne' />
                                    )}
                                    {service?.groupImageTwentyTwo && (
                                        <img className={classes.groupImage} src={service?.groupImageTwentyTwo} alt='TwentyTwo' />
                                    )}
                                </div>
                            )}
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textSeventeen}
                            </ReactMarkdown>
            
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textEighteen}
                            </ReactMarkdown>
                            {service?.groupImageFifteen && (
                                <div className={` ${classes.exStockGroupImages}`}>
                                    {service?.groupImageFifteen && (
                                        <img className={`${classes.exStockGroupImage}`} src={service?.groupImageFifteen} alt='Fifteen' />
                                    )}
                                    {service?.groupImageSixteen && (
                                        <img className={`${classes.exStockGroupImage}`} src={service?.groupImageSixteen} alt='Sixteen' />
                                    )}
                                </div>
                            )}
                            <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                                {service?.textNineteen}
                            </ReactMarkdown>
                        </div>
                    </Col>
                    {/* <Col lg={{ span: 8 }}>
                        <div className={`${classes.group_image} pb-20`}>
                            <div className={`${classes.single_image} pe-20`}>
                                <img
                                    src={service?.groupImageOne}
                                    alt={service?.groupImageAlt}
                                />
                            </div>
                            <div className={classes.single_image}>
                                <img
                                    src={service?.groupImageTwo}
                                    alt={service?.groupImageAlt}
                                />
                            </div>
                        </div>
                        <div className={`${classes.group_image}`}>
                            <div className={`${classes.single_image} pe-20`}>
                                <img
                                    src={service?.groupImageThree}
                                    alt={service?.groupImageAlt}
                                />
                            </div>
                            <div className={classes.single_image}>
                                <img
                                    src={service?.groupImageFour}
                                    alt={service?.groupImageAlt}
                                />
                            </div>
                        </div>
                    </Col> */}
                    <Col xs={{ span: 12 }}>
                        <ReactMarkdown className={`${classes.desc} mb-0`} rehypePlugins={[rehypeRaw]}>
                            {service?.additionText}
                        </ReactMarkdown>
                    </Col>
                    {service?.groupImageFive && (
                        <div className={classes.groupImages}>
                            {service?.groupImageFive && (
                                <img className={classes.groupImage} src={service?.groupImageFive} alt='Five' />
                            )}
                            {service?.groupImageSix && (
                                <img className={classes.groupImage} src={service?.groupImageSix} alt='Six' />
                            )}
                            {service?.groupImageSeven && (
                                <img className={classes.groupImage} src={service?.groupImageSeven} alt='Seven' />
                            )}
                            {service?.groupImageEight && (
                                <img className={classes.groupImage} src={service?.groupImageEight} alt='Eight' />
                            )}
                        </div>
                    )}
                </Row>
            </div>
            {/* <service services={services} /> */}
            <OurServices ourServices={ourServices} />
        </Col>
    );
}

ServiceContent.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    ourServices: PropTypes.instanceOf(Object).isRequired,
    sidebarList: PropTypes.instanceOf(Object).isRequired,
    servicesSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceContent;
