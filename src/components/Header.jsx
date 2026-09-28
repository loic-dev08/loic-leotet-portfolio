import { useState, useEffect} from"react";
import { NavLink, useLocation} from "react-router-dom";
import "./Header.css";
import { FaDownload } from "react-icons/fa";

function Header () {
    const [menuOpen, setmenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setmenuOpen(false);
    }, [location]);

    return (

        <header className="navbar">
            <NavLink to="/" className="logo">
            Loïc Léotet</NavLink>

            <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setmenuOpen(!menuOpen)}
            aria-label="Menu"
            >
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>

            </button>

            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                <NavLink to="/" end onClick={() =>setmenuOpen (false)}>
                    Accueil</NavLink>
                 <NavLink to="/a-propos" end onClick={()=>setmenuOpen(false)}>
                    À propos</NavLink>
                  <NavLink to="/contact" end onClick={()=>setmenuOpen(false)}>
                    Contact</NavLink>
                    <NavLink to="/realisations" end onClick={()=>setmenuOpen(false)}>
                    Réalisations</NavLink>
                    <a href="/images/cv-loic-leotet.pdf" download="CV-Loic-Leotet.pdf" className="nav-cv" onClick={()=>setmenuOpen(false)}>
                    <FaDownload aria-hidden="true" /> Télécharger le CV
                    </a>
                  
            </nav>

        </header>

    );
}

export default Header;