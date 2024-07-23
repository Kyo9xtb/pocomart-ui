//Libary import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
//Layout import
import { NewsLayout, ProductLayout } from '~/components/Layout';
//Pages import
import Home from '~/pages/Home';
import About from '~/pages/About';
import Contact from '~/pages/Contact';
import News from '~/pages/News';
import Products from '~/pages/Products';
import Questions from '~/pages/Questions';
import Recruit from '~/pages/Recruit';
import Cart from '~/pages/Cart';
import { Login, Register } from '~/pages/Account';
import { thumbIcons, thumbSmall } from '~/assets/images';
import Favorite from '~/pages/Favorite';
import Compare from '~/pages/Compare';
import config from '~/config';
//Public Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        title: 'Trang chủ',
    },
    {
        path: '/gioi-thieu',
        component: About,
        title: 'Giới thiệu',
    },
    {
        path: '/san-pham',
        component: Products,
        layout: ProductLayout,
        title: 'Tất cả sản phẩm',
        iconDesktop: <FontAwesomeIcon icon={faCaretDown} />,
        children: [
            {
                path: '/dien-thoai-may-tinh-bang',
                title: 'Điện thoại - Máy tính bảng',
                thumbIcon: thumbIcons.phone,
                thumbSmall: thumbSmall.phone,
                iconDesktop: <FontAwesomeIcon icon={faCaretRight} />,
                iconMenuMega: <FontAwesomeIcon icon={faAngleDown} />,
                children: [
                    {
                        path: '#',
                        title: 'IPhone',
                    },
                    {
                        path: '#',
                        title: 'Sam Sung',
                    },
                    {
                        path: '#',
                        title: 'Xiaomi',
                    },
                    {
                        path: '#',
                        title: 'OPPO',
                    },
                    {
                        path: '#',
                        title: 'Vivo',
                    },
                    {
                        path: '#',
                        title: 'Nokia',
                    },
                    {
                        path: '#',
                        title: 'Realme',
                    },
                    {
                        path: '#',
                        title: 'Asus',
                    },
                    {
                        path: '#',
                        title: 'Xiaomi',
                    },
                ],
            },
            {
                path: '#',
                title: 'Phụ kiện - Thiết bị số',
                thumbIcon: thumbIcons.accessory,
                thumbSmall: thumbSmall.accessory,
            },
            {
                path: '#',
                title: 'Máy anh - Quay phim',
                thumbIcon: thumbIcons.camera,
                thumbSmall: thumbSmall.camera,
            },
            {
                path: '#',
                title: 'Điện gia dung - Nhà bếp',
                thumbIcon: thumbIcons.kitchen,
                thumbSmall: thumbSmall.kitchen,
            },
            {
                path: '#',
                title: 'Laptop - Thiết bị IT',
                thumbIcon: thumbIcons.laptop,
                thumbSmall: thumbSmall.laptop,
            },
            {
                path: '#',
                title: 'Máy chơi game - Trò chơi',
                thumbIcon: thumbIcons.game,
                thumbSmall: thumbSmall.game,
            },
            {
                path: '#',
                title: 'Trang sức - Phụ kiện',
                thumbIcon: thumbIcons.jewels,
                thumbSmall: thumbSmall.jewels,
            },
            {
                path: '#',
                title: 'Thời trang - Làm đẹp',
                thumbIcon: thumbIcons.fashion,
                thumbSmall: thumbSmall.fashion,
                iconDesktop: <FontAwesomeIcon icon={faCaretRight} />,
                iconMenuMega: <FontAwesomeIcon icon={faAngleDown} />,

                children: [
                    { path: '#', title: 'Thời trang nữ' },
                    { path: '#', title: 'Thời trang nam' },
                    { path: '#', title: 'Đồng hồ & Trang sức' },
                    { path: '#', title: 'Giày dép nữ' },
                    { path: '#', title: 'Giày dép nam' },
                    { path: '#', title: 'Phụ kiện thời trang' },
                ],
            },
            {
                path: '#',
                title: 'Nhà cửa đời sống',
                thumbIcon: thumbIcons.home,
                thumbSmall: thumbSmall.home,
            },
            {
                path: '#',
                title: 'Sách - Tiểu thuyết',
                thumbIcon: thumbIcons.books,
                thumbSmall: thumbSmall.books,
            },
        ],
    },
    {
        path: '/tin-tuc',
        component: News,
        layout: NewsLayout,
        title: 'Tin mới nhất',
        iconDesktop: <FontAwesomeIcon icon={faCaretDown} />,
        children: [
            {
                path: '#',
                title: 'Tin tức',
                iconDesktop: <FontAwesomeIcon icon={faCaretRight} />,
                children: [
                    {
                        path: '#',
                        title: 'Đời sống',
                    },
                    {
                        path: '#',
                        title: 'Giáo dục',
                    },
                    {
                        path: '#',
                        title: 'Khuyến mãi',
                    },
                    {
                        path: '#',
                        title: 'Sự kiện',
                    },
                ],
            },
        ],
    },
    {
        path: '/cau-hoi-thuong-gap',
        component: Questions,
        title: 'Câu hỏi thường gặp',
    },
    {
        path: '/tuyen-dung',
        component: Recruit,
        title: 'Tuyển dụng',
    },
    {
        path: '/lien-he',
        component: Contact,
        title: 'Liên hệ',
    },
    {
        path: '/dang-nhap',
        component: Login,
        title: 'Đăng nhập',
    },
    {
        path: '/dang-ky',
        component: Register,
        title: 'Đăng ký',
    },
    {
        path: '/gio-hang',
        component: Cart,
        title: 'Giỏ hàng',
    },
    {
        path: '/yeu-thich',
        component: Favorite,
        layout: NewsLayout,
        title: 'Yêu thích',
    },
    {
        path: '/so-sanh',
        component: Compare,
        title: 'So sánh',
    },
    {
        path: '/dien-thoai-may-tinh-bang',
        component: Compare,
        layout: ProductLayout,
    },
];
//Private Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
