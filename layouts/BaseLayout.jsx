// Partials
import { Header } from "../partials";

const BaseLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <Header 
            />

            <main className="main">
                {children}
            </main>
        </div>
    );
};

export default BaseLayout;