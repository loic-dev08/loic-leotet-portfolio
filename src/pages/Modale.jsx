import { useState, useEffect } from "react";
import "./Modale.css";

function Modale() {
  const [ouvert, setOuvert] = useState(false);

  // Fermer avec la touche Échap
  useEffect(() => {
    if (!ouvert) return;
    const fermer = (e) => e.key === "Escape" && setOuvert(false);
    window.addEventListener("keydown", fermer);
    return () => window.removeEventListener("keydown", fermer);
  }, [ouvert]);

  return (
    <>
      <button className="modale-btn" onClick={() => setOuvert(true)}>
        Voir mon GitHub
      </button>

      {ouvert && (
        <div className="modale-overlay" onClick={() => setOuvert(false)}>
          <div
            className="modale-contenu"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modale-fermer"
              onClick={() => setOuvert(false)}
              aria-label="Fermer"
            >
              ×
            </button>
            <h2>Mon GitHub</h2>
            <p>Retrouvez mes projets et mon code sur GitHub :</p>
            <a
              href="https://github.com/loic-dev08"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/loic-dev08
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Modale;