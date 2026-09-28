import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { projets } from "../data/projets";
import "./Footer.css";

// À remplacer par tes projets
const dernieresRealisations = projets.slice(0, 3).map((p) => ({
  titre: p.titre,
to: "/realisations",

}));


 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2>Loïc Léotet</h2>
          <address>
            <p> 8 rue de la Villa Romaine -Saint-Clément, France</p>
            <p>
              <a href="tel:+33627100333">06.27.10.03.33</a>
            </p>
            <p>
              <a href="mailto:mrloic.leotet@outlook.fr">
                mrloic.leotet@outlook.fr
              </a>
            </p>
          </address>
                  <ul className="footer-socials">
            <li>
              <a href="https://github.com/loic-dev08" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lo%C3%AFc-leotet-8549b0237/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2>Navigation</h2>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/realisations">Réalisations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/mentions-legales">Mentions Légales</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h2>Dernières réalisations</h2>
          <ul>
            {dernieresRealisations.map((projet) => (
              <li key={projet.titre}>
                <Link to={projet.to}>{projet.titre}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Loïc Léotet - Tous droits réservés.</p>
        <Link to="/mentions-legales">Mentions légales</Link>
      </div>
    </footer>
  );
}

export default Footer;