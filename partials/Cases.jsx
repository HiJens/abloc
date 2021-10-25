import HtmlParser from "react-html-parser";

// React
import { useState } from "react";

// Next.js
import Image from "next/image";

const Cases = ({ title, references }) => {
    const [ active, setActive ] = useState(0);

    return (
        <section className="section section--cases cases" id="referenties">
            <div className="container">
                <div className="section-content">
                    <h2 className="cases-title" data-aos="fade-right">
                        {HtmlParser(title)}
                    </h2>
                </div>
                <div className="section-content section-content--withGrid">
                    <div className="section-side section-side--lg">
                        <div className="cases-wrapper">
                            {
                                references && references.map((ref, index) => {
                                    return (
                                        <div className={`cases-persona${index === active ? ' active' : ''}`} data-aos="fade-right" key={index} onClick={() => setActive(index)}>
                                            <div className="cases-persona-img">
                                                <Image
                                                    src={ref.avatar}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>

                                            <div className="cases-persona-bio">
                                                <h5>{ref.name}</h5>
                                                <span>{ref.function}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="section-side section-side--sm">
                        {
                            references && references.map((ref, index) => {
                                return active === index ? (
                                    <div className="cases-item" data-aos="fade-left" key={index}>
                                        <h3 className="cases-item-title">
                                            "{ref.title}"
                                        </h3>

                                        <p className="cases-item-text">
                                            {ref.text}
                                        </p>
                                    </div>
                                ) : ""
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Cases;