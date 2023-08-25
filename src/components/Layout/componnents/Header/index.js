// Import library
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
// Import file
import styles from './Header.module.scss';
import images from '~/assets/images';
import CartEmty from '~/components/Cart/CartEmty';
import CartFull from '~/components/Cart/CartFull';
// Data test
import listCourses from '~/listCourses';
const cx = classNames.bind(styles);

function SearchEmty() {
    return <div className={cx('note')}>Không có kết quả tìm kiếm</div>;
}

function SearchResult({ data }) {
    function ProductItemSearch({ data }) {
        const { image_url, title, price } = data;
        return (
            <div className={cx('wapper-product')}>
                <div className={cx('theme-product')}>
                    <img src={image_url} alt={title} />
                </div>
                <div className={cx('info-product')}>
                    <div className={cx('title-product')}>{title}</div>
                    <div className={cx('title-product', 'price-product')}>
                        {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
                    </div>
                </div>
            </div>
        );
    }
    return data.map((data, index) => {
        return (
            <Link key={index} href="#" title={data.title}>
                <ProductItemSearch data={data} />
            </Link>
        );
    });
}

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    {/*logo */}
                    <div className={cx('col-lg-2 col-xl-3 col-md-3 col-6', 'col-logo')}>
                        <Link to="/" className={cx('logo')} title='Poco mart thiên đường mua sắm'>
                            <img src={images.logo} alt="Poco mart" />
                        </Link>
                    </div>
                    {/*Mobile-btn*/}
                    <div className={cx('d-lg-none d-block col-2 order-3', 'btn-menu-mobile')}>
                        <div className={cx('category-action')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                id="iconcate-action"
                                x="0px"
                                y="0px"
                                viewBox="0 0 384.97 384.97"
                                style={{ enableBackground: 'new 0 0 384.97 384.97' }}
                                xmlSpace="preserve"
                            >
                                {' '}
                                <g>
                                    {' '}
                                    <g id="Menu_1_">
                                        {' '}
                                        <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03    c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"></path>{' '}
                                        <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03    S379.58,180.455,372.939,180.455z"></path>{' '}
                                        <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606    c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"></path>{' '}
                                    </g>{' '}
                                </g>{' '}
                            </svg>
                        </div>
                    </div>
                    {/*Search-box */}
                    <div className={cx('col-lg-8 col-xl-7 col-md-5 col-10 order-3 order-md-2', 'col-search')}>
                        <div className={cx('theme-search-box')}>
                            <div className={cx('search-box')}>
                                <Tippy
                                    interactive
                                    // visible
                                    placement="bottom-start"
                                    render={(attrs) => (
                                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                            {listCourses.length === 0 ? <SearchEmty/>: <SearchResult data={listCourses} />}
                                        </div>
                                    )}
                                >
                                    <form action="/" name="query" className={cx('input-group')}>
                                        <input
                                            type="text"
                                            className={cx('input-search')}
                                            placeholder="Tìm kiếm sản phẩm..."
                                            autoComplete="off"
                                            required
                                        />
                                        <span className={cx('btn-search-box')}>
                                            <svg
                                                style={{ enableBackground: 'new 0 0 612.01 612.01' }}
                                                version="1.1"
                                                viewBox="0 0 612.01 612.01"
                                                xmlSpace="preserve"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="m606.21 578.71-158.01-155.49c41.378-44.956 66.802-104.41 66.802-169.84-0.02-139.95-115.3-253.39-257.51-253.39s-257.49 113.44-257.49 253.39 115.28 253.39 257.49 253.39c61.445 0 117.8-21.253 162.07-56.586l158.62 156.1c7.729 7.614 20.277 7.614 28.006 0 7.747-7.613 7.747-19.971 0.018-27.585zm-348.72-110.91c-120.33 0-217.87-95.993-217.87-214.41s97.543-214.41 217.87-214.41c120.33 0 217.87 95.993 217.87 214.41s-97.542 214.41-217.87 214.41z"></path>
                                            </svg>
                                        </span>
                                    </form>
                                </Tippy>
                            </div>
                        </div>
                        <div className={cx('contact-phone')}>
                            <div className={cx('icon')}>
                                <img src={images.phone} alt="Icon phone" />
                            </div>
                            <div className={cx('title')}>
                                <p>Tư vẫn hỗ trợ</p>
                                <Link href="#">19006750</Link>
                            </div>
                        </div>
                        <div className={cx('contact-phone', 'account-header')}>
                            <div className={cx('icon')}>
                                <img src={images.user} alt="Icon user" />
                            </div>
                            <div className={cx('title')}>
                                <p>Xin chào!</p>
                                <Link to="/login">Đăng nhập</Link>
                            </div>
                        </div>
                    </div>
                    {/*Account */}
                    <div className={cx('col-lg-2 col-md-3 col-6 order-2 order-md-3', 'col-account')}>
                        <ul className={cx('group-account')}>
                            {/*Heart */}
                            <li>
                                <div className={cx('icon')}>
                                    <Link to="/yeu-thich">
                                        <svg
                                            style={{ enableBackground: 'new 0 0 412.735 412.735' }}
                                            version="1.1"
                                            viewBox="0 0 412.74 412.74"
                                            xmlSpace="preserve"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {' '}
                                            <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>{' '}
                                        </svg>
                                        <span>0</span>
                                    </Link>
                                </div>
                            </li>
                            {/*Bag */}
                            <li className={cx('cart-drop')}>
                                <div className={cx('icon')}>
                                    <Link to="/yeu-thich">
                                        <svg
                                            style={{ enableBackground: 'new 0 0 407.453 407.453' }}
                                            version="1.1"
                                            viewBox="0 0 407.45 407.45"
                                            xmlSpace="preserve"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {' '}
                                            <g fill="#010002">
                                                {' '}
                                                <path d="m255.1 116.52c4.487 0 8.129-3.633 8.129-8.129 0-4.495-3.642-8.129-8.129-8.129h-111.61c-4.487 0-8.129 3.633-8.129 8.129 0 4.495 3.642 8.129 8.129 8.129h111.61z"></path>{' '}
                                                <path d="m367.06 100.26h-55.372c-4.487 0-8.129 3.633-8.129 8.129 0 4.495 3.642 8.129 8.129 8.129h47.243v274.68h-310.41v-274.68h44.536c4.487 0 8.129-3.633 8.129-8.129 0-4.495-3.642-8.129-8.129-8.129h-52.664c-4.487 0-8.129 3.633-8.129 8.129v290.94c0 4.495 3.642 8.129 8.129 8.129h326.67c4.487 0 8.129-3.633 8.129-8.129v-290.94c0-4.495-3.634-8.128-8.129-8.128z"></path>{' '}
                                                <path d="m282.59 134.8c4.487 0 8.129-3.633 8.129-8.129v-59.273c-1e-3 -37.156-40.115-67.394-89.618-67.394-49.308 0-89.414 30.238-89.414 67.394v59.274c0 4.495 3.642 8.129 8.129 8.129s8.129-3.633 8.129-8.129v-59.274c0-28.198 32.823-51.137 73.36-51.137 40.334 0 73.157 22.939 73.157 51.137v59.274c-1e-3 4.495 3.633 8.128 8.128 8.128z"></path>{' '}
                                                <path d="m98.892 147.57c0 11.526 9.389 20.907 20.923 20.907s20.923-9.38 20.923-20.907c0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c0 2.561-2.089 4.65-4.666 4.65-2.569 0-4.666-2.089-4.666-4.65 0-4.495-3.642-8.129-8.129-8.129s-8.127 3.634-8.127 8.129z"></path>{' '}
                                                <path d="m282.59 168.47c11.534 0 20.923-9.38 20.923-20.907 0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c0 2.561-2.089 4.65-4.666 4.65s-4.666-2.089-4.666-4.65c0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c2e-3 11.526 9.39 20.907 20.925 20.907z"></path>{' '}
                                            </g>{' '}
                                        </svg>
                                        <span>0</span>
                                    </Link>
                                </div>
                                <div className={cx('top-cart-content')}>
                                    <div className={cx('CartHeaderContainer')}>
                                        {listCourses.length === 0 ? <CartEmty /> : <CartFull data={listCourses} />}
                                    </div>
                                </div>
                            </li>
                            {/*Shuffle */}
                            <li>
                                <div className={cx('icon')}>
                                    <Link to="/yeu-thich">
                                        <svg
                                            width="419pt"
                                            height="419pt"
                                            viewBox="0 -45 419.24 419"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m359.08 102.91c1.4609 1.5391 3.4766 2.4375 5.6016 2.4844 2.125 0.050781 4.1797-0.75 5.7109-2.2227l46.414-44.898c1.5625-1.5117 2.4414-3.5938 2.4336-5.7656-0.003906-2.1758-0.89453-4.2539-2.4688-5.7539l-46.41-44.41c-3.1953-3.0547-8.2578-2.9414-11.312 0.25-1.4648 1.4922-2.2656 3.5156-2.2188 5.6055 0.046875 2.0898 0.9375 4.0742 2.4688 5.5l32.008 30.426h-64.273c-27.59 0.14453-53.539 13.133-70.191 35.137l-54.852 71.617-79.242-103.46c-1.4961-2.0156-3.8359-3.2305-6.3477-3.2891h-108.4c-4.418 0-8 3.582-8 8 0 4.418 3.582 8 8 8h104.45l79.449 104-79.449 104h-104.45c-4.418 0-8 3.582-8 8 0 4.418 3.582 8 8 8h108.4c2.5195-0.078125 4.8594-1.3086 6.3477-3.3359l79.242-103.41 54.812 71.617c16.66 22.012 42.625 35.004 70.23 35.133h64.273l-32.008 30.426c-2.3555 2.2344-3.1016 5.6875-1.8789 8.6992 1.2227 3.0078 4.1602 4.9648 7.4102 4.9258 2.0625-0.007813 4.043-0.8125 5.5312-2.2461l46.41-44.426c1.5742-1.5039 2.4648-3.5859 2.4688-5.7617 0.007813-2.1758-0.87109-4.2617-2.4336-5.7773l-46.414-44.91c-3.1758-3.0742-8.2422-2.9883-11.312 0.18359-3.0703 3.2539-2.9883 8.3633 0.1875 11.516l32.207 31.371h-64.441c-22.617-0.14062-43.875-10.816-57.5-28.875l-57.461-75.023 57.5-75.227c13.613-18.043 34.855-28.719 57.461-28.875h64.441l-32.207 31.371c-3.1758 3.1094-3.2578 8.1992-0.1875 11.414z"></path>
                                        </svg>
                                        <span>0</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
