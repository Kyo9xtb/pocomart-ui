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
    },
    {
        path: '/news',
        component: News,
        title: 'Tin mới nhất',
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
