import HtmlParser from "react-html-parser";

// Components
import { Button, Arrow } from "../components";

const Formules = ({ title, text, formules }) => {
    return (
        <section className="section section--formules formules" id="formules">
            <div className="container">
                <div className="section-content section-content--withGrid">
                    <div className="section-side section-side--lg">
                        {
                            title && (
                                <h2 className="formules-title" data-aos="fade-right">
                                    {HtmlParser(title)}
                                </h2>
                            )
                        }

                        {
                            text && (
                                <p className="formules-text" data-aos="fade-right" data-aos-delay={100}>
                                    {text}
                                </p>
                            )
                        }
                    </div>

                    <div className="section-side section-side--sm">
                        {
                            formules && formules.map((formule, index) => {
                                return (
                                    <div className="formules-item" key={index} data-aos="fade-down">
                                        <h3 className="formules-item-title">{formule.title}</h3>

                                        <hr />

                                        <div className="formules-item-action">
                                        {
                                            formule.showPrice ? (
                                                <div className="formules-item-price">
                                                    <h3>{formule.price}</h3>
                                                    <span>per maand</span>
                                                </div>
                                            ) : (
                                                <div className="formules-item-price">
                                                    <span>Op aanvraag</span>
                                                </div>
                                            )
                                        }

                                            <Button
                                                color="blue"
                                                icon={Arrow}
                                                title="Contacteer me"
                                                route="#contact"
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Formules;