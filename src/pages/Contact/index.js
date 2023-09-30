//Library import
import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Iframe from 'react-iframe';

//File import
import styles from './Contact.module.scss';
import BreadCrumb from '~/components/BreadCrumb';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const listInfoContact = [
    {
        title: 'Địa chỉ',
        suptitle: 'Tòa nhà Ladeco 266 Đội Cấn, Ba Đình, Hà Nội',
        icon: <FontAwesomeIcon icon={faLocationDot} />,
    },
    {
        path: 'mailto:support@sapo.vn',
        title: 'Gửi thắc mắc:',
        suptitle: 'support@sapo.vn',
        icon: <FontAwesomeIcon icon={faQuestion} />,
    },
    {
        path: 'https://pocomart.mysapo.net/tel:19006750',
        title: 'Điện thoại:',
        suptitle: '19006750',
        icon: <FontAwesomeIcon icon={faPhone} />,
    },
];
function Contact() {
    document.title = 'Liên hệ';
    return (
        <Fragment>
            <BreadCrumb title="Liên hệ" />
            <div className={cx('page', 'page-content')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-12')}>
                            <div className={cx('title-block-page')}>
                                <h1 className={cx('title-head')}>Liên hệ</h1>
                            </div>
                            <div className={cx('row')}>
                                <div className={cx('col-12 order-1 order-lg-1')}>
                                    <div className={cx('iFrameMap')}>
                                        <div className={cx('contact-map')}>
                                            <Iframe
                                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904611732553!2d105.81388241542348!3d21.03650239288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY8O0bmcgbmdo4buHIFNBUE8!5e0!3m2!1svi!2s!4v1555900531747!5m2!1svi!2s"
                                                width="600px"
                                                height="450px"
                                            ></Iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('col-12 order-lg-2 order-2')}>
                                    <div className={cx('row')}>
                                        <div className={cx('col-lg-4 col-12')}>
                                            {listInfoContact.map((item, index) => {
                                                return (
                                                    <div className={cx('item-contact')} key={index}>
                                                        <div className={cx('img-icon')}>{item.icon}</div>
                                                        <div className={cx('content')}>
                                                            {item.title}
                                                            {item.path ? (
                                                                <Link to={item.path} title={item.suptitle}>
                                                                    {item.suptitle}
                                                                </Link>
                                                            ) : (
                                                                <p>Tòa nhà Ladeco 266 Đội Cấn, Ba Đình, Hà Nội</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className={cx('col-lg-8 col-12')}>
                                            <form
                                                action="/postconatct"
                                                method="post"
                                                id="form-contact"
                                                className={cx('form-contact')}
                                            >
                                                <div className={cx('row', 'group-contact')}>
                                                    <div className={cx('form-item', 'col-lg-6 col-12')}>
                                                        <label htmlFor='contact[Name]'>
                                                            Họ và tên
                                                            <em>*</em>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id='contact[Name]'
                                                            className={cx('form-control')}
                                                            required
                                                            name="contact[Name]"
                                                        />
                                                    </div>
                                                    <div className={cx('form-item', 'col-lg-6 col-12')}>
                                                        <label htmlFor='contact[Email]'>
                                                            Email
                                                            <em>*</em>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id='contact[Email]'
                                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                            className={cx('form-control')}
                                                            required
                                                            name="contact[Email]"
                                                        />
                                                    </div>
                                                    <div className={cx('form-item', 'col-12')}>
                                                        <label htmlFor='contact[content]'>
                                                            Nôi dung
                                                            <em>*</em>
                                                        </label>
                                                        <textarea className={cx('form-control', 'content-area')} id='contact[content]' name="contact[content]" rows='5' required/>
                                                    </div>
                                                    <div className={cx('col-lg-12 col-md-12 col-sm-12 col-xs-12')}>
                                                        <button type='sunmit' className={cx('button-default')}>Gửi liên hệ</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Contact;
