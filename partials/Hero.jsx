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
                                <h1 className="hero-title" data-aos="fade-right">
                                    {HtmlParser(title)}
                                </h1>
                            )
                        }

                        {
                            text && (
                                <p className="hero-text" data-aos="fade-right" data-aos-delay="200">
                                    {text}
                                </p>
                            )
                        }

                        <div className="hero-buttons" data-aos="fade-right" data-aos-delay="400">
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
                                <img src={img} alt="hero" data-aos="fade-up" />
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
                                            <a className="hero-socials-item" target="_blank" data-aos="fade-up" data-aos-delay={100 * index}>
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