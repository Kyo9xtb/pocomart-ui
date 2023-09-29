//Library import
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//File import
import images from '~/assets/images';
import styles from './Navbar.module.scss';
//data test
import { publicRoutes as listNavbars } from '~/routes';
const cx = classNames.bind(styles);
function MenuItem({ data, className, children }) {
    const classes = {};
    if (!!className) {
        classes.className = cx({ [className]: className });
    }
    return (
        <li {...classes}>
            <Link
                to={data.path}
                title={data.title}
                className={!!data.children ? cx('a-img', 'caret-down') : cx('a-img')}
            >
                {data.title}
            </Link>
            {data.iconDesktop}
            {children}
        </li>
    );
}
function MenuItemMega({ data, className, children }) {
    const classes = {};
    if (!!className) {
        classes.className = cx({ [className]: className });
    }
    return (
        <li {...classes}>
            <Link
                to={data.path}
                title={data.title}
                style={{
                    backgroundImage: `url('${data.thumbIcon}')`,
                }}
            >
                {data.title}
                {data.iconMenuMega}
            </Link>
            {data.iconMenuMega}
            {children}
        </li>
    );
}
function NavbarHeader() {
    return (
        <div className={cx('header-nav-main')}>
            <div className={cx('container ', 'container')}>
                <div className={cx('header-menu')}>
                    <div className={cx('wapper-nav', 'd-flex')}>
                        {/** Menu-mega */}
                        <div className={cx('menu-mega')}>
                            <div className={cx('title-menu')}>
                                <span className={cx('title')}>Danh mục sản phẩm</span>
                            </div>
                            <div className={cx('list_menu_header', 'col-lg-3 col-md-3')}>
                                {/**lv1 */}
                                <ul className={cx('ul-menu')}>
                                    {listNavbars[2].children.map((nav, index) => {
                                        return (
                                            <MenuItemMega key={index} data={nav} className={cx('nav-item', '')}>
                                                {/**lv2 */}
                                                {!!nav.children ? (
                                                    <ul className={cx('ul-content-right-1', 'row')}>
                                                        {nav.children.map((item, index) => {
                                                            return (
                                                                <li
                                                                    key={index}
                                                                    className={cx('nav-item', 'lv2 col-lg-3 col-md-12')}
                                                                >
                                                                    <h4>
                                                                        <Link to={item.path} title={item.title}>
                                                                            {item.title}
                                                                        </Link>
                                                                    </h4>
                                                                    {!!item.children ? (
                                                                        <ul className={cx('ul-content-right-2')}>
                                                                            {item.children.map((item, index) => {
                                                                                return (
                                                                                    <MenuItem
                                                                                        key={index}
                                                                                        data={item}
                                                                                        className={cx('nav-item')}
                                                                                    />
                                                                                );
                                                                            })}
                                                                        </ul>
                                                                    ) : (
                                                                        ''
                                                                    )}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                ) : (
                                                    ''
                                                )}
                                            </MenuItemMega>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        {/** Header-nav*/}
                        <div className={cx('wapper-header-nav')}>
                            <nav className={cx('header-nav')}>
                                {/**lv1 */}
                                <ul className={cx('item-big')}>
                                    {listNavbars.slice(0,7).map((nav, index) => {
                                        return (
                                            <MenuItem key={index} data={nav} className={cx('nav-item')}>
                                                {/**lv2 */}
                                                {!!nav.children ? (
                                                    <ul className={cx('item-small')}>
                                                        {/**lv3 */}
                                                        {nav.children.map((data, index) => {
                                                            return (
                                                                <MenuItem key={index} data={data}>
                                                                    {!!data.children ? (
                                                                        <ul>
                                                                            {data.children.map((data, index) => {
                                                                                return (
                                                                                    <MenuItem key={index} data={data} />
                                                                                );
                                                                            })}
                                                                        </ul>
                                                                    ) : (
                                                                        ''
                                                                    )}
                                                                </MenuItem>
                                                            );
                                                        })}
                                                    </ul>
                                                ) : (
                                                    ''
                                                )}
                                            </MenuItem>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className={cx('contact-bar')}>
                        <div className={cx('incontact')}>
                            <div className={cx('contact-phone')}>
                                <div className={cx('icon')}>
                                    <img src={images.phone} alt="Icon phone" />
                                </div>
                                <div className={cx('title')}>
                                    <p>Tư vẫn hỗ trợ</p>
                                    <Link href="#">19006750</Link>
                                </div>
                            </div>
                            <div className={cx('contact-phone', 'account-header')}>
                                <div className={cx('icon')}>
                                    <img src={images.user} alt="Icon user" />
                                </div>
                                <div className={cx('title')}>
                                    <p>Xin chào!</p>
                                    <Link to="/login">Đăng nhập</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarHeader;
