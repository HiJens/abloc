import HtmlParser from "react-html-parser";

// Next.js
import Image from "next/image";

// Components
import { Button } from "../components";

const About = ({ img, title, content }) => {
    const shimmer = (w, h) => `
        <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="${w}" height="${h}" fill="#333" />
            <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
            <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
        </svg>`;

    const toBase64 = (str) => typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

    return (
        <section className="section section--about about" id="over">
            <div className="container">
                <h2 className="about-title section-content" data-aos="fade-right">
                    {HtmlParser(title)}
                </h2>
                <div className="about-image" data-aos="fade-down">
                    <Image 
                        src={img}
                        objectFit="cover"
                        layout="fill"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    />
                </div>

                <div className="about-content" data-aos="fade-up">
                    {
                        content.title && (
                            <h3 className="about-content-title">
                                {content.title}
                            </h3>
                        )
                    }

                    {
                        content.text && (
                            <p className="about-content-text">
                                {content.text}
                            </p>
                        )
                    }

                    {
                        content.button && (
                            <Button 
                                title={content.button.title}
                                route={content.button.href}
                                icon={content.button.icon}
                                color="blue"
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default About;