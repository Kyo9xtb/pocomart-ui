//Library import
import classNames from 'classnames/bind';
import { Fragment, useEffect } from 'react';

//File import
import BreadCrumb from '~/components/BreadCrumb';
import styles from './Questions.module.scss';

const cx = classNames.bind(styles);
const listQuestions = [
    {
        quetion: 'Poco Mart có xác nhận đơn hàng với tôi không?',
        answer: 'Với khách hàng đặt mua hàng thành công đầu tiên, để đẩy nhanh tiến độ xử lý và giao hàng đến quý khách, các đơn hàng sẽ được xác nhận qua email.',
    },
    {
        quetion: 'Làm thế nào để tôi đặt nhiều sản phẩm vào cùng 1 đơn hàng?',
        answer: 'Qúy khách có thể đặt các sản phẩm khác nhau trong 1 giỏ hàng thành 1 đơn hàng, các sản phẩm trong giỏ hàng sẽ được đóng thành 1 kiện hàng (nếu các sản phẩm có cùng kho xử lý/nhà bán hàng) và giao đến địa chỉ quý khách đã đăng ký.',
    },
    {
        quetion: 'Tôi có thể thanh toán khi nhận hàng không?',
        answer: 'Poco Mart hỗ trợ giao hàng và thanh toán tận nơi cho các đơn hàng có tổng trị giá từ 20.000.000đ trở xuống trên toàn quốc. Quý khách có thể tham khảo thêm các phương thức thanh toán khác',
    },
    {
        quetion: 'Poco Mart bán những sản phẩm gì?',
        answer: 'Được thành lập từ tháng 6/2019, đến nay website thương mại điện tử Poco Mart cung cấp các sản phẩm thuộc ngành hàng như sau: Điện Thoại, Thời Trang, Nội Thất, Đồ Chơi, Văn Phòng Phẩm, Làm Đẹp, Sức Khỏe, Laptop, Máy Chơi Game, Điện Gia Dụng...',
    },
    {
        quetion: 'Làm thế nào để tôi nhận biết sản phẩm còn hay hết hàng?',
        answer: 'Quý khách có thể nhận biết sản phẩm còn hàng hay hết hàng tại Poco Mart bằng cách truy cập vào thông tin chi tiết của sản phẩm và kiểm tra trạng thái sau: Nút mua hàng hiển thị',
    },
    // {
    //     quetion: '',
    //     answer: '',
    // },
];
function Questions() {
    document.title = 'Câu hỏi thường gặp';
    useEffect(() => {
        const listQuestions = document.querySelectorAll(`.${cx('wapper-question')} h4`);
        const listAnswers = document.querySelectorAll(`.${cx('wapper-question')} p`);
        listQuestions.forEach((question, index) => {
            question.addEventListener('click', () => {
                listQuestions.forEach((item, index) => {
                    item.classList.remove(`${cx('active')}`);
                });
                listAnswers.forEach((item, index) => {
                    item.classList.remove(`${cx('show')}`);
                });
                question.classList.add(`${cx('active')}`);
                listAnswers[index].classList.add(`${cx('show')}`);
            });
        });
    }, []);
    return (
        <Fragment>
            <BreadCrumb title="Câu hỏi thường gặp" />
            <div className={cx('page')}>
                <div className={cx('container')}>
                    <div className={cx('question-page')}>
                        <div className={cx('row')}>
                            <div className={cx('col-12')}>
                                <div className={cx('title-block-page')}>
                                    <h1 className={cx('title-head')}>Câu hỏi thường gặp</h1>
                                </div>
                                <div className={cx('content-page ', 'content-page')}>
                                    <div className={cx('wapper-question')}>
                                        <h4>Poco Mart có xác nhận đơn hàng với tôi không?</h4>
                                        <p>
                                            Với khách hàng đặt mua hàng thành công đầu tiên, để đẩy nhanh tiến độ xử lý
                                            và giao hàng đến quý khách, các đơn hàng sẽ được xác nhận qua email.
                                        </p>
                                    </div>
                                    {listQuestions.map((question, index) => {
                                        return (
                                            <div key={index} className={cx('wapper-question')}>
                                                <h4>{question.quetion}</h4>
                                                <p>{question.answer}</p>
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

export default Questions;
