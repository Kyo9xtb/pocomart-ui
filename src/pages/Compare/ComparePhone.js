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
        <div className={cx('box-popup', 'smartphone-compare')}>
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
                    {/*screen */}
                    <div className={cx('box-popup--compare-group', 'm-3')}>
                        <p className={cx('title')}>Màn hình</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Kích thước màn hình</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.screen_size}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Công nghệ màn hình</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.screen_technology}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Độ phân giải màn hình</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.screen_resolution}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Tính năng màn hình</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.screen_feature}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Tần số quét</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.screen_feature}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Kiểu màn hình</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.screen_type}</td>;
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*back_camera*/}
                    <div className={cx('box-popup--compare-group', 'm-3')}>
                        <p className={cx('title')}>Camera sau</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Camera sau</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.back_camera}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Quay video</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.video_back_camera}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Tính năng camera</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.feature_back_camera}</td>;
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*front_camera*/}
                    <div className={cx('box-popup--compare-group', 'm-3')}>
                        <p className={cx('title')}>Camera trước</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Camera trước</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.front_camera}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Quay video</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.video_front_camera}</td>;
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*chipset&gpu*/}
                    <div className={cx('box-popup--compare-group', 'm-3')}>
                        <p className={cx('title')}>Vi xử lý & đồ họa</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Chipset</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.chipset}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Loại CPU</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.cpu_type}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>GPU</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.gpu}</td>;
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*Ram & Storage*/}
                    <div className={cx('box-popup--compare-group', 'm-3')}>
                        <p className={cx('title')}>Ram & Lưu trữ</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Dung lượng RAM</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.ram_capacity}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Bộ nhớ trong</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.hard_drive}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Khe cắm thẻ nhớ</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.screen_size}</td>;
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*Battery & charging technology*/}
                    <div className={cx('box-popup--compare-group', 'm-3')}>
                        <p className={cx('title')}>Pin & Công nghệ sạc</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Pin</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.battery_capacity}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Công nghệ sạc</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.charging_technology}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Cổng sạc</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.charging_port}</td>;
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*Communicate & connect*/}
                    <div className={cx('box-popup--compare-group', 'm-3')}>
                        <p className={cx('title')}>Giao tiếp & kết nối</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Thẻ SIM</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.sim_card}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.operating_system}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Công nghệ NFC</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.nfc_technology}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Hỗ trợ mạng</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.network_support}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Wi-Fi</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.wifi}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Bluetooth</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.bluetooth}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>GPS</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.gps}</td>;
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*Design & Weight*/}
                    <div className={cx('box-popup--compare-group', 'm-3')}>
                        <p className={cx('title')}>Thiết kế & Trọng lượng</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Kích thước</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.size}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Trọng lượng</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.weight}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Chất liệu mặt lưng</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.back_material}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Chất liệu khung viền</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.frame_material}</td>;
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*Other parameters*/}
                    <div className={cx('box-popup--compare-group', 'm-3')}>
                        <p className={cx('title')}>CThông số khác</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Tương thích</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.screen_size}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Chỉ số kháng nước, bụi</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.water_dust_resistance_index}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Tiện ích khác</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.technology_utilities}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Công nghệ âm thanh</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.audio_technology}</td>;
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*Other utilities*/}
                    <div className={cx('box-popup--compare-group', 'm-3')}>
                        <p className={cx('title')}>Tiện ích khác</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Cảm biến vân tay</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.fingerprint_sensors}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Các loại cảm biến</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.sensor_types}</td>;
                                    })}
                                </tr>
                                <tr>
                                    <td>Tính năng đặc biệt</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.special_features}</td>;
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*General information*/}
                    <div className={cx('box-popup--compare-group', 'm-3')}>
                        <p className={cx('title')}>Thông tin chung</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Thời điểm ra mắt</td>
                                    {data.map((item, index) => {
                                        return <td key={index}>{item.launch_time}</td>;
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
function ComparePhone({ data, event, viewAction }) {
    const { handleClose, handleOpen, handleRemoveCompare, handleScroll } = event;

    return (
        <div className={cx('box-compare')}>
            <div className={cx('box-title')}>
                <p className={cx('box-titlle_title')}>Thông tin cơ bản smartphone</p>
            </div>
            <div className={cx('box-content')}>
                <table>
                    <thead>
                        <tr>
                            <th data-sale={data.length}></th>
                            {data.map((item, index) => {
                                return (
                                    <td key={index}>
                                        <img src={item.image_url} alt={item.product_name} />
                                        {item.product_name}
                                    </td>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Kích thước màn hình</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.screen_size}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Công nghệ màn hình</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.screen_technology}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Camera sau</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.back_camera}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Camera trước</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.front_camera}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Chipset</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.chipset}</td>;
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
                            <th>Thẻ Sim</th>
                            {data.map((item, index) => {
                                return <td key={index}>{item.sim_card}</td>;
                            })}
                        </tr>
                        <tr>
                            <th>Hệ điều hành</th>
                            {data.map((item, index) => {
                                return (
                                    <td key={index}>
                                        {item.operating_system}
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
            {viewAction ? <CompareDetails data={data} onClick={handleClose} onScroll={handleScroll} /> : <Fragment />}
        </div>
    );
}

export default ComparePhone;
