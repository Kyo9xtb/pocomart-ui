//Library import
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//File import
import styles from './Navbar.module.scss';
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
                {data.iconDesktop}
            </Link>
            {data.iconDesktop}
            {children}
        </li>
    );
}
function NavbarHeader() {
    return (
        <div className={cx('header-nav-main')}>
            <div className={cx('container')}>
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
                                            <MenuItemMega key={index} data={nav} className={cx('nav-item')}>
                                                {/**lv2 */}
                                                {!!nav.children ? (
                                                    <ul className={cx('ul-content-right-1', 'row')}>
                                                        {
                                                            nav.children.map((item, index)=>{
                                                                return (
                                                                    <li key={index} className={cx('nav-item','lv2 col-lg-3 col-md-12')}>
                                                                        <h4>
                                                                            <Link to={item.path} title={item.title}>
                                                                                {item.title}
                                                                            </Link>
                                                                        </h4>
                                                                        {
                                                                            !!item.children ? (
                                                                                <ul className={cx('ul-content-right-2')}>
                                                                                {item.children.map((item, index)=> {
                                                                                    return (
                                                                                        <MenuItem key={index} data={item} className={cx('nav-item')}/>
                                                                                    )
                                                                                })}
                                                                                </ul>
                                                                            ):('')
                                                                        }
                                                                    </li>
                                                                )
                                                            })
                                                        }
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
                        <div className={cx('waper-header-nav')}>
                            <nav className={cx('header-nav')}>
                                {/**lv1 */}
                                <ul className={cx('item-big')}>
                                    {listNavbars.map((nav, index) => {
                                        return (
                                            <MenuItem key={index} data={nav} className={cx('nav-item')}>
                                                {/**lv2 */}
                                                {!!nav.children ? (
                                                    <ul className={cx('item-small')}>
                                                        {/**lv3 */}
                                                        {nav.children.map((data, index) => {
                                                            return (
                                                                <MenuItem key={index} data={data} className={cx('')}>
                                                                    {!!data.children ? (
                                                                        <ul>
                                                                            {data.children.map((data, index) => {
                                                                                return (
                                                                                    <MenuItem
                                                                                        key={index}
                                                                                        data={data}
                                                                                        className={cx('')}
                                                                                    />
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
                </div>
            </div>
        </div>
    );
}

export default NavbarHeader;
