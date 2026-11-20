import { Link } from "react-router-dom";
import "./Accueil.css";

function Accueil () {
    return (
        <section className="home-hero">
            <div className="home-hero-content">
                <h1>Loïc Léotet</h1>
                <p className="home-hero-subtitle">Développeur Web et Web Mobile orienté front-end en formation</p>
                <Link to ="/a-propos" className="home-hero-btn">
                    En savoir plus
                </Link>
            </div>
        </section> 
    )
}

export default Accueil;