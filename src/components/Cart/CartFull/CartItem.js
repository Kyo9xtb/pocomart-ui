import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { actions, useStore } from '~/store';
import style from '../Cart.module.scss';

const cx = classNames.bind(style);

function CartItem({ data }) {
    const { id, image_url, product_name, price, market_price, quantity, sale } = data;
    const [amount, setAmount] = useState(quantity);
    const [state, dispatch] = useStore();
    // eslint-disable-next-line no-unused-vars
    const { products } = state;
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
    return (
        <div className={cx('cart-item')}>
            <div className={cx('wapper-item')}>
                <Link to="#" className={cx('cart-image')} title={product_name}>
                    <img src={image_url} alt={product_name} />
                </Link>
                <div className={cx('cart-info')}>
                    <div className={cx('cart-name')}>
                        <Link to="#" title={product_name}>
                            {product_name}
                        </Link>
                    </div>
                    <div className={cx('gird')}>
                        <div className={cx('cart-quantity')}>
                            <label className={cx('title-quantity')}>Số lượng:</label>
                            <div className={cx('cart-input-btn')}>
                                <button className={cx('items-count', 'btn-reduce')} onClick={handleReduce}>
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={(e) => {
                                        setAmount(Number(e.target.value));
                                    }}
                                />
                                <button className={cx('items-count', 'btn-increase')} onClick={handleIncrease}>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className={cx('cart-price')}>
                            <span className={cx('price')}>
                                {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                    sale ? price : market_price,
                                )}
                            </span>
                            <button className={cx('remove-cart')} onClick={handleRemoveProduct}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartItem;
