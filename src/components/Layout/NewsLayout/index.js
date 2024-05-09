//
import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import { reverse, sortBy } from 'lodash';
//
import Header from '../components/Header';
import NavbarHeader from '../components/Navbar';
import styles from './NewsLayout.module.scss';
import BreadCrumb from '~/components/BreadCrumb';
import { publicRoutes } from '~/routes';
import { Link } from 'react-router-dom';
import listNews from '~/config/listNews';

const cx = classNames.bind(styles);
function NewsLayout({ children }) {
    let listDirectory = publicRoutes.slice(0, 7);
    let news = reverse(
        sortBy(listNews, (item) => {
            return item.Views;
        }),
    );
    return (
        <Fragment>
            <Header />
            <NavbarHeader />
            <BreadCrumb title="Tất cả sản phẩm" />
            <div className={cx('container')}>
                <div className={cx('row')}>
                    {/* Left content */}
                    <div className={cx('col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 order-last')}>
                        {/* collection-category */}
                        <div className={cx('aside-item', 'collection-category')}>
                            <h2 className={cx('title-block')}>
                                <span> Danh mục tin tức</span>
                            </h2>
                            <div className={cx('aside-content')}>
                                <nav className={cx('nav-category')}>
                                    {/* lv1 */}
                                    <ul className={cx('nav', 'navbar-pills')}>
                                        {listDirectory.map((item, index) => {
                                            return (
                                                <li key={index} className={cx('nav-item')}>
                                                    <Link to={item.path} className={cx('nav-link')}>
                                                        {item.title}
                                                    </Link>
                                                    {item.iconDesktop ? item.iconDesktop : <Fragment />}
                                                    {/* lv2 */}
                                                    {item.children ? (
                                                        <ul className={cx('dropdown-menu')}>
                                                            {item.children.map((item, index) => {
                                                                return (
                                                                    <li key={index} className={cx('nav-item')}>
                                                                        <Link to={item.path} className={cx('nav-link')}>
                                                                            {item.title}
                                                                        </Link>
                                                                        {item.iconDesktop ? (
                                                                            item.iconDesktop
                                                                        ) : (
                                                                            <Fragment />
                                                                        )}
                                                                        {/* lv3 */}
                                                                        {item.children ? (
                                                                            <ul className={cx('dropdown-menu')}>
                                                                                {item.children.map((item, index) => {
                                                                                    return (
                                                                                        <li
                                                                                            key={index}
                                                                                            className={cx(
                                                                                                'nav-item',
                                                                                                'lv3',
                                                                                            )}
                                                                                        >
                                                                                            <Link
                                                                                                to={item.path}
                                                                                                className={cx(
                                                                                                    'nav-link',
                                                                                                )}
                                                                                            >
                                                                                                {item.title}
                                                                                            </Link>
                                                                                        </li>
                                                                                    );
                                                                                })}
                                                                            </ul>
                                                                        ) : (
                                                                            <Fragment />
                                                                        )}
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    ) : (
                                                        <Fragment />
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* blog-aside-article */}
                        <div className={cx('blog-aside', 'aside-item', 'blog-aside-article')}>
                            <h2 className={cx('title-block')}>
                                <span> Bài viết xem nhiều </span>
                            </h2>
                            <div className={cx('aside-content')}>
                                <div className={cx('blog-list')}>
                                    {news.slice(0, 5).map((item, index) => {
                                        return (
                                            <div key={index} className={cx('loop-blog')}>
                                                <div className={cx('thumb-left')}>
                                                    <Link to="#" title="#">
                                                        <img
                                                            className={cx('loaded')}
                                                            src={item.Picture}
                                                            alt={item.Title}
                                                        />
                                                    </Link>
                                                </div>
                                                <div className={cx('name-right')}>
                                                    <h3>
                                                        <Link to="#" title={item.Title}>
                                                            {item.Title}
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* product-viewed */}
                        <div className={cx('product-viewed')}>
                            <h2 className={cx('title-block')}>
                                <span> Bạn đã xem </span>
                            </h2>
                            <div className={cx('list-product-view', 'swiper-container')}></div>
                        </div>
                    </div>
                    {/* Right content*/}
                    {children}
                </div>
            </div>
        </Fragment>
    );
}

export default NewsLayout;
