//Library import
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { sortedUniq } from 'lodash';
//File import
import styles from './SideBar.module.scss';
import { Fragment, useState } from 'react';
import listProducts from '~/config/listProduct';

const cx = classNames.bind(styles);
function SideBar({ data, className }) {
    const classes = cx('wapper-sidebar', {
        [className]: className,
    });
    let listBrand = [];
    let listType = [];
    // let listFilter = [];

    listProducts.forEach((item) => {
        listBrand.push(item.trademark);
        listType.push(item.type);
    });
    listBrand = sortedUniq(listBrand);
    listType = sortedUniq(listType);

    const [listFilter, setFilter] = useState([]);
    const handleIsCheck = (item) => {
        return listFilter.includes(item);
    };
    const handleCheck = (item) => {
        setFilter((pre) => {
            if (handleIsCheck(item)) {
                return pre.filter((itemw) => itemw !== item);
            } else {
                return [...pre, item];
            }
        });
    };
    const handleClearFilter = () => {
        setFilter([]);
    }
    return (
        <div className={classes}>
            {data.children ? (
                <div className={cx('wapper-bg-sidebar')}>
                    <div className={cx('category-collection')}>
                        <h4>Danh mục sản phẩm</h4>
                        <ul>
                            {data.children.map((item, index) => {
                                return (
                                    <li key={index} className={cx('thumb-s')}>
                                        <Link
                                            to={item.path}
                                            title={item.title}
                                            style={{
                                                backgroundImage: `url(${item.thumbIcon})`,
                                            }}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            ) : (
                <Fragment />
            )}
            <div className={cx('aside-filter', 'filter-content')}>
                <div className={cx('module-filter')}>
                    <h2 className={cx('title-filter-top')}>
                        Lọc thông minh
                        <span>Tìm sản phẩm mong muốn nhanh hơn</span>
                    </h2>
                </div>
                <div className={cx('filter-container')}>
                    {/*select-filter*/}
                    {listFilter ? (
                        <div className={cx('select-filter')}>
                            <div className={cx('select-filter-header')}>
                                <span>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    Bạn chọn
                                </span>
                                <Link title="Bỏ hết" className={cx('clear-all')} onClick={handleClearFilter}>
                                    Bỏ hết
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                            </div>
                            <div className={cx('select-filter-list')}>
                                <ul>
                                    {listFilter.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <button
                                                    onClick={() => {
                                                        handleCheck(item);
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faXmark} />
                                                    {item}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Fragment />
                    )}
                    {/*filter-brand*/}
                    {listBrand ? (
                        <div className={cx('aside-item', 'filter-brand')}>
                            <div className={cx('aside-title')}>
                                <h2 className={cx('title-filter')}>
                                    <span>Thương hiệu</span>
                                </h2>
                            </div>
                            <div className={cx('aside-content', 'filter-group')}>
                                <ul>
                                    {listBrand.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={cx(
                                                    'filter-item',
                                                    'filter-item--check-box',
                                                    'filter-item--green',
                                                )}
                                            >
                                                <span>
                                                    <label htmlFor={`filter-${item}`}>
                                                        <input
                                                            type="checkbox"
                                                            id={`filter-${item}`}
                                                            checked={handleIsCheck(item)}
                                                            onChange={() => {
                                                                handleCheck(item);
                                                            }}
                                                        />
                                                        <i className={cx('fa')}></i>
                                                        {item}
                                                    </label>
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Fragment />
                    )}
                    {/*filter-price*/}
                    <div className={cx('aside-item', 'filter-price')}>
                        <div className={cx('aside-title')}>
                            <h2 className={cx('title-filter')}>
                                <span>Khoảng giá</span>
                            </h2>
                        </div>
                        <div className={cx('aside-content', 'filter-group')}>
                            <ul>
                                <li className={cx('filter-item', 'filter-item--check-box', 'filter-item--green')}>
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
                    {listType ? (
                        <div className={cx('aside-item', 'filter-type')}>
                            <div className={cx('aside-title')}>
                                <h2 className={cx('title-filter')}>
                                    <span>Loại</span>
                                </h2>
                            </div>
                            <div className={cx('aside-content', 'filter-group')}>
                                <ul>
                                    {listType.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={cx(
                                                    'filter-item',
                                                    'filter-item--check-box',
                                                    'filter-item--green',
                                                )}
                                            >
                                                <span>
                                                    <label htmlFor={`filter-${item}`}>
                                                        <input
                                                            type="checkbox"
                                                            id={`filter-${item}`}
                                                            checked={handleIsCheck(item)}
                                                            onChange={() => {
                                                                handleCheck(item);
                                                            }}
                                                        />
                                                        <i className={cx('fa')}></i>
                                                        {item}
                                                    </label>
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Fragment />
                    )}
                </div>
            </div>
        </div>
    );
}

export default SideBar;
