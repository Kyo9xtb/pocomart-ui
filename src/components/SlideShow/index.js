//Library import
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//File import
import classNames from 'classnames/bind';
import styles from './SildeShow.scss';

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

export default SlideShow;
