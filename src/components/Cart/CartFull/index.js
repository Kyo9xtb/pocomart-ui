import classNames from 'classnames/bind';

import style from '../Cart.module.scss';
import CartItem from './CartItem';
import Button from '~/components/Button';
import { useStore } from '~/store';

const cx = classNames.bind(style);

function CartFull({ data }) {
    const [state] = useStore();
    const { Carts } = state;
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
                        <div className={cx('price-total')}>
                            <span className={cx('price')}>
                                {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                    Carts.reduce((total, product)=> total + product.total,0)
                                )}
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
