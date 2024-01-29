//Library import
import { Fragment } from 'react';
import classNames from 'classnames/bind';

//File import {  } from "module";
import BreadCrumb from '~/components/BreadCrumb';
import styles from './Cart.module.scss';
import { CartEmty } from '~/components/Cart';
import ItemProductCart from './ItemProductCart';
import { useStore } from '~/store';

const cx = classNames.bind(styles);

function Cart() {
    document.title = 'Giỏ hàng';
    const [state] = useStore();
    const { Carts } = state;
    return (
        <Fragment>
            <BreadCrumb title="Giỏ hàng" />
            <div className={cx('min-cart-page')}>
                <div className={cx('container')}>
                    <div className={cx('wrap')}>
                        <div className={cx('header-cart')}>
                            <div className={cx('title-block-page')}>
                                <h1 className={cx('title-cart')}>
                                    <span>Giỏ hàng của bạn</span>
                                </h1>
                            </div>
                        </div>
                        <div className={cx('cart-page', 'd-xl-block d-none')}>
                            <div className={cx('cart-page-container')}>
                                {Carts.length !== 0 ? (
                                    <Fragment>
                                        <div className={cx('cart-header-info')}>
                                            <div>Thông tin sản phẩm</div>
                                            <div>Đơn giá</div>
                                            <div>Số lượng</div>
                                            <div>Thành tiền</div>
                                        </div>
                                        <div className={cx('cart-body')}>
                                            {Carts.map((item, index) => {
                                                return (
                                                    <div key={index} className={cx('cart-row')}>
                                                        <ItemProductCart data={item} index={index} />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className={cx('cart-footer')}>
                                            <div className={cx('row')}>
                                                <div
                                                    className={cx(
                                                        'col-lg-4 col-12 offset-md-8 offset-lg-8 offset-xl-8',
                                                    )}
                                                >
                                                    <div className={cx('ajaxcart-subtotal')}>
                                                        <div className={cx('cart-subtotal')}>
                                                            <div className={cx('cart__col-6')}>Tổng tiền:</div>
                                                            <div className={cx('cart__totle')}>
                                                                <span className={cx('total-price')}>
                                                                    {Intl.NumberFormat('vi-VN', {
                                                                        style: 'currency',
                                                                        currency: 'VND',
                                                                    }).format(
                                                                        Carts.reduce(
                                                                            (total, product) => total + product.total,
                                                                            0,
                                                                        ),
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('cart-btn-pay')}>
                                                        <button type="button" className={cx('cart-btn-checkout')}>
                                                            Thanh toán
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                ) : (
                                    <CartEmty />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Cart;
