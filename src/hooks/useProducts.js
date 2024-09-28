import axios from 'axios';
import { useEffect, useState } from 'react';

function useProducts(url) {
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        axios
            // .get(`https://65d952e2c96fbb24c1bce81e.mockapi.io/${url}`)
            .get(`http://localhost:3000/product`)
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
        item.image_url = `http://127.0.0.1:3000/images/${item.MainImage}`;
        return item;
    });
    return listProducts;
}

export default useProducts;
