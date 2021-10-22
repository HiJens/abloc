// Next.js
import Link from "next/link";

const NavLink = ({title, route}) => {
    return (
        <Link href={route}>
            <a className="link link--nav">
                {title}
            </a>
        </Link>
    );
};

export default NavLink;