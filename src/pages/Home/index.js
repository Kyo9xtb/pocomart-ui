//Import library
import classNames from 'classnames/bind';

//Import file
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    document.title = "POCO Mart | Thiên đường mua sắn cho mọi nhà"
    return (
        <div className={cx('container-test')}>
            <h1>Home</h1>
        </div>
    );
}
export default Home;
