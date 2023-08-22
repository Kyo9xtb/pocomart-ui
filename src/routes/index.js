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
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/products',
        component: Products,
    },
    {
        path: '/news',
        component: News,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/questions',
        component: Questions,
    },
    {
        path: '/recruit',
        component: Recruit,
    },
    {
        path: '/login',
        component: Login,
    },
];
//Private Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
