import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import TeamOne from '../../components/team/index';
import ShowMarketingServices from '../../components/services/marketing-services';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';

function MarketingService({ teamItems, teamSectionItems, newsletterItems, footerItems }) {
    return (
        <>
        <Head>
                <title>Marketing Services</title>
                <meta
                    name="description"
                    content="Our Marketing Services include a comprehensive suite of solutions tailored to your business needs. We offer strategic marketing planning and advertising campaigns. Our goal is to help your business reach its target audience effectively, increase brand awareness, and drive sales."
                />
            </Head>
            <Breadcrumb
                subTitle="Mechnolink"
                title="Marketing Services"
                desc = "Our Marketing Services include a comprehensive suite of solutions tailored to your business needs. We offer strategic marketing planning and advertising campaigns. Our goal is to help your business reach its target audience effectively, increase brand awareness, and drive sales."
            />
            <ShowMarketingServices />
            <TeamOne teamItems={teamItems} teamSectionItems={teamSectionItems} />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    )
}

export function getStaticProps() {
    const teamItems = getAllItems('team');
    const teamSectionItems = getAllItems('team-section');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            teamItems,
            teamSectionItems,
            newsletterItems,
            footerItems,
        },
    };
};

MarketingService.propTypes = {
    teamItems: PropTypes.instanceOf(Object).isRequired,
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default MarketingService;