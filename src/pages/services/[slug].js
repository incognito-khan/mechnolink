import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/layout/footer';
import ServiceDetail from '../../components/services/service-detail';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';

function ServiceDetailsPage({
    service,
    sidebarList,
    richTexts,
    ourServices,
    servicesSidebar,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>{service.title}</title>
                <meta
                    name="description"
                    content={service.detailBreadcrumbDesc}
                />
            </Head>
            <Breadcrumb
                subTitle="Mechnolink"
                title={service.title}
                desc={service.detailBreadcrumbDesc}
            />
            <ServiceDetail
                sidebarList={sidebarList}
                service={service}
                richTexts={richTexts}
                // ourServices={ourServices}
                servicesSidebar={servicesSidebar}
            />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const sidebarList = getAllItems('services');
    const service = getItemData(slug, 'services');
    const servicesSidebar = getAllItems('service-sidebar');
    const richTexts = getAllItems('rich-text');
    const ourServices = getAllItems('our-service');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            service,
            sidebarList,
            servicesSidebar,
            richTexts,
            ourServices,
            newsletterItems,
            footerItems,
        },
    };
}

export function getStaticPaths() {
    const serviceFilenames = getItemsFiles('services');

    const slugs = serviceFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

ServiceDetailsPage.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
    sidebarList: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    ourServices: PropTypes.instanceOf(Object).isRequired,
    servicesSidebar: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceDetailsPage;
