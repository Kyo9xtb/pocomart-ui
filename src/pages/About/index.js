//Library import
import classNames from 'classnames/bind';
import { Fragment } from 'react';

//File import
import BreadCrumb from '~/components/BreadCrumb';
import styles from './About.module.scss';

const cx = classNames.bind(styles);
function About() {
    document.title = 'Giới thiệu'
    return (
        <Fragment>
            <BreadCrumb title="Giới thiệu"/>
            <div className={cx('page')}>
                <div className={cx('container')}>
                    <div className={cx('wapper-page')}>
                        <div className={cx('row')}>
                            <div className={cx('col-12')}>
                                <div className={cx('title-block-page')}>
                                    <h1 className={cx('title-head')}>Giới thiệu</h1>
                                </div>
                                <div className={cx('content-page')}>
                                    <p>
                                        <b>POCO MART&nbsp;</b>là hệ thống&nbsp;siêu thị&nbsp;thuộc tập đoàn{' '}
                                        <strong>EGO</strong>, Việt Nam.&nbsp;Hệ thống này khai trương ngày tháng 11 năm
                                        2019. Theo thống kê của Vietnam Report, tính đến tháng 11/2020, PocoMart nằm top
                                        2 nhà bán lẻ được người tiêu dùng quan tâm nhất và top 4 trên bảng xếp hạng 10
                                        nhà bán lẻ uy tín năm 2020
                                    </p>
                                    <p>
                                        Tháng 5 năm 2021, POCO Mart có khoảng 40 siêu thị và khoảng hơn 600 cửa hàng
                                        Pocomart&nbsp;trên gần 50 tỉnh thành&nbsp;với tổng diện tích mặt bằng kinh doanh
                                        hơn 300.000 m<sup>2</sup>, số lượng nhân viên khoảng hơn 3.000 người.
                                    </p>
                                    <p>
                                        Các sản phẩm của PocoMart bao gồm thực phẩm tươi sống, thực phẩm sơ chế, quần
                                        áo, mỹ phẩm, đồ gia dụng, văn phòng phẩm, đồ chơi, v.v.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default About;
