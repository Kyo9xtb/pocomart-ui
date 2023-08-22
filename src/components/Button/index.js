//Import library
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

export default Button;
