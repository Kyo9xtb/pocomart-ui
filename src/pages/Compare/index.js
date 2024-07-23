import classNames from 'classnames/bind';

import styles from './Compares.moudle.scss';
import BreadCrumb from '~/components/BreadCrumb';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Compare() {
    return (
        <div className={cx('container')}>
            <BreadCrumb title="So sánh sản phẩm" />
            <div className={cx('title-block-page')}>
                <h1>So sánh sản phẩm</h1>
            </div>
            <table>
                <tr>
                    <td>Hình ảnh</td>
                    <td>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-2-0340d148-dd79-40b3-b8ad-95ed589c7b5a.png?v=1623564588267"
                            alt=""
                        />
                    </td>
                    <td>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-2-0340d148-dd79-40b3-b8ad-95ed589c7b5a.png?v=1623564588267"
                            alt=""
                        />
                    </td>
                    <td>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/apple-iphone-12-mini-2-0340d148-dd79-40b3-b8ad-95ed589c7b5a.png?v=1623564588267"
                            alt=""
                        />
                    </td>
                </tr>
                <tr>
                    <td>Tên sản phẩm</td>
                    <td>
                        <h3>
                            <Link to="#" title="Apple iPhone 12 Mini New">
                                Apple iPhone 12 Mini New
                            </Link>
                        </h3>
                    </td>
                    <td>
                        <h3>
                            <Link to="#" title="Apple iPhone 12 Mini New">
                                Apple iPhone 12 Mini New
                            </Link>
                        </h3>
                    </td>
                    <td>
                        <h3>
                            <Link to="#" title="Apple iPhone 12 Mini New">
                                Apple iPhone 12 Mini New
                            </Link>
                        </h3>
                    </td>
                </tr>
                <tr>
                    <td>Giá</td>
                    <td>26.000.000₫</td>
                    <td>26.000.000₫</td>
                    <td>26.000.000₫</td>
                </tr>
                <tr>
                    <td>Loại</td>
                    <td>Smartphone</td>
                    <td>Smartphone</td>
                    <td>Smartphone</td>
                </tr>
                <tr>
                    <td>Apple</td>
                    <td>Apple</td>
                </tr>
                <tr>
                    <td colSpan={4}>Chi tiết sản phẩm</td>
                </tr>
                <tr>
                    <td>Kích thước màn hình</td>
                    <td>6.7 inches</td>
                    <td>6.7 inches</td>
                    <td>6.7 inches</td>
                </tr>
                <tr>
                    <td>Độ phân giải màn hình</td>
                    <td>1284 x 2778 pixels</td>
                    <td>1284 x 2778 pixels</td>
                    <td>1284 x 2778 pixels</td>
                </tr>
                <tr>
                    <td>Loại màn hình</td>
                    <td>Super Retina XDR OLED, HDR10, Dolby Vision, Wide color gamut, True-tone</td>
                    <td>Super Retina XDR OLED, HDR10, Dolby Vision, Wide color gamut, True-tone</td>
                    <td>Super Retina XDR OLED, HDR10, Dolby Vision, Wide color gamut, True-tone</td>
                </tr>
                <tr>
                    <td>Bộ nhớ trong</td>
                    <td>128 GB</td>
                    <td>128 GB</td>
                    <td>128 GB</td>
                </tr>
                <tr>
                    <td>Chipset</td>
                    <td>Apple A14 Bionic (5 nm)</td>
                    <td>Apple A14 Bionic (5 nm)</td>
                    <td>Apple A14 Bionic (5 nm)</td>
                </tr>
                <tr>
                    <td>Kích thước</td>
                    <td>160.8 x 78.1 x 7.4 mm</td>
                    <td>160.8 x 78.1 x 7.4 mm</td>
                    <td>160.8 x 78.1 x 7.4 mm</td>
                </tr>
                <tr>
                    <td>Trọng lượng</td>
                    <td>228g</td>
                    <td>228g</td>
                    <td>228g</td>
                </tr>
                <tr>
                    <td>Camera sau</td>
                    <td>
                        12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.0, 52mm (telephoto), 1/3.4",
                        1.0µm, PDAF, OIS, 2x optical zoom 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6" TOF 3D LiDAR
                        scanner (depth)
                    </td>
                    <td>
                        12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.0, 52mm (telephoto), 1/3.4",
                        1.0µm, PDAF, OIS, 2x optical zoom 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6" TOF 3D LiDAR
                        scanner (depth)
                    </td>
                    <td>
                        12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.0, 52mm (telephoto), 1/3.4",
                        1.0µm, PDAF, OIS, 2x optical zoom 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6" TOF 3D LiDAR
                        scanner (depth)
                    </td>
                </tr>
                <tr>
                    <td>Camera trước</td>
                    <td>12 MP, f/2.2, 23mm (wide), 1/3.6" SL 3D, (depth/biometrics sensor)</td>
                    <td>12 MP, f/2.2, 23mm (wide), 1/3.6" SL 3D, (depth/biometrics sensor)</td>
                    <td>12 MP, f/2.2, 23mm (wide), 1/3.6" SL 3D, (depth/biometrics sensor)</td>
                </tr>
                <tr>
                    <td>Quay video</td>
                    <td>
                        Trước: 4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS Sau: 4K@24/30/60fps, 1080p@30/60/120/240fps,
                        HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.
                    </td>
                    <td>
                        Trước: 4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS Sau: 4K@24/30/60fps, 1080p@30/60/120/240fps,
                        HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.
                    </td>
                    <td>
                        Trước: 4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS Sau: 4K@24/30/60fps, 1080p@30/60/120/240fps,
                        HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.
                    </td>
                </tr>
                <tr>
                    <td>Pin</td>
                    <td>Li-Ion, sạc nhanh 20W, sạc không dây 15W, USB Power Delivery 2.0</td>
                    <td>Li-Ion, sạc nhanh 20W, sạc không dây 15W, USB Power Delivery 2.0</td>
                    <td>Li-Ion, sạc nhanh 20W, sạc không dây 15W, USB Power Delivery 2.0</td>
                </tr>
            </table>
        </div>
    );
}

export default Compare;
