//Import library
import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
//Import file
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavbarHeader from '../components/Navbar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <NavbarHeader />
            {children}
            <Footer />
        </Fragment>
    );
}

export default DefaultLayout;
