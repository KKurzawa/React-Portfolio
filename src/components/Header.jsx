// Pass into nav as a child component
// In app.jx navigation goes inside the header
// The whole header
import Navigation from "./Navigation";

export default function Header() {

    return (
        <header className="header">
            <div className="header-text">
                <h1 className="header-name">Kris Kurzawa</h1>
                <h2 className="header-title">Full-Stack Developer</h2>
            </div>

            <Navigation />
        </header>
    );
}

