//Library import
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
//File import
import styles from './SildeShow.scss';
import ItemProduct from '../ItemProduct';

//Data Test
const cx = classNames.bind(styles);
function SlideShow({ data }) {
    const settings = {
        dots: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 10000,
        className: 'wapper-slide',
    };
    return (
        <Slider {...settings}>
            {data.map((data, index) => {
                return (
                    <div key={index} className={cx('slide-item')}>
                        <Link to="#" title={data.title}>
                            <img src={data.image_url} alt={data.title} />
                        </Link>
                    </div>
                );
            })}
        </Slider>
    );
}

function SlideCategory({ data }) {
    const settings = {
        infinite: false,
        className: 'wapper-slide',
        slidesToShow: 9.5,
        prevArrow: (
            <button type="button" className="slick-prev">
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
        ),
        nextArrow: (
            <button type="button" className="slick-next">
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        ),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 8.5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5.5,
                    arrows: false,
                    slidesToScroll: 4,
                },
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4.5,
                    arrows: false,
                    slidesToScroll: 3,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {data.map((data, index) => {
                return (
                    <div key={index} className={cx('cate-item')}>
                        <Link className={cx('image')} to="#" title={data.title}>
                            <img src={data.thumbSmall} alt={data.title} />
                        </Link>
                        <h4>
                            <Link to="#" title={data.title}>
                                {data.title}
                            </Link>
                        </h4>
                    </div>
                );
            })}
        </Slider>
    );
}
function SlideTabProduct({ data, className }) {
    const classes = cx({
        [className]: className,
    });
    const settings = {
        infinite: false,
        className: '',
        slidesToShow: 4.5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    arrows: true,
                    prevArrow: (
                        <button type="button" className="slick-prev">
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                    ),
                    nextArrow: (
                        <button type="button" className="slick-next">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    ),
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.5,
                    arrows: false,
                    slidesToScroll: 2,
                },
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4.5,
                    arrows: false,
                    slidesToScroll: 3,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {data.map((data, index) => {
                return <ItemProduct key={index} data={data} className={classes} />;
            })}
        </Slider>
    );
}
function SlideFashion({ data, className }) {
    const classes = cx('wapper-slide', {
        [className]: className,
    });
    const settings = {
        infinite: false,
        dots: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 10000,
        className: classes,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1.5,
                    // slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {},
            },

            {
                breakpoint: 576,
                settings: {},
            },
        ],
    };
    return (
        <Slider {...settings}>
            {data.map((data, index) => {
                return (
                    <div key={index} className={cx('slide-item')}>
                        <Link to="#" title={data.title}>
                            <img src={data.banner} alt={data.title} />
                        </Link>
                    </div>
                );
            })}
        </Slider>
    );
}
function SlideIwish({ data, className }) {
    const classes = cx({
        [className]: className,
    });
    const settings = {
        infinite: false,
        className: cx('wapper-slide-iwish'),
        slidesToShow: 5,
        prevArrow: (
            <button type="button" className="slick-prev">
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
        ),
        nextArrow: (
            <button type="button" className="slick-next">
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        ),
        responsive: [
            {
                breakpoint: 1500,
                settings: {},
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {data.map((data, index) => {
                return <ItemProduct key={index} data={data} className={classes} />;
            })}
        </Slider>
    );
}
export default SlideShow;
export { SlideCategory, SlideTabProduct, SlideFashion, SlideIwish };
