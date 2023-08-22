import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import style from '../Cart.module.scss';
import Button from '~/components/Button';
//data test
// import listCourses from '~/listCourses';

const cx = classNames.bind(style);
function CartItem({ data }) {
    const { image_url, title, price } = data;
    return (
        <div className={cx('cart-item')}>
            <div className={cx('wapper-item')}>
                <Link to="#" className={cx('cart-image')} title={title}>
                    <img src={image_url} alt={title} />
                </Link>
                <div className={cx('cart-info')}>
                    <div className={cx('cart-name')}>
                        <Link to="#" title={title}>
                            {title}
                        </Link>
                    </div>
                    <div className={cx('gird')}>
                        <div className={cx('cart-quantity')}>
                            <label className={cx('title-quantity')}>Số lượng:</label>
                            <div className={cx('cart-input-btn')}>
                                <button className={cx('items-count', 'btn-reduce')}>-</button>
                                <input type="text" value="2" onChange={() => {}} />
                                <button className={cx('items-count', 'btn-increase')}>+</button>
                            </div>
                        </div>
                        <div className={cx('cart-price')}>
                            <span className={cx('price')}>
                                {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
                            </span>
                            <button className={cx('remove-cart')}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function CartFull({ data }) {
    return (
        <div className={cx('cart')}>
            {/*cart-boody */}
            <div className={cx('cart-body')}>
                {data.map((cours, index) => {
                    return <CartItem data={cours} key={index} />;
                })}
            </div>
            {/*cart-footer */}
            <div className={cx('cart-footer')}>
                {/*total-price */}
                <div className={cx('cart-sub-total')}>
                    <div className={cx('sub-total')}>
                        <div className={cx('title')}>Tổng tiền:</div>
                        <div className={cx('pỉce-total')}>
                            <span className={cx('price')}>
                                {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(1000000000)}
                            </span>
                        </div>
                    </div>
                </div>
                {/*btn-payments */}
                <div className={cx('btn-payments')}>
                    <Button>Thanh toán</Button>
                </div>
            </div>
        </div>
    );
}

export default CartFull;
