//Import library
import React from 'react';
// import classNames from 'classnames/bind';
//Import file
// import styles from './DefaultLayout.module.scss';
import Header from '../componnents/Header';
import Footer from '../componnents/Footer';
import NavbarHeader from '../componnents/Navbar';
import AlterBox from '~/components/AlterBox';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

// const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <React.Fragment>
            <Header />
            <NavbarHeader />
            {children}
            <Footer />
            {/**Test AlterBox */}
            <AlterBox system warning title={'Cảnh báo người dùng'} >
                Đây là phiên bản thử nghiệm. Vui lòng không điền thông tin thật của bản thân vào hệ thống.
            </AlterBox>
            <AlterBox dark title={'Cảnh báo người dùng'} >
                Đây là phiên bản thử nghiệm. Vui lòng không điền thông tin thật của bản thân vào hệ thống.
            </AlterBox>
        </React.Fragment>
    );
}

export default DefaultLayout;
