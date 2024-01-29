//Library import
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

//File import
import Header from '../componnents/Header';
import NavbarHeader from '../componnents/Navbar';
import Footer from '../componnents/Footer';
import BreadCrumb from '~/components/BreadCrumb';
import styles from './ProductLayout.module.scss';

const cx = classNames.bind(styles);
function ProductLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <NavbarHeader />
            <BreadCrumb title="Tất cả sản phẩm" />
            <div className={cx('container')}>
                <div className={cx('bg-collection')}>
                    <div className={cx('row')}>
                        <div className={cx('wapper-sidebar', 'left-content', 'col-lg-3 col-md-4 col-sm-4')}>
                            <div className={cx('wapper-bg-sidebar')}>
                                <div className={cx('category-collection')}>
                                    <h4>Danh mục sản phẩm</h4>
                                    <ul>
                                        <li className={cx('thumb-s')}>
                                            <Link
                                                to="#"
                                                title="#"
                                                style={{
                                                    backgroundImage: `url('https://bizweb.dktcdn.net/thumb/compact/100/429/689/collections/icon1.png?v=1623548877697')`,
                                                }}
                                            >
                                                Điện thoại - Máy tính bảng
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={cx('aside-filter', 'filter-content')}>
                                <div className={cx('module-filter')}>
                                    <h2 className={cx('title-filter-top')}>
                                        Lọc thông minh
                                        <span>Tìm sản phẩm mong muốn nhanh hơn</span>
                                    </h2>
                                </div>
                                <div className={cx('filter-container')}>
                                    {/*select-filter*/}
                                    <div className={cx('select-filter')}>
                                        <div className={cx('select-filter-header')}>
                                            <span>
                                                <FontAwesomeIcon icon={faArrowLeft} />
                                                Bạn chọn
                                            </span>
                                            <Link title="Bỏ hết" className={cx('clear-all')}>
                                                Bỏ hết
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </Link>
                                        </div>
                                        <div className={cx('select-filter-list')}>
                                            <ul>
                                                <li>
                                                    <button>
                                                        <FontAwesomeIcon icon={faXmark} />
                                                        Apple
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*filter-brand*/}
                                    <div className={cx('aside-item', 'filter-brand')}>
                                        <div className={cx('aside-title')}>
                                            <h2 className={cx('title-filter')}>
                                                <span>Thương hiệu</span>
                                            </h2>
                                        </div>
                                        <div className={cx('aside-content', 'filter-group')}>
                                            <ul>
                                                <li
                                                    className={cx(
                                                        'filter-item',
                                                        'filter-item--check-box',
                                                        'filter-item--green',
                                                    )}
                                                >
                                                    <span>
                                                        <label htmlFor={`filter-apple`}>
                                                            <input type="checkbox" id={`filter-apple`} />
                                                            <i className={cx('fa')}></i>
                                                            Apple
                                                        </label>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*filter-price*/}
                                    <div className={cx('aside-item', 'filter-price')}>
                                        <div className={cx('aside-title')}>
                                            <h2 className={cx('title-filter')}>
                                                <span>Khoảng giá</span>
                                            </h2>
                                        </div>
                                        <div className={cx('aside-content', 'filter-group')}>
                                            <ul>
                                                <li
                                                    className={cx(
                                                        'filter-item',
                                                        'filter-item--check-box',
                                                        'filter-item--green',
                                                    )}
                                                >
                                                    <span>
                                                        <label htmlFor={`filter-apple2`}>
                                                            <input type="checkbox" id={`filter-apple2`} />
                                                            <i className={cx('fa')}></i>
                                                            Apple
                                                        </label>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*filter-type*/}
                                    <div className={cx('aside-item', 'filter-type')}>
                                        <div className={cx('aside-title')}>
                                            <h2 className={cx('title-filter')}>
                                                <span>Loại</span>
                                            </h2>
                                        </div>
                                        <div className={cx('aside-content', 'filter-group')}>
                                            <ul>
                                                <li
                                                    className={cx(
                                                        'filter-item',
                                                        'filter-item--check-box',
                                                        'filter-item--green',
                                                    )}
                                                >
                                                    <span>
                                                        <label htmlFor={`filter-apple3`}>
                                                            <input type="checkbox" id={`filter-apple3`} />
                                                            <i className={cx('fa')}></i>
                                                            Apple
                                                        </label>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*select-filter*/}
                                </div>
                            </div>
                        </div>
                        <div className={cx('main_container collection col-lg-9 col-md-12 col-sm-12')}>
                            <div className={cx('block-des')}>
                                <div className={cx('img-block')}>
                                    <img
                                        src="https://bizweb.dktcdn.net/thumb/compact/100/429/689/themes/869367/assets/default-logo.png?1681350496696"
                                        alt="#"
                                        width={`80px`}
                                        height={`80px`}
                                    />
                                </div>
                                <div className={cx('des')}>
                                    <h1>Điện thoại - Máy tính bảng</h1>
                                    <div className={cx('scrolldes')}>
                                        <p>
                                            Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng.
                                            Giao nhanh, đem nhiều mẫu chọn, cà thẻ tại nhà. Trả góp 0%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default ProductLayout;
