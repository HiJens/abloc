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
                        <h2 className="contact-title" data-aos="fade-right">
                            {HtmlParser(title)}
                        </h2>

                        <div className="contact-data" data-aos="fade-right" data-aos-delay={100}>
                            <span>Bel mij op via</span>
                            <a href="tel:+32474014955">+32474014955</a>
                        </div>

                        <div className="contact-data" data-aos="fade-right" data-aos-delay={200}>
                            <span>Of mail mij via</span>
                            <a href="mailto:ad24coaching@gmail ">ad24coaching@gmail</a>
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

                <div className="contact-img" data-aos="fade-up">
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