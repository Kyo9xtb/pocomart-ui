//Import library
import classNames from 'classnames/bind';
import { Fragment } from 'react';

//Import file
import styles from './Home.module.scss';
import SlideShow from '~/components/SlideShow';

//Data Test
import { slides } from '~/assets/images';

const cx = classNames.bind(styles);

const listSlides = [
    {
        image_url: slides.slide1,
        title:"slider_1"
    },
    {
        image_url: slides.slide2,
        title:"slider_2"
    },
    {
        image_url: slides.slide3,
        title:"slider_3"
    },
    {
        image_url: slides.slide4,
        title:"slider_4"
    },
    {
        image_url: slides.slide5,
        title:"slider_5"
    },
]
function Home() {
    document.title = 'POCO Mart | Thiên đường mua sắn cho mọi nhà';
    return (
        <Fragment>
            <div className={cx('section-slide')}>
                <div className={cx('container')}>
                    <SlideShow data={listSlides} />
                </div>
            </div>
        </Fragment>
    );
}
export default Home;
