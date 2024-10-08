import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import TeamDetail from '../../components/team/TeamDetail' 
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/layout/footer';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';

function TeamDetailPage({ teamItems, newsletterItems, footerItems, }) {
    const name = teamItems?.teamTitle.replace(/<br>|<br\/>/g, '');
    return (
        <>
            <Head>
                <title>{name}</title>
                <meta
                    name="description"
                    content={teamItems.teamOccupation}
                />
            </Head>
            <Breadcrumb
                subTitle="Mechnolink"
                title={name}
                desc={teamItems.teamOccupation}
            />
            <TeamDetail  teamItems={teamItems}/>
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const teamItems = getItemData(slug, 'team');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            teamItems,
            newsletterItems,
            footerItems
        },
    };
}

export async function getStaticPaths() {
    const teamSlugs = getItemsFiles('team');

    const paths = teamSlugs.map((slug) => ({ params: { slug: slug.replace(/\.md$/, '') } }));

    return {
        paths,
        fallback: false,
    };
}

TeamDetailPage.propTypes = {
    teamItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default TeamDetailPage;