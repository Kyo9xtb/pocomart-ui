//Library import
// import { Fragment } from 'react';
import classNames from 'classnames/bind';

// File import
import styles from './Favourite.module.scss';
import ItemProduct from '~/components/ItemProduct';
import { useStore } from '~/store';

const cx = classNames.bind(styles);

function Favourites() {
    const [state] = useStore();
    const { Favourites } = state;
    console.log(Favourites); 
    return (
        <div className={cx('right-content', 'col-xl-9 col-lg-9 col-md-12 col-12 order-lg-last order-xl-last')}>
            <div className={cx('title-block-page')}>
                <h1>Danh sách yêu thích của tôi</h1>
            </div>
            <div className={cx('block-list')}>
                <div className={cx('row')}>
                    {Favourites !== null ? (
                        Favourites.map((item, index) => {
                            return (
                                <div key={index} className={cx('col-6 col-md-3 col-lg-3', 'product-col')}>
                                    <ItemProduct data={item} className={cx('item-product-main')} />
                                </div>
                            );
                        })
                    ) : ("")}
                </div>
            </div>
        </div>
    );
}

export default Favourites;
