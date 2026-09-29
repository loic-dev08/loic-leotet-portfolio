// Pour ajouter un projet : copie un bloc et modifie-le.
// image : chemin vers une capture placée dans public/projets/ (ex: "/projets/itconnect.png"),
// ou null tant que tu n'en as pas.

export const projets = [
  {
    id: "trouve-ton-artisan",
    titre: "Trouve ton artisan",
    description:
      "Plateforme régionale (Auvergne-Rhône-Alpes) permettant aux particuliers de trouver un artisan et de le contacter via un formulaire.",
    technologies: ["React", "Bootstrap", "Sass", "Node.js", "MySQL"],
    lien: "https://github.com/loic-dev08/trouve-ton-artisan", // à vérifier
    image: "/projets/trouve-ton-artisan.jpg",
  },
  {
    id: "itconnect",
    titre: "ITConnect",
    description:
      "Application full-stack mettant en relation des professionnels de l'informatique et des clients, avec authentification et tableau de bord.",
    technologies: ["React", "Vite", "Node.js", "Express", "MySQL"],
    lien: "https://github.com/loic-dev08/itconnect", // à vérifier
    image: "/projets/itconnect.jpg",
  },
 {
  id: "fitgym",
  titre: "FitGym",
  description:
    "Maquette visuelle d'un site pour une salle de sport, avec pages de réservation de cours et espace membre.",
  technologies: ["HTML", "CSS", "Bootstrap"],
  lien: "https://github.com/loic-dev08/fitgym",
  image: "/projets/fitgym.jpg",
},
  {
    id: "site-revision-dwwm",
    titre: "Site de révision DWWM",
    description:
      "Site interactif de révision avec quiz, lexique, exercices et suivi de progression par compétence.",
    technologies: ["React", "React Router", "Context API"],
    lien: "https://github.com/loic-dev08/r-visions-DWWM",
    image: "/projets/revisions-dwwm.jpg",
  },
];