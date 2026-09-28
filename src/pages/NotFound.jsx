import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound () {

    return (
        <section className="not-found">
            <h1>404</h1>
            <p>Oups, cette page n'existe pas</p>
            <Link to="/" className="not-found-link">
            Retour à l'accueil
            </Link>
        </section>
    );
}

export default NotFound;