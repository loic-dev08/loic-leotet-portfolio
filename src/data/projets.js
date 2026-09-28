// Pour ajouter un projet : copie un bloc et modifie-le.
// image : chemin vers une capture placée dans public/projets/ (ex: "/projets/itconnect.png"),
// ou null tant que tu n'en as pas.
export const projets = [
  {
    id: "trouve-ton-artisan",
    titre: "Trouve ton artisan",
    description:
      "Plateforme régionale permettant aux particuliers de trouver un artisan et de le contacter via un formulaire.",
    technologies: ["React", "Bootstrap", "Sass", "Node.js", "MySQL"],
    lien: "https://github.com/loic-dev08", // à remplacer par le lien du dépôt
    image: null,
  },
  {
    id: "itconnect",
    titre: "ITConnect",
    description:
      "Application full-stack mettant en relation des professionnels de l'informatique et des clients, avec authentification et tableau de bord.",
    technologies: ["React", "Vite", "Node.js", "Express", "MySQL"],
    lien: "https://github.com/loic-dev08", // à remplacer par le lien du dépôt
    image: null,
  },
  {
    id: "site-revision-dwwm",
    titre: "Site de révision DWWM",
    description:
      "Site interactif de révision avec quiz, lexique, exercices et suivi de progression par compétence.",
    technologies: ["React", "React Router", "Context API"],
    lien: "https://github.com/loic-dev08/r-visions-DWWM",
    image: null,
  },
];