//Library import
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faChartSimple, faHeart } from '@fortawesome/free-solid-svg-icons';

//File import
import styles from './ItemProduct.module.scss';
import { actions, useStore } from '~/store';
// import AlterBox from '../AlterBox';
// import { initState } from '~/store/reducer';

const cx = classNames.bind(styles);

function ItemProduct({ data, className }) {
    const [state, dispatch] = useStore();
    const { Compares, Favourites } = state;
    const { id, product_name, price, sale, image_url } = data;
    const classes = cx('item-product-main', {
        [className]: className,
    });
    const isChecksProductCompares = Compares.some((product) => {
        if (product.id === id) {
            return true;
        }
        return false;
    });
    const isChecksProductFavourites = Favourites.some((product) => {
        if (product.id === id) {
            return true;
        }
        return false;
    });
    //Handle
    const handleFavourite = (e) => {
        e.stopPropagation();
        const isClassActive = e.target.classList.contains(`${cx('active')}`);
        if (isClassActive) {
            e.target.classList.remove(`${cx('active')}`);
            dispatch(actions.removeToFavourite(data));
        } else {
            e.target.classList.add(`${cx('active')}`);
            dispatch(actions.addToFavourite(data));
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
        data.quantily = 1;
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
                                    isChecksProductFavourites
                                        ? cx('btn-views', 'setWishlist', 'active')
                                        : cx('btn-views', 'setWishlist')
                                }
                                onClick={handleFavourite}
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
                                <span className={cx('price')}>
                                    {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                        price * (1 - sale / 100),
                                    )}
                                </span>
                                <span className={cx('compare-price')}>
                                    {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
                                </span>
                            </Fragment>
                        ) : (
                            <span className={cx('price')}>
                                {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
                            </span>
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
