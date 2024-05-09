//Library import
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleInfo, faGear, faXmark } from '@fortawesome/free-solid-svg-icons';

//File import
import styles from './AlterBox.module.scss';

const cx = classNames.bind(styles);
function realTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let time = `${hours}:${minutes}:${seconds}`;
    return time;
}
function AlterBox({
    success = false,
    info = false,
    warning = false,
    system = false,
    danger = false,
    linght = false,
    dark = false,
    className,
    icon,
    title,
    children,
    onClick,
}) {
    let props = {
        onClick,
    };
    const classes = cx('wapper-alter', 'col-xs-11 col-sm-4', {
        [className]: className,
        system,
        success,
        info,
        warning,
        danger,
        linght,
        dark,
    });
    return (
        <div className={classes} {...props}>
            <button
                className={cx('close')}
                onClick={(e) => {
                    console.log(e.target.parentNode);
                    e.target.parentNode.style.display = 'none';
                }}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className={cx('title-alter')}>
                <div className={cx('title')}>
                    {system && (
                        <Fragment>
                            <FontAwesomeIcon icon={faGear} />
                            <strong> [HỆ THỐNG] </strong>
                        </Fragment>
                    )}
                    {info && (!!icon ? icon : <FontAwesomeIcon icon={faCircleInfo} />)}
                    {success && (!!icon ? icon : <FontAwesomeIcon icon={faCircleCheck} />)}
                    <strong>{title}</strong>
                </div>
                {system && <div className={cx('time')}>{realTime()}</div>}
            </div>
            <div className={cx('content-alter')}>
                <span>{children}</span>
            </div>
        </div>
    );
}

export default AlterBox;