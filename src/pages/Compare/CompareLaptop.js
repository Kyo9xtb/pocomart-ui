//Library import
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

//File import
import styles from './Compares.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function CompareDetails({ data, onClick, onScroll }) {
    return (
        <div className={cx('box-popup')}>
            <div className={cx('box-popup__wrapper')} onScroll={onScroll}>
                <div className={cx('box-popup-title')}>
                    So sánh chi tiết
                    <div className={cx('close-icon')}>
                        <button onClick={onClick}>
                            <FontAwesomeIcon icon={faXmark} />
                            &nbsp;Đóng
                        </button>
                    </div>
                </div>
                <div className={cx('compare-full-spec-content')}>
                    <div className={cx('group-spec-model-table')}>
                        <div></div>
                        {data.map((item) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.image_url} alt={item.product_name} />
                                    {item.product_name}
                                </div>
                            );
                        })}
                    </div>
                    <table className={cx('box-popup--compare-group', 'laptop-compare')}>
                        <tr>
                            <th>CPU</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.chipset}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Ram</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.ram_capacity}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Số khe ram</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.slot_number}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>GPU</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.gpu}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Ổ cứng</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.hard_drive}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Khe đọc thẻ</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.card_reader}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Công nghệ và bảo mật</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.security_technology}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Màn hình</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.screen}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Webcam</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.webcam}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Âm thanh</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.audio_technology}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Giao tiếp mạng</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.network_interface}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Giao tiếp không dây</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.wireless_interface}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Cổng giao tiếp</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.communications_port}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Dung lượng pin</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.battery_capacity}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Kích thước</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.size}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Trọng lượng</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.weight}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Hệ điều hành</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.operating_system}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Thời gian bảo hành</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.warranty_time}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Thời điểm ra mắt</th>
                            {data.map((item) => {
                                return <td key={item.id}>{item.launch_time}</td>;
                            })}
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}
function CompareLaptop({ data, event, viewAction }) {
    const {handleClose, handleOpen, handleRemoveCompare, handleScroll} = event
    return (
        <div className={cx('box-compare')}>
            <div className={cx('box-title')}>
                <p className={cx('box-titlle_title')}>Thông tin cơ bản</p>
            </div>
            <div className={cx('box-content')}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {data.map((item, index) => {
                                return (
                                    <th key={index}>
                                        <img src={item.image_url} alt={item.product_name} />
                                        {item.product_name}
                                        <span className={cx('price')}>
                                            {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                                item.price,
                                            )}
                                        </span>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>CPU</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.chipset}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>GPU</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.gpu}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Dung lương ram</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.ram_capacity}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Dung lương ram tối đa</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.maximum_ram_capacity}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Ổ cứng</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.hard_drive}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Dung lượng Ram</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.ram_capacity}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Bộ nhớ trong</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.hard_drive}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Pin</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.battery_capacity}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Khối lượng</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.weight}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Pin</th>
                            {data.map((item, index) => {
                                return (
                                    <td key={index}>
                                        {item.battery_capacity}
                                        <br />
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => {
                                                handleRemoveCompare(item.id);
                                            }}
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={cx('box-show-more-content')}>
                <Link onClick={handleOpen}>Xem so sánh cấu hình chi tiết</Link>
            </div>
            {viewAction ? <CompareDetails data={data} onClick={handleClose} onScroll = {handleScroll} /> : <Fragment />}
        </div>
    );
}

export default CompareLaptop;
