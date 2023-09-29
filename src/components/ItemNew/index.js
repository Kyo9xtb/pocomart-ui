//Library import
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//File import
import styles from './ItemNew.module.scss';

const cx = classNames.bind(styles);
function ItemNew({ data, className, label = true }) {
    return (
        <div className={cx('item-blog-base')}>
            <Link to="#" className={cx('thumb')} title="">
                <img
                    className={cx('lazyload','img-responsive','loaded')}
                    src="https://bizweb.dktcdn.net/thumb/large/100/429/689/articles/galaxy-fold-black-home-screen-open.jpg?v=1623603593787"
                    alt=""
                />
                {label ? <span className={cx('thead')}>Tin tuc</span> : ''}
            </Link>
            <div className={cx('content-blog')}>
                <h3>
                    <Link to="#" className={cx('a-title')}>
                        Galaxy Z Fold 3 và Z Flip 3 sẽ có giá rẻ hơn
                    </Link>
                </h3>
                <p>
                    Hai smartphone đắt nhất của Samsung sẽ có giá rẻ hơn 400 USD so với thế hệ trước. Theo báo cáo của
                    SamMobile
                </p>
            </div>
        </div>
    );
}

export default ItemNew;
