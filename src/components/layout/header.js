import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaSearch, FaBars } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import ServiceItem from '../services/service-item';
import classes from './header.module.scss';
import { OffcanvasData } from './offcanvas-data';

function Header() {
    const router = useRouter();

    // Header Sticky Activation
    const header = useRef();
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? header.current?.classList.add('is-sticky')
            : header.current?.classList.remove('is-sticky');
    };
    // End here

    // Header Search Toggle Activation
    const [search, setSearch] = useState(false);

    const SearchToggle = () => {
        search ? setSearch(false) : setSearch(true);
    };
    // End here

    // Offcanvas Activation
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);

    useEffect(() => {
        setOffcanvas(false);
    }, [router.pathname]);

    const [submenuOpenId, setSubmenuOpenId] = useState({});

    const showSubmenuClickHandler = (id) =>
        setSubmenuOpenId((prevData) => ({
            [id.toString()]: !prevData[id.toString()],
        }));

    // End here

    return (
        <>
            <header className={classes.area}>
                <div
                    className={classes.top}
                >
                    <Container>
                        <Row>
                            <Col
                                xl={{ span: 4, offset: 2 }}
                                lg={{ span: 5, offset: 3 }}
                                className="d-none d-lg-block"
                            >
                                <div className={classes.info}>
                                    <div className={classes.contact_number}>
                                        <img
                                            src="/images/header/icon/phone.png"
                                            alt="Phone"
                                        />
                                        <Link href="tel://+92 300 8662329">
                                            +92 300 8662329
                                        </Link>
                                    </div>
                                    <div className={classes.time_schedule}>
                                        <img
                                            src="/images/header/icon/clock.png"
                                            alt="Phone"
                                        />
                                        <span>9.00 am - 11.00 pm</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={{ span: 6 }} className="d-block d-lg-none">
                                <div className="header-logo">
                                    <Link href="/" className={classes.logo}>
                                        <img
                                            src="/images/logo/icon-logo.png"
                                            alt="Header Lisght Logo"
                                        />
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={6} lg={4} sm={6}>
                                <div className={classes.right}>
                                    {/* <div>
                                        <Link href="/">
                                            Mechnolink
                                            <span>International</span>
                                        </Link>
                                    </div> */}
                                    {/* <div
                                        className={`${search
                                            ? 'search-show'
                                            : 'search-hide'
                                            } d-block d-lg-none search-holder`}
                                    >
                                        <buton
                                            className={classes.search__btn}
                                            onClick={SearchToggle}
                                        >
                                            <FaSearch />
                                        </buton>
                                        <form className="search-form">
                                            <input
                                                className="search-input"
                                                type="search"
                                                name="search"
                                                placeholder="Search"
                                            />
                                            <button
                                                className="search-inner__btn"
                                                type="submit"
                                            >
                                                <FaSearch />
                                            </button>
                                        </form>
                                    </div> */}
                                    <div className={classes.offcanvas}>
                                        <buton
                                            className={`${classes.offcanvas__btn} d-block d-lg-none menu-bar-button`}
                                            onClick={showOffcanvas}
                                        >
                                            <FaBars />
                                        </buton>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div ref={header} className={`sticky_holder ${classes.main}`}>
                    <Container>
                        <Row>
                            <Col
                                xl={{ span: 10, offset: 2 }}
                                className="d-none d-lg-block"
                            >
                                <nav className={classes.menu}>
                                    <ul className={classes.menu__list}>
                                        <li>
                                            <Link href="/">
                                                <span>Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <span>About Us</span>
                                            </Link>
                                        </li>
                                        <li className={classes.dropdown_holder}>
                                            <Link href="/services">
                                                <span>Services</span>
                                            </Link>
                                            <ul className={classes.dropdown_menu}>
                                                <li className={`${classes.dropdown_holder2} ${classes.dropdown_holder_right}`}>
                                                    <Link href="/services/marketing-services">
                                                        <span>Marketing & Sales</span>
                                                    </Link>
                                                    <ul className={`${classes.dropdown_menu2} ${classes.dropdown_holder_right}`}>
                                                        <li>
                                                            <Link href="/services/ex-stock-sales">
                                                                Ex-stock Sales
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/services/indent-sales">
                                                                Indent Sales
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="/services/engineering-services">
                                                        Engineering Services
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/engineering-consulting">
                                                        Engineering Consulting
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/manufacturing-services">
                                                        Manufacturing Services
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/our-team">
                                                <span>Team</span>
                                            </Link>
                                        </li>
                                        <li className={classes.separator}>
                                            <Link
                                                href="/contact"
                                            >
                                                <span>Contact</span>
                                            </Link>
                                        </li>
                                        <li
                                            className={`${search
                                                ? 'search-show'
                                                : 'search-hide'
                                                }`}
                                        >
                                            <buton
                                                className={classes.search__btn}
                                                onClick={SearchToggle}
                                            >
                                                <FaSearch />
                                            </buton>
                                            <form className="search-form">
                                                <input
                                                    className="search-input"
                                                    type="search"
                                                    name="search"
                                                    placeholder="Search"
                                                />
                                                <button
                                                    className="search-inner__btn"
                                                    type="submit"
                                                >
                                                    <FaSearch />
                                                </button>
                                            </form>
                                        </li>
                                    </ul>
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                    <div className={`${classes.fixed__logo} d-none d-lg-flex`}>
                        <Link href="/" className={classes.header_logo}>
                            <img className={classes.logo}
                                src="/images/logo/icon-logo.png"
                                alt="Header Dark Logo"
                            />
                        </Link>
                    </div>
                </div>
            </header>
            <div className="offcanvas-menu-holder" onClick={showOffcanvas}>
                <div
                    className={
                        offcanvas
                            ? 'offcanvas-menu-wrap active'
                            : 'offcanvas-menu-wrap'
                    }
                >
                    <nav
                        className="offcanvas-menu"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="offcanvas-menu-items">
                            <li className="offcanvas-top">
                                <button
                                    type="button"
                                    className="offcanvas-close-btn"
                                    aria-label="Right Align"
                                >
                                    <IoCloseOutline onClick={showOffcanvas} />
                                </button>
                            </li>
                            {OffcanvasData.map((item) => {
                                const { submenu } = item;
                                return (
                                    <li
                                        key={item.id}
                                        className={`${item.cName}${submenuOpenId[item.id.toString()]
                                            ? ' active'
                                            : ''
                                            }`}
                                        onClick={
                                            submenu
                                                ? () =>
                                                    showSubmenuClickHandler(
                                                        item.id
                                                    )
                                                : () => { }
                                        }
                                    >
                                        <Link
                                            href={item.path}
                                            className={
                                                item?.submenu
                                                    ? 'has-children'
                                                    : ''
                                            }
                                        >
                                            {item.title}
                                        </Link>
                                        {submenu && (
                                            <ul className="submenu">
                                                {submenu?.map((submenuItem) => (
                                                    <li key={submenuItem.id}>
                                                        <Link
                                                            href={
                                                                submenuItem.link
                                                            }
                                                        >
                                                            {submenuItem.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

// Header.propTypes = {
//     services: PropTypes.instanceOf(Object).isRequired,
// };

export default Header;
