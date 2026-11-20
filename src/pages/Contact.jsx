import { useState } from "react";
import "./Contact.css";
import Modale from "./Modale";

// puis dans le JSX, à l'endroit voulu :
<Modale />

// Voir plus bas comment obtenir ces deux valeurs
const FORM_ENDPOINT = "https://formspree.io/f/VOTRE_ID";
const MAP_URL =
  "https://www.openstreetmap.org/export/embed?bbox=3.2917490601539616%2C48.213685497441546%2C3.2952895760536194%2C48.215215404882564&amp;layer=mapnik";

const initialForm = { nom: "", email: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Envoi impossible");

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="container contact">
      <h1>Contactez-moi</h1>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nom
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="6"
            />
          </label>

          <button type="submit" className="contact-btn" disabled={status === "sending"}>
            {status === "sending" ? "Envoi en cours..." : "Envoyer"}
          </button>

          <p className="contact-status" role="status" aria-live="polite">
            {status === "success" && (
              <span className="success">Merci, votre message a bien été envoyé.</span>
            )}
            {status === "error" && (
              <span className="error">
                Une erreur est survenue. Réessayez ou écrivez-moi directement par email.
              </span>
            )}
          </p>
        </form>

        <div className="contact-infos">
          <h2>Coordonnées</h2>
          <address>
            <p> 8 Rue de la Villa Romaine-Saint-Clément, France</p>
            <p>
              Téléphone : <a href="tel:+33627100333">06.27.10.03.33</a>
            </p>
            <p>
              Email : <a href="mailto:mrloic.leotet@outlook.fr">mrloic.leotet@outlook.fr</a>
            </p>
          </address>

          <iframe
            title="Carte de ma localisation"
            src={MAP_URL}
            className="contact-map"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;