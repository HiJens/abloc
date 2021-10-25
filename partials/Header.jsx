// Next.js
import Image from "next/image";
import Link from "next/link";

// React
import { useState, useEffect } from "react";

// Components
import { Button, NavLink } from "../components";

// Routes
import * as Routes from "../routes";

const Header = () => {
    // States
    const [ menu, setMenu ] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);

    const NavItems = [
        {
            title: "Over A'Bloc",
            href: Routes.HOME_ABOUT,
            button: false,
        },
        {
            title: "Specialiteiten",
            href: Routes.HOME_SERVICES,
            button: false,
        },
        {
            title: "Formules",
            href: Routes.HOME_PACKAGES,
            button: false,
        },
        {
            title: "Contact",
            href: Routes.HOME_CONTACT,
            button: true,
        },
    ];

    const showMenu = () => {
        setMenu(!menu);
    };


    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scroll = window.top.scrollY; 
            setScrolled(scroll >= 75);
        });
    }, []);

    return (
        <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
            <div className="container">
                <div className="header-nav">
                    <Link href={Routes.HOME}>
                        <a className="header-logo">
                            <Image
                                src="/assets/logos/logo.png"
                                width={70}
                                height={70}
                            />
                        </a>
                    </Link>

                    {
                        NavItems.map((item, index) => {
                            return item.button ? (
                                <Button
                                    key={index}
                                    title={item.title}
                                    route={item.href}
                                    color={"blue"}
                                />
                            ) : (
                                <NavLink
                                    key={index}
                                    title={item.title}
                                    route={item.href}
                                />
                            )
                        })
                    }
                </div>

                <div className={`header-toggle${menu ? ' is-active' : ''}`} onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className={`header-menu${menu ? ' is-active' : ''}`}>
                <div className="header-menu-content container">
                    {
                        NavItems.map((item, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    title={item.title}
                                    route={item.href}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;