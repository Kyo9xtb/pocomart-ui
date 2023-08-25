//Import library
import React from 'react';
// import classNames from 'classnames/bind';
//Import file
// import styles from './DefaultLayout.module.scss';
import Header from '../componnents/Header';
import Footer from '../componnents/Footer';
import NavbarHeader from '../componnents/Navbar';

// const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <React.Fragment>
            <Header />
            <NavbarHeader />
            {children}
            <Footer />
        </React.Fragment>
    );
}

export default DefaultLayout;
