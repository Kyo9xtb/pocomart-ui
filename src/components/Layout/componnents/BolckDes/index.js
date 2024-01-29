//Library import
import classNames from 'classnames/bind';

//File import
import styles from './BlockDes.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);
function BlockDes({ data }) {
    const item = data.children[0];
    return (
        <div className={cx('block-des')}>
            <div className={cx('img-block')}>
                <img src={item.thumbSmall} alt={item.title} width={`80px`} height={`80px`} />
            </div>
            <div className={cx('des')}>
                <h1>{item.title}</h1>
                <div className={cx('scrolldes')}>
                    {item.thumbSmall ? (
                        <Fragment>
                            <p>
                                Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng. Giao nhanh,
                                đem nhiều mẫu chọn, cà thẻ tại nhà. Trả góp 0%
                            </p>
                            <p>
                                <img src={item.thumbSmall} alt={item.title} width={`80px`} height={`80px`} />
                            </p>
                        </Fragment>
                    ) : (
                        <p>
                            Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng. Giao nhanh, đem
                            nhiều mẫu chọn, cà thẻ tại nhà. Trả góp 0%
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlockDes;
