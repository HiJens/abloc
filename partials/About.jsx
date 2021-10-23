import HtmlParser from "react-html-parser";

// Next.js
import Image from "next/image";

// Components
import { Button } from "../components";

const About = ({ img, title, content }) => {
    return (
        <section className="section section--about about" id="over">
            <div className="container">
                <h2 className="about-title section-content">
                    {HtmlParser(title)}
                </h2>
                <div className="about-image">
                    <Image 
                        src={img}
                        objectFit="cover"
                        layout="fill"
                    />
                </div>

                <div className="about-content">
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