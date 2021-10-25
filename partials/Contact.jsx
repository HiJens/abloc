import HtmlParser from "react-html-parser";

// Next.js
import Image from "next/image";
import Link from "next/link";

const Contact = ({ title, socials }) => {
    return (
        <section className="section section--contact contact" id="contact">
            <div className="container">
                <div className="section-content section-content--withBg contact-content">
                    <div className="contact-info">
                        <h2 className="contact-title">
                            {HtmlParser(title)}
                        </h2>

                        <div className="contact-data">
                            <span>Bel mij op via</span>
                            <a href="tel:0477274789">0477 27 36 97</a>
                        </div>

                        <div className="contact-data">
                            <span>Of mail mij via</span>
                            <a href="mailto:test@gmail.com">info@gmail.com</a>
                        </div>

                        {
                            socials && (
                                <div className="contact-socials">
                                    {
                                        socials.map((social, index) => {
                                            return (
                                                <Link key={index} href={social.href} passHref>
                                                    <a className="contact-socials-item" target="_blank" data-aos="fade-up" data-aos-delay={100 * index}>
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
                </div>

                <div className="contact-img">
                    <Image
                        src="/assets/images/contact.jpeg"
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
            </div>
        </section>
    )
};

export default Contact;