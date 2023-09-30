//Library import
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

//File import
import styles from './BreadCrumb.module.scss';
const cx = classNames.bind(styles);
function BreadCrumb({ title }) {
    return (
        <div className={cx('bread-crumb')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <ul className={cx('wapper-list')}>
                            <li>
                                <Link to="/" title="Trang chủ">
                                    <span>Trang chủ</span>
                                </Link>
                                <span className={cx('mr_lr')}>&nbsp;/&nbsp;</span>
                            </li>
                            <li>
                                <strong>
                                    <span>{title}</span>
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;
