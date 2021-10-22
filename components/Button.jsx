// Next.js
import Link from "next/link";

const Button = ({ title, route, icon, color }) => {
    return (
        <Link href={route}>
            <a className={`button button--${color}${icon ? 'button--hasIcon' : ''}`}>
                {title}
                {icon && icon}
            </a>
        </Link>
    );
};

export default Button;