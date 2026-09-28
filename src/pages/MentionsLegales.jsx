import "./MentionsLegales.css";

function MentionsLegales() {
  return (
    <section className="container legal">
      <h1>Mentions légales</h1>

      <div className="legal-accordion">
        <details name="mentions" open>
          <summary>Éditeur du site</summary>
          <div className="legal-content">
            <p>Loïc Léotet, développeur Frontend.</p>
            <p>Responsable de la publication : Loïc Léotet.</p>
            <p>
              Contact : <a href="mailto:mrloic.leotet@outlook.fr">mrloic.leotet@outlook.fr</a>
            </p>
          </div>
        </details>

        <details name="mentions">
          <summary>Hébergeur</summary>
          <div className="legal-content">
            <p>[Nom de l'hébergeur]</p>
            <p>[Adresse postale de l'hébergeur]</p>
            <p>[Site web de l'hébergeur]</p>
          </div>
        </details>

        <details name="mentions">
          <summary>Données personnelles</summary>
          <div className="legal-content">
            <p>
              Le formulaire de contact collecte votre nom, votre adresse email et votre message,
              uniquement pour répondre à votre demande. Ces données ne sont ni vendues ni utilisées
              à d'autres fins, et sont conservées le temps nécessaire au traitement de votre demande.
            </p>
            <p>
              L'envoi des messages est assuré par le service Formspree, qui traite ces données pour
              le compte de l'éditeur du site.
            </p>
            <p>
              Ce site n'utilise ni cookies de suivi ni outil de mesure d'audience.
            </p>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de
              suppression de vos données. Pour l'exercer, écrivez à{" "}
              <a href="mailto:mrloic.leotet@outlook.fr">mrloic.leotet@outlook.fr</a>. Vous pouvez
              également introduire une réclamation auprès de la CNIL (cnil.fr).
            </p>
          </div>
        </details>

        <details name="mentions">
          <summary>Propriété intellectuelle</summary>
          <div className="legal-content">
            <p>
              Les textes, le code et les éléments graphiques de ce site sont la propriété de Loïc
              Léotet, sauf mention contraire. Toute reproduction sans autorisation est interdite.
            </p>
          </div>
        </details>

        <details name="mentions">
          <summary>Crédits</summary>
          <div className="legal-content">
            <p>Site conçu et développé par Loïc Léotet avec React et Vite.</p>
            <p>Icônes : React Icons. Cartographie : © contributeurs OpenStreetMap.</p>
          </div>
        </details>
      </div>
    </section>
  );
}

export default MentionsLegales;