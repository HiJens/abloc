const Hero = ({ title, text, buttons, img, hasScrollDown, socials, isMain }) => {
    return (
        <section className={`hero hero--${isMain ? 'main' : 'default'}`}>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-context">
                        {
                            title && (
                                <h1 className="hero-title">
                                    {title}
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
                    </div>

                    <div className="hero-image">

                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;