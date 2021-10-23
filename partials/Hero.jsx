import HtmlParser from "react-html-parser";

// Next.js
import Link from "next/link";

// Components
import { Button } from "../components";

const Hero = ({ title, text, buttons, img, hasScrollDown, socials, isMain }) => {
    return (
        <section className={`hero hero--${isMain ? 'main' : 'default'}`}>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-context">
                        {
                            title && (
                                <h1 className="hero-title">
                                    {HtmlParser(title)}
                                </h1>
                            )
                        }

                        {
                            text && (
                                <p className="hero-text">
                                    {text}
                                </p>
                            )
                        }

                        <div className="hero-buttons">
                            {
                                buttons && buttons.map((btn, index) => {
                                    return (
                                        <Button
                                            key={index}
                                            title={btn.title}
                                            route={btn.href} 
                                            color={btn.color}
                                            icon={btn.icon}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="hero-image">
                        {
                            img && (
                                <img src={img} alt="hero" />
                            )
                        }
                    </div>

                    {
                        hasScrollDown && (
                            <div className="hero-scroll">
                                <span className="hero-scroll-dot"></span>
                            </div>
                        )
                    }
                </div>

                {
                    socials && (
                        <div className="hero-socials">
                            {
                                socials.map((social, index) => {
                                    return (
                                        <Link key={index} href={social.href} passHref>
                                            <a className="hero-socials-item" target="_blank">
                                                {social.icon()}
                                            </a>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </section>
    )
};

export default Hero;