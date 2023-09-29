//Library import
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faChartSimple, faHeart } from '@fortawesome/free-solid-svg-icons';

//File import
import styles from './ItemProduct.module.scss';

const cx = classNames.bind(styles);
function ItemProduct({ data, className }) {
    const classes = cx('item-product-main', {
        [className]: className,
    });
    // const {} = data;
    const sale = 1;
    return (
        <div className={classes}>
            <div className={cx('wapper-item')}>
                <div className={sale ? cx('product-thumbnail', 'sale') : cx('product-thumbnail')} data-sale="Giam 5%">
                    <Link to="#" className={cx('image-thumb')}>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400993"
                            alt=""
                        />
                    </Link>
                    <div className={cx('product-action')}>
                        <div className={cx('group-action')}>
                            <button className={cx('btn-views', 'setWishlist')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <button className={cx('btn-views','setCompare')}>
                                <FontAwesomeIcon icon={faChartSimple} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('product-info')}>
                    <h3 className={cx('product-name')}>
                        <Link to="#">Samsung Galaxy Note 21</Link>
                    </h3>
                    <div className={cx('price-box')}>
                        {sale ? (
                            <Fragment>
                                <span className={cx('price')}>
                                    {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                        20000000,
                                    )}
                                </span>
                                <span className={cx('compare-price')}>
                                    {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                        20000000,
                                    )}
                                </span>
                            </Fragment>
                        ) : (
                            <span className={cx('price')}>
                                {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(20000000)}
                            </span>
                        )}
                        <div className={cx('action-cart')}>
                            <button className={cx('btn-views')}>
                                <FontAwesomeIcon icon={faCartPlus} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;