//Library import
// import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
//File import
import styles from './Pagination.module.scss';
import { Link } from 'react-router-dom';
import usePagination from '~/hooks/usePagination';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Pagination({ data, pageMaxLimit, pageMinLimit, onResultData }) {
    const {
        pages,
        pageData,
        currentPage,
        handelPageClick,
        handlePrevClick,
        handleNextClick,
        maxPageLimit,
        minPageLimit,
        totalPage,
    } = usePagination(data, pageMaxLimit, pageMinLimit);
    const pageNumbers = pages.map((page) => {
        if (page <= maxPageLimit && page > minPageLimit) {
            console.log('page load', page);
            return (
                <li
                    key={page}
                    className={currentPage === page ? cx('page-item', 'active') : cx('page-item')}
                    onClick={() => {
                        handelPageClick(page);
                    }}
                >
                    <Link className={cx('page-link')}>{page}</Link>
                </li>
            );
        } else {
            console.log('page not load', page);
            return null;
        }
    });
    let pageIncrementEllipses = null;
    if (totalPage > maxPageLimit) {
        pageIncrementEllipses = (
            <li className={cx('page-item', 'a')} onClick={handleNextClick}>
                <Link className={cx('page-link')}>&hellip;</Link>
            </li>
        );
    }
    let pageDecrementEllipses = null;
    if (minPageLimit >= 1) {
        pageDecrementEllipses = (
            <li className={cx('page-item', 'b')} onClick={handlePrevClick}>
                <Link className={cx('page-link')}>&hellip;</Link>
            </li>
        );
    }
    useEffect(() => {
        onResultData(pageData);
    }, [currentPage]);
    console.log(maxPageLimit, minPageLimit);
    return (
        <nav aria-label="Page navigation example" className={cx('nav-pagi')}>
            <ul className={cx('pagination justify-content-end', 'pagination')}>
                <li
                    className={currentPage === pages[0] ? cx('page-item', 'disabled') : cx('page-item')}
                    onClick={() => {
                        if (currentPage !== pages[0]) {
                            handlePrevClick();
                        }
                    }}
                >
                    <Link to="#" className={cx('page-link')}>
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </Link>
                </li>
                {pageDecrementEllipses}
                {pageNumbers}
                {pageIncrementEllipses}
                <li
                    className={currentPage === pages[pages.length - 1] ? cx('page-item', 'disabled') : cx('page-item')}
                    onClick={() => {
                        if (currentPage !== pages[pages.length - 1]) {
                            handleNextClick();
                        }
                    }}
                >
                    <Link className={cx('page-link')}>
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
