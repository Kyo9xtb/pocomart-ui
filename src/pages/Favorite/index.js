//Library import
import { Fragment } from 'react';
import classNames from 'classnames/bind';

// File import
import styles from './Favourite.module.scss';
import ItemProduct from '~/components/ItemProduct';
import { useStore } from '~/store';

const cx = classNames.bind(styles);

function Favorite() {
    const [state] = useStore();
    const { Favorites } = state;
    // console.log(Favorites); 
    return (
        <div className={cx('right-content', 'col-xl-9 col-lg-9 col-md-12 col-12 order-lg-last order-xl-last')}>
            <div className={cx('title-block-page')}>
                <h1>Danh sách yêu thích của tôi</h1>
            </div>
            <div className={cx('block-list')}>
                <div className={cx('row')}>
                    {Favorites !== null ? (
                        Favorites.map((item, index) => {
                            return (
                                <div key={index} className={cx('col-6 col-md-3 col-lg-3', 'product-col')}>
                                    <ItemProduct data={item} className={cx('item-product-main')} />
                                </div>
                            );
                        })
                    ) : <Fragment/>}
                </div>
            </div>
        </div>
    );
}

export default Favorite;
