// Import library
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// Import file
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function ProductItemSearch({ data }) {
    const { image_url, product_name, price, sale } = data;
    return (
        <Link href="#" title={data.title}>
            <div className={cx('wapper-product')}>
                <div className={cx('theme-product')}>
                    <img src={image_url} alt={product_name} />
                </div>
                <div className={cx('info-product')}>
                    <div className={cx('title-product')}>{product_name}</div>
                    <div className={cx('title-product', 'price-product')}>
                        {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                            sale !== 0 ? price * (1 - sale / 100) : price,
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default ProductItemSearch;
