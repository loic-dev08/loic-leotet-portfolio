import { Link } from "react-router-dom";
import photo from "../assets/images/loic-leotet.jpg";
import "./APropos.css";

const competences = [
  {
    categorie: "Front-end",
    items: ["React", "Vite", "React Router", "JavaScript (ES6+)", "HTML5 / CSS3", "Sass", "Bootstrap", "Responsive design"],
  },
  {
    categorie: "Back-end et données",
    items: ["Node.js", "Express", "Sequelize", "MySQL", "API REST", "Authentification JWT"],
  },
  {
    categorie: "Outils",
    items: ["Git / GitHub", "Figma", "VS Code"],
  },
];

// À compléter avec ton vrai parcours
const parcours = [
  {
    periode: "En cours",
    titre: "Titre professionnel DWWM",
    detail: "Développeur Web et Web Mobile : projets front-end et full-stack.",
  },
  {
    periode: "[Année]",
    titre: "[Formation ou expérience]",
    detail: "[Description courte de ce que tu y as fait ou appris.]",
  },
];

function APropos() {
  return (
    <section className="container about">
      <h1>À propos</h1>

      <div className="about-intro">
        <img src={photo} alt="Portrait de Loïc Léotet" className="about-photo" />

        <div className="about-text">
          <h2>Bonjour, je suis Loïc Léotet</h2>
          <p>
            Développeur web orienté front-end, je conçois des interfaces claires, responsives et
            accessibles avec React. Je suis également à l'aise côté serveur, avec Node.js, Express
            et MySQL, ce qui me permet de construire une application de bout en bout.
          </p>
          <p>
            Je prépare le titre professionnel de Développeur Web et Web Mobile. J'aime les projets
            concrets, le code propre et les interfaces qui se comprennent du premier coup d'œil.
          </p>

          <div className="about-actions">
            <Link to="/realisations" className="about-btn">Voir mes réalisations</Link>
            <Link to="/contact" className="about-btn about-btn-outline">Me contacter</Link>
          </div>
        </div>
      </div>

      <h2 className="about-title">Compétences</h2>
      <div className="about-skills">
        {competences.map((groupe) => (
          <article key={groupe.categorie} className="about-card">
            <h3>{groupe.categorie}</h3>
            <ul className="about-tags">
              {groupe.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h2 className="about-title">Parcours</h2>
      <ol className="about-timeline">
        {parcours.map((etape) => (
          <li key={etape.titre}>
            <span className="about-period">{etape.periode}</span>
            <h3>{etape.titre}</h3>
            <p>{etape.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default APropos;