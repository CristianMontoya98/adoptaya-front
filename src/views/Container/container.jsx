import { Adopt } from "./components/Adopt/Adopt";
import { ContactForm } from "./components/ContactForm/contactForm";
import { NavBar } from "./components/NavBar/navBar";

function Container() {
    return (
        <div>
            <NavBar />
            <Adopt />
            <ContactForm />
        </div>
    );
}
export {Container}