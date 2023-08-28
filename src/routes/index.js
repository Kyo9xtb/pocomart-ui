//Layout
// import { HeaderOnly } from '~/components/Layout';
//Pages
import Home from '~/pages/Home';
import About from '~/pages/About';
import Contact from '~/pages/Contact';
import News from '~/pages/News';
import Products from '~/pages/Products';
import Questions from '~/pages/Questions';
import Recruit from '~/pages/Recruit';
import Login from '~/pages/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { thumbIcons, thumbSmall } from '~/assets/images';

//Public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
        title: 'Trang chủ',
    },
    {
        path: '/about',
        component: About,
        title: 'Giới thiệu',
    },
    {
        path: '/products',
        component: Products,
        title: 'Sản phẩm',
        iconDesktop: <FontAwesomeIcon icon={faCaretDown} />,
        children: [
            {
                path: '#',
                title: 'Điện thoại - Máy tính bảng',
                thumbIcon: thumbIcons.phone,
                thumnSmall: thumbSmall.phone,
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
                thumnSmall: thumbSmall.accessory,
            },
            {
                path: '#',
                title: 'Máy anh - Quay phim',
                thumbIcon: thumbIcons.camera,
                thumnSmall: thumbSmall.camera,
            },
            {
                path: '#',
                title: 'Điện gia dung - Nhà bếp',
                thumbIcon: thumbIcons.kitchen,
                thumnSmall: thumbSmall.kitchen,
            },
            {
                path: '#',
                title: 'Laptop - Thiết bị IT',
                thumbIcon: thumbIcons.laptop,
                thumnSmall: thumbSmall.laptop,
            },
            {
                path: '#',
                title: 'Máy chơi game - Trò chơi',
                thumbIcon: thumbIcons.game,
                thumnSmall: thumbSmall.game,
            },
            {
                path: '#',
                title: 'Trang sức - Phụ kiện',
                thumbIcon: thumbIcons.jewels,
                thumnSmall: thumbSmall.jewels,
            },
            {
                path: '#',
                title: 'Thời trang - Làm đẹp',
                thumbIcon: thumbIcons.fashion,
                thumnSmall: thumbSmall.fashion,
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
                thumnSmall: thumbSmall.home,
            },
            {
                path: '#',
                title: 'Sách - Tiểu thuyết',
                thumbIcon: thumbIcons.books,
                thumnSmall: thumbSmall.books,
            },
        ],
    },
    {
        path: '/news',
        component: News,
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
        path: '/questions',
        component: Questions,
        title: 'Câu hỏi thường gặp',
    },
    {
        path: '/contact',
        component: Contact,
        title: 'Liên hệ',
    },
    {
        path: '/recruit',
        component: Recruit,
        title: 'Tuyển dụng',
    },
    {
        path: '/login',
        component: Login,
        title: 'Đăng nhập',
    },
];
//Private Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
