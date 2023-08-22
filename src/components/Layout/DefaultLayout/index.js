//Import library
import React from 'react';
// import classNames from 'classnames/bind';
//Import file
// import styles from './DefaultLayout.module.scss';
import Header from '../componnents/Header';
import Footer from '../componnents/Footer';




// const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <React.Fragment>
            <Header/>
            {children}
            <Footer/>
        </React.Fragment>
    );
}

export default DefaultLayout;
