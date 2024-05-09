import { useEffect, useState } from 'react';

function usePagination(data, pageMaxLimit, pageMinLimit) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumberLimit] = useState(pageMaxLimit || 5);
    const [maxPageLimit, setMaxPageLimit] = useState(2);
    const [minPageLimit, setMinPageLimit] = useState(pageMinLimit || 0);
    const [totalPage, setTotalPage] = useState(0);
    useEffect(() => {
        setTotalPage(Math.ceil(data.length / pageNumberLimit));
    }, [data.length]);
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
    }
    const e = pageNumberLimit * currentPage;
    const s = pageNumberLimit * currentPage - pageNumberLimit;
    const pageData = data.slice(s, e);
    // console.log('s , e', s , e);
    const handelPageClick = (pageNumber) => {
        console.log('handelPageClick', pageNumber);
        setCurrentPage(pageNumber);
    };
    const handlePrevClick = () => {
        console.log('handlePrevClick');
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage((prev) => prev - 1);
    };

    const handleNextClick = () => {
        console.log('handleNextClick');

        if (currentPage + 1 > maxPageLimit) {
            setMaxPageLimit(maxPageLimit + pageNumberLimit);
            setMinPageLimit(minPageLimit + pageNumberLimit);
        }
        setCurrentPage((prev) => prev + 1);
    };
    console.log("setMaxPageLimit",setMaxPageLimit);
    return {
        pages,
        currentPage,
        pageData,
        handelPageClick,
        handlePrevClick,
        handleNextClick,
        minPageLimit,
        maxPageLimit,
        totalPage,
    };
}

export default usePagination;
