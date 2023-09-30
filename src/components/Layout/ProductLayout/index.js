import { Fragment } from 'react';
import Header from '../componnents/Header';
import NavbarHeader from '../componnents/Navbar';
import Footer from '../componnents/Footer';

function ProductLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <NavbarHeader />
            <h2>ProductLayout</h2>
            {children}
            <Footer />
        </Fragment>
    );
}

export default ProductLayout;