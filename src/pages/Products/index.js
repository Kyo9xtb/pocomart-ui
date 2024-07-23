//Library import
import { Fragment, useState } from 'react';
import classNames from 'classnames/bind';
import { reverse, sortBy } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowDownAZ,
    faArrowDownShortWide,
    faArrowDownWideShort,
    faArrowDownZA,
} from '@fortawesome/free-solid-svg-icons';


//File import
import styles from './Product.module.scss';
import SideBar from '~/components/SideBar';
import { publicRoutes } from '~/routes';
import BlockDes from '~/components/Layout/components/BlockDes';

import ItemProduct from '~/components/ItemProduct';
import { ListProduct } from '~/config';

const cx = classNames.bind(styles);
const listProducts = ListProduct
function Products() {
    const [Products, setListProducts] = useState(listProducts);
    const handleSortByNameAZ = () => {
        setListProducts(
            sortBy(listProducts, (item) => {
                return item.ProductName;
            }),
        );
    };
    const handleSortByNameZA = () => {
        setListProducts(
            reverse(
                sortBy(listProducts, (item) => {
                    return item.ProductName;
                }),
            ),
        );
    };
    const handleSortByPriceIncrease = () => {
        setListProducts(
            sortBy(listProducts, (item) => {
                return item.Price;
            }),
        );
    };
    const handleSortByPriceReduce = () => {
        setListProducts(
            reverse(
                sortBy(listProducts, (item) => {
                    return item.Price;
                }),
            ),
        );
    };
    const handleProductNew = () => {
        setListProducts(listProducts);
    };
    const handleProductOld = () => {
        const test = listProducts;
        setListProducts(reverse(test));
    };
    const listSorts = [
        {
            title: 'Từ A - Z',
            icon: <FontAwesomeIcon icon={faArrowDownAZ} />,
            class: 'alpha-desc',
            event: handleSortByNameAZ,
        },
        {
            title: 'Từ Z - A',
            icon: <FontAwesomeIcon icon={faArrowDownZA} />,
            class: 'alpha-asc',
            event: handleSortByNameZA,
        },
        {
            title: 'Giá tăng dần',
            icon: <FontAwesomeIcon icon={faArrowDownShortWide} />,
            class: 'price-desc',
            event: handleSortByPriceIncrease,
        },
        {
            title: 'Giá giảm dần',
            icon: <FontAwesomeIcon icon={faArrowDownWideShort} />,
            class: 'price-asc',
            event: handleSortByPriceReduce,
        },
        {
            title: 'Mới nhất',
            class: 'created-desc',
            event: handleProductNew,
        },
        {
            title: 'Cũ nhất',
            class: 'created-asc',
            event: handleProductOld,
        },
    ];

    return (
        <Fragment>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <SideBar data={publicRoutes[2]} className={cx('left-content', 'col-lg-3 col-md-4 col-sm-4')} />
                    <div className={cx('main_container', 'collection', 'col-lg-9 col-md-12 col-sm-12')}>
                        <BlockDes data={publicRoutes[2]} />
                        <div className={cx('category-product')}>
                            <div className={cx('section')}>
                                <div className={cx('sortPagiBar')}>
                                    <div className={cx('sort-cate')}>
                                        <div className={cx('sort-cate-left')}>
                                            <ul>
                                                {listSorts.map((item, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            className={cx('btn-quick-sort', `${item.class}`)}
                                                        >
                                                            <button onClick={item.event} to={item.path}>
                                                                {item.icon ? item.icon : <Fragment />}
                                                                {item.title}
                                                            </button>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('products-view')}>
                                <div className={cx('row')}>
                                    {Products.map((item, index) => {
                                        return (
                                            <div key={index} className={cx('col-6 col-md-3 col-lg-3', 'product-col')}>
                                                <ItemProduct data={item} className={cx('item-product-main')} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Products;
