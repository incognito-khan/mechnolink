import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import TeamOne from '../../components/team/index';
import TeamTwo from '../../components/team/index-2';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';
import CounterTwo from '../../components/counter/index-2';

function OurClients({ teamItems, teamItemsTwo, newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Our Team - Mechnolink</title>
                <meta
                    name="description"
                    content="Meet Our Team: Discover the Passionate and Dedicated Professionals Driving Excellence and Innovation. With Their Expertise, We Ensure Every Project is Handled with Care, Precision, and a Commitment to Delivering Outstanding Results."
                />
            </Head>
            <Breadcrumb
                subTitle="Our Team"
                title="Professional"
                desc="Professionals dedicated to delivering excellence in every task."
            />
            <TeamOne teamItems={teamItems} />
            {/* <TeamTwo teamItemsTwo={teamItemsTwo} /> */}
            <CounterTwo />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const teamItems = getAllItems('team');
    const teamItemsTwo = getAllItems('team-02');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            teamItemsTwo,
            teamItems,
            newsletterItems,
            footerItems,
        },
    };
}

OurClients.propTypes = {
    teamItems: PropTypes.instanceOf(Object).isRequired,
    teamItemsTwo: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default OurClients;
