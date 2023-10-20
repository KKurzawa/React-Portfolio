// Pass into nav as a child component
// In app.jx navigation goes inside the header
// The whole header
import Navigation from "./Navigation";

export default function Header() {

    return (
        <header>
            <h1>Kris Kurzawa</h1>
            <Navigation />
        </header>
    );
}

