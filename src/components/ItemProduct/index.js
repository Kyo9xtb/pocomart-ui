//Library import
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faChartSimple, faHeart } from '@fortawesome/free-solid-svg-icons';

//File import
import styles from './ItemProduct.module.scss';
import { actions, useStore } from '~/store';

const cx = classNames.bind(styles);

function FormatPrice(price) {
    return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}
function ItemProduct({ data, className }) {
    const [state, dispatch] = useStore();
    const { Favorites, Compares } = state;
    const { id, product_name, market_price, price, sale, image_url } = data;
    // const classes = cx('item-product-main');
    const classes = cx('item-product-main', { [className]: className });
    const isChecksProductFavorites = Favorites.some((product) => {
        if (product.id === id) {
            return true;
        }
        return false;
    });
    const isChecksProductCompares = Compares.some((product) => {
        if (product.id === id) {
            return true;
        }
        return false;
    });
    //Handle
    const handleFavorite = (e) => {
        e.stopPropagation();
        const isClassActive = e.target.classList.contains(`${cx('active')}`);
        if (isClassActive) {
            e.target.classList.remove(`${cx('active')}`);
            dispatch(actions.removeToFavorite(data));
        } else {
            e.target.classList.add(`${cx('active')}`);
            dispatch(actions.addToFavorite(data));
        }
    };
    const handleCompare = (e) => {
        e.stopPropagation();
        const isClassActive = e.target.classList.contains(`${cx('active')}`);
        if (isClassActive) {
            e.target.classList.remove(`${cx('active')}`);
            dispatch(actions.removeToCompare(data));
        } else {
            e.target.classList.add(`${cx('active')}`);
            dispatch(actions.addToCompare(data));
        }
    };
    const handleAddToCart = () => {
        data.quantity = 1;
        dispatch(actions.addToCart(data));
    };
    return (
        <div className={classes}>
            <div className={cx('wapper-item')}>
                <div
                    className={sale ? cx('product-thumbnail', 'sale') : cx('product-thumbnail')}
                    data-sale={sale ? `Giảm ${sale}%` : ''}
                >
                    <Link to="#" className={cx('image-thumb')}>
                        <img src={image_url} alt={product_name} />
                    </Link>
                    <div className={cx('product-action')}>
                        <div className={cx('group-action')}>
                            <button
                                className={
                                    isChecksProductFavorites
                                        ? cx('btn-views', 'setWishlist', 'active')
                                        : cx('btn-views', 'setWishlist')
                                }
                                onClick={handleFavorite}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <button
                                className={
                                    isChecksProductCompares
                                        ? cx('btn-views', 'setCompare', 'active')
                                        : cx('btn-views', 'setCompare')
                                }
                                onClick={handleCompare}
                            >
                                <FontAwesomeIcon icon={faChartSimple} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('product-info')}>
                    <h3 className={cx('product-name')}>
                        <Link to="#">{product_name}</Link>
                    </h3>
                    <div className={cx('price-box')}>
                        {sale ? (
                            <Fragment>
                                <span className={cx('price')}>{FormatPrice(price)}</span>
                                <span className={cx('compare-price')}>{FormatPrice(market_price)}</span>
                            </Fragment>
                        ) : (
                            <span className={cx('price')}>{FormatPrice(market_price)}</span>
                        )}
                        <div className={cx('action-cart')}>
                            <button className={cx('btn-views')} onClick={handleAddToCart}>
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
