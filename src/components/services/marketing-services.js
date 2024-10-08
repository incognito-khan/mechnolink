import Link from 'next/link';
import classes from './marketing-services.module.scss';

function ShowMarketingServices() {
    return (
        <div className={`${classes.area} ${classes.container}`}>
            <div className={classes.section}>
                <div className={`${classes.services} ${classes.gap}`}>

                    <div
                        className={classes.service_item}
                    >
                        <Link href="/services/ex-stock-sales">
                        <img
                            className="img-full"
                            src='/images/services/ex-stock-sales/ex-stock-sales-md.jpg'
                            alt='Ex-Stock Sales'
                        />
                        </Link>
                        <div className={classes.add__action}>
                            <h2 className="title mb-0">
                                <Link href='/services/ex-stock-sales'>Ex-Stock Sales</Link>
                            </h2>
                        </div>
                    </div>
                    <div
                        className={classes.service_item}
                    >
                        <Link href='/services/indent-sales'>
                            <img
                                className="img-full"
                                src='/images/services/indent-sales/indent-sales-md.jpg'
                                alt='Indent Sales'
                            />
                        </Link>
                        <div className={classes.add__action}>
                            <h2 className="title mb-0">
                                <Link href='/services/indent-sales'>Indent Sales</Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ShowMarketingServices;