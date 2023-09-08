//Library import
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//File import
import classNames from 'classnames/bind';
import styles from './SildeShow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
            <button type="button" class="slick-prev">
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
        ),
        nextArrow: (
            <button type="button" class="slick-next">
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
export default SlideShow;
export { SlideCategory };
