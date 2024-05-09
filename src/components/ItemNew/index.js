//Library import
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//File import
import styles from './ItemNew.module.scss';

const cx = classNames.bind(styles);
function ItemNew({ data, className, label = false }) {
    const { Title, Compendious, Picture, Content,  } = data;
    const classes = cx('item-blog-base', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <Link to="#" className={cx('thumb')} title="">
                <img className={cx('lazyload', 'img-responsive', 'loaded')} src={Picture} alt={Title} />
                {label ? <span className={cx('thead')}>Tin tuc</span> : ''}
            </Link>
            <div className={cx('content-blog')}>
                <h3>
                    <Link to="#" className={cx('a-title')}>
                        {Compendious}
                    </Link>
                </h3>
                <p>{Content}</p>
            </div>
        </div>
    );
}

export default ItemNew;
