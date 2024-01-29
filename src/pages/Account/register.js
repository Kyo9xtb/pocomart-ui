//Library import
import { Fragment } from 'react';
import classNames from 'classnames/bind';

//
import styles from './Account.module.scss';
import BreadCrumb from '~/components/BreadCrumb';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Register() {
    document.title = 'Đăng ký tài khoản';
    return (
        <Fragment>
            <BreadCrumb title="Đăng ký tài khoản" />
            <div className={cx('page-content-account')}>
                <div className={'container'}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-10 offset-lg-1 col-xl-8 offset-xl-2')}>
                            <div className={cx('d-group')}>
                                {/* left-col */}
                                <div className={cx('left-col')}>
                                    <div className={cx('group-login')}>
                                        <h1>Đăng ký tài khoản</h1>
                                        <form method="post" action="/account/login">
                                            <p className={cx('error')}></p>
                                            <div className={cx('form-group')}>
                                                <label>
                                                    Họ và tên
                                                    <span> *</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className={cx('form-control')}
                                                    name="FullName"
                                                    placeholder="Họ và tên"
                                                    required
                                                />
                                            </div>
                                            <div className={cx('form-group')}>
                                                <label>
                                                    Số điện thoại
                                                    <span> *</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className={cx('form-control')}
                                                    name="Phone"
                                                    placeholder="Số điện thoại"
                                                    required
                                                />
                                            </div>
                                            <div className={cx('form-group')}>
                                                <label>
                                                    Email
                                                    <span> *</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    className={cx('form-control')}
                                                    name="email"
                                                    placeholder="Email"
                                                    required
                                                />
                                            </div>
                                            <div className={cx('form-group')}>
                                                <label>
                                                    Mật khẩu
                                                    <span> *</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    className={cx('form-control')}
                                                    name="password"
                                                    placeholder="Mật khẩu"
                                                    required
                                                />
                                            </div>
                                            <button className={cx('btn-login')} type="submit" value="Đăng ký">
                                                Đăng ký
                                            </button>
                                        </form>
                                        <div className={cx('social-login')}>
                                            <p className={cx('a-center')}>
                                                <span>Hoặc đăng nhập bằng</span>
                                            </p>
                                            <Link to="#" className={cx('social-login--facebook')}>
                                                <img
                                                    src={images.btnFacebook}
                                                    alt="login-facebook-btn"
                                                    width="129px"
                                                    height="37px"
                                                />
                                            </Link>
                                            <Link to="#" className={cx('social-login--google')}>
                                                <img
                                                    src={images.btnGoogle}
                                                    alt="login-facebook-btn"
                                                    width="129px"
                                                    height="37px"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* right-col */}
                                <div className={cx('right-col')}>
                                    <h4>Quyền lợi thành viên</h4>
                                    <div>
                                        <p>Vận chuyển siêu tốc</p>
                                        <p>Sản phẩm đa dạng </p>
                                        <p>Đổi trả dễ dàng</p>
                                        <p>Tích điểm đổi quà</p>
                                        <p>Được giảm giá cho lần mua tiếp theo lên đến 10% </p>
                                    </div>
                                    <Link to="/account/login" className={cx('btn-register-default')}>
                                        Đăng nhập
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Register;
