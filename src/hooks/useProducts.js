import axios from 'axios';
import { useEffect, useState } from 'react';

function useProducts(url) {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        axios
            .get(`https://65d952e2c96fbb24c1bce81e.mockapi.io/${url}`)
            .then(function (response) {
                // xử trí khi thành công
                setListProducts(response.data);
            })
            .catch(function (error) {
                // xử trí khi bị lỗi
                console.log(error);
            })
            .finally(function () {
                // luôn luôn được thực thi
            });
    }, [url]);
    // eslint-disable-next-line array-callback-return
    listProducts.map((item) => {
        const listImage = [
            'https://hanoicomputercdn.com/media/product/250_71806_nj069w.jpg',
            'https://hanoicomputercdn.com/media/product/250_78994_laptop_acer_aspire_5_a515_58m_56yx__nx_kq8sv_005_.jpg',
            'https://hanoicomputercdn.com/media/product/250_70724_laptop_hp_pavilion_14_7.png',
            'https://hanoicomputercdn.com/media/product/250_76237_laptop_msi_modern_15__b12mo_628vn____5_.jpg',
            'https://hanoicomputercdn.com/media/product/250_77188_laptop_dell_vostro_15_3530__v5i5267w1__2_.jpg',
            'https://hanoicomputercdn.com/media/product/250_71771_laptop_lg_gram_16z90r_5.png',
            'https://hanoicomputercdn.com/media/product/250_71484_tp3402va_lz118w.png',
            'https://hanoicomputercdn.com/media/product/250_67823_hacom_acer_nitro_5_an515_58_14.jpeg',
            'https://hanoicomputercdn.com/media/product/250_80525_laptop_msi_gaming_ge68_hx_raider__14vig_496vn___4_.jpg',
            'https://hanoicomputercdn.com/media/product/250_56766_conceptd_3_ezel__15_.png',
        ];
        // item.sale = Math.floor(Math.random() * 100);
        item.image_url = listImage[Math.floor(Math.random() * 10)];
        // item.image_url = item.image
        item.price = Math.floor(item.market_price * (1 - item.sale / 100));
        return item;
    });
    return listProducts;
}

export default useProducts;
