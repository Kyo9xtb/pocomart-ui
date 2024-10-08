//Import library
import React, { Fragment, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//Import file
import styles from './Home.module.scss';
import SlideShow, { SlideCategory, SlideFashion, SlideIwish, SlideTabProduct } from '~/components/SlideShow';
import { slides, bannerProductTab, technological, fashion } from '~/assets/images';
import { publicRoutes } from '~/routes';
import ItemProduct from '~/components/ItemProduct';
import ItemNew from '~/components/ItemNew';

import listNews from '~/config/listNews';
import { useProducts } from '~/hooks';
import { ListProduct } from '~/config';

//Data Test
const cx = classNames.bind(styles);

const listSlides = [
    {
        image_url: slides.slide1,
        title: 'slider_1',
    },
    {
        image_url: slides.slide2,
        title: 'slider_2',
    },
    {
        image_url: slides.slide3,
        title: 'slider_3',
    },
    {
        image_url: slides.slide4,
        title: 'slider_4',
    },
    {
        image_url: slides.slide5,
        title: 'slider_5',
    },
];
const listBannerTech = [
    {
        path: '#',
        title: 'Săn sale thả ga',
        banner: technological.banner1,
    },
    {
        path: '#',
        title: 'Giảm giá sốc',
        banner: technological.banner2,
    },
];
const listFashion = [
    {
        path: '#',
        title: 'Săn sale thả ga',
        banner: fashion.banner1,
    },
    {
        path: '#',
        title: 'Giảm giá sốc',
        banner: fashion.banner2,
    },
];
// const listProducts = ListProduct;
function Home() {
    document.title = 'POCO Mart | Thiên đường mua sắn cho mọi nhà';
    let listProducts = useProducts('laptops');
    if (listProducts.length === 0) {
        listProducts = ListProduct;
    }
    console.log("listProducts HomePage", listProducts);
    //Tab-product
    const listProductTab = [
        {
            title: 'Điện thoại',
            subTitle: 'Giảm ngay 1 triệu khi mua online',
            banner: bannerProductTab.phone,
            // children: listProducts.filter((product) => product.type.toLowerCase() === 'laptop' && product.sale !== 0),
        },
        {
            title: 'Thời trang',
            subTitle: 'Giảm giá cực lớn lên tới 70%',
            banner: bannerProductTab.fashion,
            // children: listProducts.filter((product) => product.type.toLowerCase() === 'laptop' && product.sale <= 70),
        },
        {
            title: 'Gia Dụng',
            subTitle: 'Giá siêu ưu đãi lên tới 30%',
            banner: bannerProductTab.kitchen,
            // children: listProducts.filter((product) => product.type.toLowerCase() === 'laptop' && product.sale <= 30),
        },
    ];

    useEffect(() => {
        const listNavTab = document.querySelectorAll(`.${cx('nav-tab')} li`);
        const listTabContent = document.querySelectorAll(`.${cx('tab-container')} .${cx('tab-content')}`);
        listNavTab.forEach((item, index) => {
            item.addEventListener('click', () => {
                listNavTab.forEach((item) => {
                    item.classList.remove(`${cx('current')}`);
                });
                listTabContent.forEach((item) => {
                    item.classList.remove(`${cx('current')}`);
                });
                item.classList.add(`${cx('current')}`);
                listTabContent[index].classList.add(`${cx('current')}`);
            });
        });
        listNavTab[0].click();
    }, []);
    return (
        <Fragment>
            {/*section-slide*/}
            <div className={cx('section-slide')}>
                <div className={cx('container')}>
                    <SlideShow data={listSlides} />
                </div>
            </div>
            {/*section-category*/}
            <div className={cx('section-category')}>
                <div className={cx('container')}>
                    <SlideCategory data={publicRoutes[2].children} />
                </div>
            </div>
            {/*section-tab-product*/}
            <div className={cx('section-tab-product')}>
                <div className={cx('container')}>
                    <div className={cx('wapper')}>
                        <ul className={cx('nav-tab')}>
                            {listProductTab.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <h4>{item.title}</h4>
                                        <p>{item.subTitle}</p>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className={cx('tab-container')}>
                            {listProductTab.map((item, index) => {
                                return (
                                    <div key={index} className={cx('tab-item', 'tab-content')}>
                                        <div className={cx('banner-left')}>
                                            <Link herf="#">
                                                <img
                                                    className={cx('lazyload', 'loaded')}
                                                    src={item.banner}
                                                    alt="Siêu sale"
                                                />
                                            </Link>
                                        </div>
                                        <div className={cx('content-fill')}>
                                            {item.children && item.children.length !== 0 ? (
                                                <SlideTabProduct
                                                    data={item.children}
                                                    className={cx('item-tab-product')}
                                                />
                                            ) : (
                                                <div style={{ textAlign: 'center' }}>
                                                    Hiện không sản phẩm khuyến mại
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/*section-tech*/}
            <div className={cx('section-tech')}>
                <div className={cx('container')}>
                    <div className={cx('swap')}>
                        <h2 className={cx('title-block upscape', 'title-block')}>
                            <Link to="#" title="Đồ công nghệ">
                                Đồ công nghệ
                            </Link>
                        </h2>
                        <ul>
                            {publicRoutes[2].children.slice(0, 5).map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path} title={item.title}>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className={cx('row')}>
                            <div
                                className={cx('col-lg-3 d-md-none d-lg-block col-12 order-2 order-lg-1', 'block-image')}
                            >
                                {listBannerTech.slice(0, 2).map((item, index) => {
                                    return (
                                        <Link
                                            to={item.path}
                                            className={cx('banner-vertical')}
                                            title={item.title}
                                            key={index}
                                        >
                                            <img src={item.banner} alt={item.title} />
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className={cx('col-lg-9 col-md-12 col-12 order-1 order-lg-2', 'no-padding-left')}>
                                <div className={cx('slide-tech row')}>
                                    {listProducts.slice(0, 8).map((item, index) => {
                                        return (
                                            <div key={index} className={cx('col-lg-3 col-md-3 col-6')}>
                                                <ItemProduct data={item} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*section-fashion*/}
            <div className={cx('section-fashion')}>
                <div className={cx('container')}>
                    <div className={cx('swap')}>
                        <h2 className={cx('title-block upscape')}>
                            <Link to="#" title="Thời trang">
                                Thời trang
                            </Link>
                        </h2>
                        <ul>
                            {publicRoutes[2].children[7].children.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path} title={item.title}>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-5 col-12', 'wapper-slide')}>
                                <SlideFashion data={listFashion} className={cx('slide-fashion')} />
                            </div>
                            {listProducts.slice(0, 8).map((item, index) => {
                                return (
                                    <div key={index} className={cx('col-lg-2 col-6 col-md-3', 'item-fashion')}>
                                        <ItemProduct data={item} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/*section-maybe-iwish*/}
            <div className={cx('section-maybe-iwish')}>
                <div className={cx('container')}>
                    <div className={cx('swap')}>
                        <h2 className={cx('title-block upscape')}>
                            <Link to="#" title="Gợi ý hôm nay">
                                Gợi ý hôm nay
                            </Link>
                        </h2>
                        <div className={cx('slide-iwish')}>
                            <SlideIwish data={listProducts.slice(0, 10)} className={cx('item-iwish')} />
                        </div>
                    </div>
                </div>
            </div>
            {/*section-blog*/}
            <div className={cx('section-blog')}>
                <div className={cx('container')}>
                    <h2 className={cx('title-block upscape')}>
                        <Link to="#" title="Tin tức mới nhất">
                            Tin tức mới nhất
                        </Link>
                    </h2>
                    <div className={cx('row')}>
                        {listNews.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className={cx('col-lg-3 col-md-3 col-8')}>
                                    <ItemNew data={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Home;
