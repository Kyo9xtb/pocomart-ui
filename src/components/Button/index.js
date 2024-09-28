//Import library
import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
//Import file
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, onClick, children, className, ...passProps }) {
    let Component = 'button';
    let props = {
        onClick,
        ...passProps,
    };
    if (to) {
        Component = Link;
        props.to = to;
    } else if (href) {
        Component = 'a';
        props.href = href;
    }
    const classes = cx('btn', {
        [className]: className,
    });
    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
}
function BtnGoOnTop() {
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (  
        <React.Fragment>
             {showGoToTop ? (
                <button
                    className={cx('btn-go-to-top')}
                    onClick={() => {
                        document.documentElement.scrollTop = 0;
                    }}
                    title="Lên đầu trang"
                >
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                </button>
            ) : (
                <Fragment />
            )}
        </React.Fragment>
    );
}

export default Button;
export  {BtnGoOnTop};
