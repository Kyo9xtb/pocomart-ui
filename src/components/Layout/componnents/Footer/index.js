//Library import
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

//File import
import { publicRoutes as listPagesw } from '~/routes';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

let listPages = []
const listMenus = [
    {
        title: 'Văn phòng giao dịch',
        children: listPages,
    },
    {
        title: 'Về chúng tôi',
        children: listPages,
    },
    {
        title: 'Chính sách bán hàng',
        children: listPages,
    },
    {
        title: 'Theo dõi chúng tôi',
        children: listPages,
    },
];
const listSocials = [
    {
        path: '#',
        title: 'Theo dõi trên Facebook',
        classes: 'facebook',
        icon: <FontAwesomeIcon icon={faFacebookF} />,
    },
    {
        path: '#',
        title: 'Theo dõi trên Twitter',
        classes: 'twitter',
        icon: <FontAwesomeIcon icon={faTwitter} />,
    },
    {
        path: '#',
        title: 'Theo dõi trên Google',
        classes: 'google',
        icon: <FontAwesomeIcon icon={faGoogle} />,
    },
    {
        path: '#',
        title: 'Theo dõi trên Youtube',
        classes: 'youtube',
        icon: <FontAwesomeIcon icon={faYoutube} />,
    },
];
function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('container')}>
                {/**first-footer */}
                <div className={cx('d-flex', 'first-footer')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            {listMenus.map((menu, index) => {
                                return (
                                    <div key={index} className={cx('col-lg-3 col-md-6 col-12')}>
                                        <h4 className={cx('title-menu')}>
                                            <span>{menu.title}</span>
                                        </h4>
                                        <ul className={cx('list-menu')}>
                                            {menu.children.map((page, index) => {
                                                return (
                                                    <li key={index} className={cx('item-menu')}>
                                                        <Link to={page.path} title={page.title}>
                                                            {page.title}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                        <hr />
                    </div>
                </div>
                {/**child-footer */}
                <div className={cx('d-flex', 'child-footer')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-6 col-12')}>
                                <h4 className={cx('title-menu')}>Thiên đường mua sắm Poco Mart</h4>
                                <ul>
                                    <li>Copyright@ 2021 Công ty cổ phần thương mại Poco Mart</li>
                                    <li>Chứng nhận ĐKKD số: 0388282938 do sở KH &amp; ĐT TP.Hà Nội cấp</li>
                                    <li>Địa chỉ: Tòa nhà Ladeco 266 Đội Cấn, Ba Đình, Hà Nội</li>
                                    <li>
                                        Điện thoại:{' '}
                                        <Link className={cx('fone')} href="#">
                                            19006750
                                        </Link>
                                        - Email: <Link href="#">support@sapo.vn</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('col-lg-6 col-12')}>
                                <h4 className={cx('title-menu')}>Nhận tin khuyến mại</h4>
                                <div className={cx('mail-footer')}>
                                    <div className={cx('input-group')}>
                                        <div className={cx('groupiput')}>
                                            <input
                                                type="email"
                                                className={cx('input-email')}
                                                required
                                                autoComplete="off"
                                                name="email-footer"
                                                placeholder="Nhập email của bạn."
                                            />
                                        </div>
                                        <div className={cx('subscribe')}>
                                            <button type="submit" className={cx('btn')}>
                                                Đăng ký
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('socal-media-footer')}>
                                    <div className={cx('social-buttons')}>
                                        {listSocials.map((social, index) => {
                                            return (
                                                <Link
                                                    key={index}
                                                    className={cx('social-button', `${social.classes}`)}
                                                    href={social.path}
                                                    title={social.title}
                                                >
                                                    {social.icon}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/**copy-right */}
                <div className={cx('d-flex', 'copy-right')}>
                    <div className={cx('container')}>
                        <div className={cx('inner')}>
                            <div className={cx('row')}>
                                <div className={cx('col-lg-6', 'col-md-6', 'col-12')}>
                                    <div className={cx('wsp')}>
                                        <span>Bản quyển thuộc về </span>
                                        <Link href="#" title="Ego Creative">
                                            Ego Creative
                                        </Link>
                                        <span> Cung cấp bởi </span>
                                        <Link href="#" title="Sapo">
                                            Sapo
                                        </Link>
                                    </div>
                                </div>
                                <div className={cx('col-lg-6 col-md-6', 'col-12', 'd-lg-block', 'd-none', 'text-end')}>
                                    <ul>
                                        {listPages.slice(0, 5).map((page, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={page.path} title={page.title}>
                                                        {page.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
