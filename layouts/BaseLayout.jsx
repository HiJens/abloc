// Partials
import { Footer, Header } from "../partials";

const BaseLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <Header 
            />

            <main className="main">
                {children}
            </main>

            <Footer
                name="A'Bloc Coaching"
            />
        </div>
    );
};

export default BaseLayout;