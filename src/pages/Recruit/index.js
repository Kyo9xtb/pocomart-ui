//Library import
import classNames from 'classnames/bind';
import { Fragment } from 'react';

//File import
import BreadCrumb from '~/components/BreadCrumb';
import styles from './Recruit.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Recruit() {
    document.title = 'Tuyển dụng';
    return (
        <Fragment>
            <BreadCrumb title="Tuyển dụng" />
            <div className={cx('page')}>
                <div className={cx('container')}>
                    <div className={cx('wapper-page')}>
                        <div className={cx('row')}>
                            <div className={cx('col-12')}>
                                <div className={cx('title-block-page')}>
                                    <h1 className={cx('title-head')}>Tuyển dụng</h1>
                                </div>
                                <div className={cx('content-page')}>
                                    <p>
                                        <strong>
                                            POCO MART TUYỂN DỤNG NHÂN VIÊN BÁN HÀNG FULLTIME TOÀN HÀ NỘI & HCM
                                        </strong>
                                    </p>
                                    <p>
                                        <img src={images.imgRecruit} alt="Tuyển dụng nhân sự" />
                                    </p>
                                    <p>
                                        <b>MÔ TẢ CÔNG VIỆC</b>
                                        <br />
                                        - Tính tiền quản lý thu chi trong ca làm việc.
                                        <br />
                                        - Tiếp nhận hàng, trưng bày hàng hóa đúng quy tắc.
                                        <br />
                                        - Vệ sinh sạch sẽ siêu thị, quầy thu ngân.
                                        <br />
                                        - Chủ động hỗ trợ, phục vụ khách hàng.
                                        <br />- Tư vấn giải đáp thắc mắc,yêu cầu của khách hàng khi tham quan mua sắm
                                    </p>
                                    <p>
                                        <b>YÊU CẦU ỨNG VIÊN:</b>
                                        <br />
                                        - Nam/Nữ
                                        <br />
                                        - Tốt nghiệp THPT trở lên. kỹ năng giao tiếp tốt.
                                        <br />- Có khả năng làm việc&nbsp;<b>xoay ca (không làm chết ca):</b>
                                        <br />
                                        + Ca sáng (6:00 - 14:00).
                                        <br />
                                        + Ca chiều (13:30:00 - 22:00).
                                        <br />
                                        = &gt; Đăng ký ca trước làm 1 tuần.
                                        <br />- Chăm chỉ, trung thực, khỏe mạnh, nhanh nhẹn, hòa đồng.
                                    </p>
                                    <p>
                                        <b>QUYỀN LỢI NHÂN VIÊN:</b>
                                        <br />
                                        <b>- Lương cứng thử việc 4.8 triệu + Thưởng.</b>
                                        <br />
                                        <b>
                                            - Lương chính thức: 5,4tr (đã bao gồm bảo hiểm) + Các phúc lợi + Các khoản
                                            thưởng KPIs.
                                        </b>
                                        <br />
                                        <b>
                                            <i>- Tổng thu nhập 6 - 9 triệu + Chế độ đầy đủ.</i>
                                        </b>
                                        <br />
                                        - 1 tuần nghỉ 1 ngày báo quản lí.
                                        <br />
                                        - Được đóng đầy đủ 03 loại bảo hiểm BHXH, BHYT, BHTN và gói bảo hiểm sức khỏe
                                        Bảo Việt chế độ cao.
                                        <br />- Có cơ hội thăng tiến lên Cửa hàng Phó trong vòng 06 tháng, cửa hàng
                                        trưởng sau 4 tháng tiếp.
                                    </p>
                                    <p>Loại hình công việc: Toàn thời gian.</p>
                                    <p>Lương: 6.000.000₫ - 9.000.000₫ một tháng.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Recruit;
