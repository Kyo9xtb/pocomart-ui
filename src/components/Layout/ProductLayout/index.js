//Library import
import { Fragment } from 'react';
import classNames from 'classnames/bind';

//File import
import Header from '../components/Header';
import NavbarHeader from '../components/Navbar';
import Footer from '../components/Footer';
import BreadCrumb from '~/components/BreadCrumb';
import styles from './ProductLayout.module.scss';
import SideBar from '~/components/SideBar';
import { publicRoutes } from '~/routes';

const cx = classNames.bind(styles);
function ProductLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <NavbarHeader />
            <BreadCrumb title="Tất cả sản phẩm" />
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <SideBar data={publicRoutes[2]} className={cx('left-content', 'col-lg-3 col-md-4 col-sm-4')} />
                    {children}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default ProductLayout;
