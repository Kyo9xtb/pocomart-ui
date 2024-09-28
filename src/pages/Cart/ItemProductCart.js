import { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

//File import {  } from "module";
import styles from './Cart.module.scss';
import { actions, useStore } from '~/store';

const cx = classNames.bind(styles);
function ItemProductCart({ data }) {
    const { id, image_url, product_name, market_price, price, quantity, sale } = data;
    const [amount, setAmount] = useState(quantity);
    const [, dispatch] = useStore();
    const handleIncrease = (e) => {
        e.stopPropagation();
        if (amount < 20) {
            setAmount(amount + 1);
            data.quantity = amount + 1;
            dispatch(actions.increaseCartQuantity(data));
        }
    };
    const handleReduce = () => {
        if (amount > 1) {
            setAmount(amount - 1);
            data.quantity = amount - 1;
            dispatch(actions.increaseCartQuantity(data));
        }
    };
    useEffect(() => {
        setAmount(quantity);
    }, [quantity]);
    const handleRemoveProduct = () => {
        dispatch(actions.removeFromCart(id));
    };
    const [checkPrice, setCheckPrice] = useState(false);
    // const [checkPrice,] = useState(false);
    // const getProduct = ListProduct.find((item) => item.id === id);
    // useEffect(() => {
    //     if (getProduct.price !== price) {
    //         setCheckPrice(true);
    //     }
    // }, []);
    return (
        <div className={cx('cart-product')}>
            <Link to="#" title={product_name} className={cx('cart-image')}>
                <img src={image_url} alt={product_name} />
            </Link>
            <div className={cx('cart-info')}>
                <div className={cx('cart-name')}>
                    <Link className={cx('product-name')} to="#" title={product_name}>
                        {product_name}
                    </Link>
                    <button className={cx('remove-item-cart')} title="Xóa" onClick={handleRemoveProduct}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>

                    {checkPrice ? (
                        <span className={cx('item-warn')}>Vui lòng cập nhật lại giá của sản phẩm</span>
                    ) : (
                        <Fragment />
                    )}
                </div>
                {/*price */}
                <div className={cx('grid')}>
                    <div className={cx('cart-prices')}>
                        <span className={cx('cart-price')}>
                            {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                sale ? price : market_price,
                            )}
                        </span>
                    </div>
                </div>
                {/*select */}
                <div className={cx('grid')}>
                    <div className={cx('cart-select')}>
                        <div className={cx('input-group-btn')}>
                            <button type="button" onClick={handleReduce} aria-label="-">
                                -
                            </button>
                            <input
                                type="text"
                                name="updateSelect"
                                value={amount}
                                onChange={(e) => {
                                    setAmount(Number(e.target.value));
                                }}
                            />
                            <button type="button" onClick={handleIncrease} aria-label="+">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                {/* sum */}
                <div className={cx('grid')}>
                    <div className={cx('cart-prices')}>
                        <span className={cx('cart-price')}>
                            {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                sale ? price * amount : market_price * amount,
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ItemProductCart;
