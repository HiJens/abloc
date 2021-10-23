// Next.js
import Link from "next/link";

// Components
import { JD } from "../components";

const Footer = ({ name }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-copyright">
                        © {name}, {new Date().getFullYear()}
                    </div>

                    <div className="footer-links">
                        <Link href="/privacy-policy">
                            <a>Privacy policy</a>
                        </Link>

                        <Link href="/cookie-policy">
                            <a>Cookie policy</a>
                        </Link>

                        <Link href="/disclaimer">
                            <a>Disclaimer</a>
                        </Link>
                    </div>

                    <div className="footer-creator">
                        Produced by

                        <Link href="https://www.jensderyckere.be">
                            <a target="_blank">
                                {JD()}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;