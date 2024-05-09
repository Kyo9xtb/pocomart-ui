//Library import
import classNames from 'classnames/bind';

// File import
import styles from './New.module.scss';
import ItemNew from '~/components/ItemNew';
import listNews from '~/config/listNews';

const cx = classNames.bind(styles);
function News() {
    return (
        <div className={cx('right-content', 'col-xl-9 col-lg-9 col-md-12 col-12 order-lg-last order-xl-last')}>
            <div className={cx('title-block-page')}>
                <h1>Tin tức</h1>
            </div>
            <div className={cx('block-list')}>
                <div className={cx('row')}>
                    {listNews.slice(0, 2).map((item, index) => {
                        return (
                            <div key={index} className={cx('col-xl-6 col-md-6 col-12')}>
                                <ItemNew className={cx('blog-grid')} data={item} />
                            </div>
                        );
                    })}
                    {listNews.slice(2).map((item, index) => {
                        return (
                            <div key={index} className={cx('col-xl-4 col-md-6 col-12')}>
                                <ItemNew className={cx('blog-grid')} data={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default News;
