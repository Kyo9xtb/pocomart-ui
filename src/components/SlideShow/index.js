//Library import
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Link } from 'react-router-dom';

//File import
import classNames from 'classnames/bind';
import styles from './SildeShow.scss';

//Data Test

const cx = classNames.bind(styles);
const indicators = (index) => <div className="indicator">{index + 1}</div>;
function SlideShow({ data }) {
    return (
        <div className={cx('wapper-slide')}>
            <Slide indicators={indicators} arrows={false}>
                {data.map((data, index) => {
                    return (
                        <div key={index} className={cx('slide-item')}>
                            <Link to="#" title={data.title}>
                                <img src={data.image_url} alt={data.title} />
                            </Link>
                        </div>
                    );
                })}
            </Slide>
        </div>
    );
}

export default SlideShow;
