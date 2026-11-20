import { Link } from "react-router-dom";
import photo from "../assets/images/profil-leotet.jpg";
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

function APropos() {
  return (
    <section className="container about">
      <h1>À propos</h1>

      <div className="about-intro">
        <img src={photo} alt="Portrait de Loïc Léotet" className="about-photo" />

        <div className="about-text">
          <h2>Bonjour, je suis Loïc Léotet</h2>
          <p>
           Développeur web et web mobile en formation (titre professionnel niveau 5), orienté front-end, après quatre ans dans le support informatique.
           Je conçois des interfaces modernes et centrées sur l’utilisateur, avec une approche rigoureuse du code et le réflexe de la sécurité.
          </p>
          <p>
            
          
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

      <h2 className="about-title">Ce que je recherche</h2>
      <div className="about-goal">
        <p>
          [Ce que tu vises concrètement : une alternance, un premier poste en CDI, un stage de fin
          de formation... Précise éventuellement le type d'entreprise ou de projet qui
          t'intéresse.]
        </p>
        <p>Le détail de ma formation et de mes expériences est disponible dans mon CV.</p>
        <a
          href="/images/cv-loic-leotet.pdf"
          download="CV-Loic-Leotet.pdf"
          className="about-btn about-btn-outline"
        >
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}

export default APropos;