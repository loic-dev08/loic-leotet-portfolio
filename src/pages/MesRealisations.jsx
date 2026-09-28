import { projets } from "../data/projets";
import "./MesRealisations.css";

function MesRealisations() {
  return (
    <section className="container realisations">
      <h1>Mes réalisations</h1>

      <div className="realisations-grid">
        {projets.map((projet) => (
          <article key={projet.id} className="projet-card">
            {projet.image ? (
              <img
                src={projet.image}
                alt={`Aperçu du projet ${projet.titre}`}
                className="projet-image"
                loading="lazy"
              />
            ) : (
              <div className="projet-image projet-image-placeholder" aria-hidden="true">
                <span>{projet.titre.charAt(0)}</span>
              </div>
            )}

            <div className="projet-body">
              <h2>{projet.titre}</h2>
              <p>{projet.description}</p>

              <ul className="projet-tags">
                {projet.technologies.map((techno) => (
                  <li key={techno}>{techno}</li>
                ))}
              </ul>

              <a href={projet.lien} className="projet-btn" target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MesRealisations;