//Import library
import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
//Import file
import styles from './DefaultLayout.module.scss';
import Header from '../componnents/Header';
import Footer from '../componnents/Footer';
import NavbarHeader from '../componnents/Navbar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <React.Fragment>
            <Header />
            <NavbarHeader />
            {children}
            <Footer />
            {showGoToTop ? (
                <button
                    className={cx('btn-go-to-top')}
                    onClick={() => {
                        document.documentElement.scrollTop = 0;
                    }}
                    title="Lên đầu trang"
                >
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                </button>
            ) : (
                <Fragment />
            )}
        </React.Fragment>
    );
}

export default DefaultLayout;
