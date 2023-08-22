//Library import
import classNames from 'classnames/bind';


//File import
import styles from './Footer.module.scss';

const cx = classNames.bind(styles)
function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('container')}>
                <h3>Footer</h3>
            </div>
        </div>
    );
}

export default Footer;
