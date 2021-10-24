import HtmlParser from "react-html-parser";

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

const Services = ({ title, text, services }) => {
    return (
        <section className="section section--services services" id="diensten">
            <div className="container">
                <div className="section-content section-content--withBg">
                    {
                        title && (
                            <h2 className="services-title" data-aos="fade-right">{HtmlParser(title)}</h2>
                        )
                    }

                    {
                        text && (
                            <p className="services-text" data-aos="fade-right" data-aos-delay={200}>{text}</p>
                        )
                    }

                    <div className="services-wrapper">
                        <Swiper
                            modules={[Pagination]}
                            pagination={{clickable: true}}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                920: {
                                    slidesPerView: 4,
                                    spaceBetween: 10
                                }
                            }}
                        >
                            {
                                services && services.map((service, index) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="services-item-wrapper" data-aos="fade-up" data-aos-delay={100 * index} key={index}>
                                                <div className="services-item">
                                                    {service.icon()}

                                                    <h3 className="services-item-title">
                                                        {service.title}
                                                    </h3>

                                                    <p className="services-item-text">
                                                        {service.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Services;