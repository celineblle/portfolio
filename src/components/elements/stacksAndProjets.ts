export type Stack = {
  id: string;
  name: string;
  projects: Project[];
};

export type Project = {
  id: string;
  name: string;
  description: string[];
  link: string;
};

const macBuIntro: string =
  "Projet de reprise de code et des techniques. Vaste mais non complexe.";
const macBuDescription =
  "MacBu est un jeu de simulation de cuisine de fast food. Le but ? Recevez des commandes, achetez vos ingredients, preparer les produits bruts, composez des burger et servez les commandes aux clients. Attention aux erreurs ! ";
const macBuCommentaire: string = "Premiere version du projet MacBu.";

const macBu2Intro: string = "Refactorisation du projet macbu.";
const macBu2Description: string =
  "Reprise du projet MacBu avec l'intention d'avoir un code propre et plus facilement maintenable. La construction de MacBu 2 s'est faite avec les problématiques d'extensibilités soulevées au cours du développement de MacBu 1.";
const macBu2Commentaire: string =
  'Lecture du livre "Coder proprement" de Robert C. Martin pour intégrer des bonnes pratiques de développement.';

const portfolioIntro: string = "Presentation en situation de mes competences.";
const portforlioDescription: string =
  'Il s\'agit ici de vous presenter mes compétences de développement web en "situation".';
const portfolioCommentaire: string = "";

const moreAieIntro: string =
  "Site de micromessage partageant les meilleurs posts de skyblog.";
const moreAieDescription: string =
  "Attention à vos yeux et votre bescherelle, ici tout est choisi pour une immersion totale dans l'ancien monde de Skyblog. Étendard de l'internet des années 2000, est pour les adolescents de cette époque, un premier pas dans l'expression personnalisée de soi sur internet. On y trouve le langage sms, des sujets divers et du grotesque";
const moreAieCommentaire: string = "Projet full stack React et ExpressJs.";

const shortIntro: string =
  "Site de partage de video autour du développement web.";
const shortDescription: string =
  "Inspiré de Netflix, Youtube et Disney+, Short Digital propose un ensemble de videos autour du développement web. Vous y trouverez de quoi apprendre un nouveau language ou comment ce petit truc de css qui fait toute la difference.";
const shortCommentaire: string =
  "Projet de fin de formation en React et ExpressJs. Réalisé en équipe de 3 développeurs.";

const kanbanIntro: string = "Kandan en ligne.";
const kanbanDescription: string =
  "Projet simple de kanban pour appliquer en situation les notions durant l'apprentissage d'Angular.";
const kanbanCommentaire: string = "Projet fil rouge front Angular.";

const javaTrainingIntro: string = "Exercices sur les notions de base en java";
const javaTrainingDescription: string =
  "Notions de base en java : String, types primitifs, Object, Array, Variable";
const javaTrainingCommentaire: string = "Apprentissage actif de java";

const javaExIntro: string = "Exercices en java";
const javaExDescription: string =
  "Notion un peu plus avancé de java: List, Map, Stream, Generics, Set";
const javaExCommentaire: string = "Apprentissage actif de java";

export const allProjects: Project[] = [
  {
    id: "00",
    name: "MacBu",
    description: [macBuIntro, macBuDescription, macBuCommentaire],
    link: "https://github.com/celineblle/macbu",
  },
  {
    id: "01",
    name: "MacBu 2",
    description: [macBu2Intro, macBu2Description, macBu2Commentaire],
    link: "https://github.com/celineblle/macbu_2",
  },
  {
    id: "02",
    name: "Portfolio",
    description: [portfolioIntro, portforlioDescription, portfolioCommentaire],
    link: "https://github.com/celineblle/portfolio",
  },
  {
    id: "03",
    name: "more AÏE in the sky",
    description: [moreAieIntro, moreAieDescription, moreAieCommentaire],
    link: "https://github.com/celineblle/moreAIEinTheSky",
  },
  {
    id: "04",
    name: "Short Digital",
    description: [shortIntro, shortDescription, shortCommentaire],
    link: "https://github.com/DevChris38/P3_forked",
  },
  {
    id: "05",
    name: "Kanban",
    description: [kanbanIntro, kanbanDescription, kanbanCommentaire],
    link: "https://github.com/celineblle/kanban",
  },
  {
    id: "06",
    name: "exercices-java-1-java-training",
    description: [
      javaTrainingIntro,
      javaTrainingDescription,
      javaTrainingCommentaire,
    ],
    link: "https://github.com/celineblle/exercices-java-1-java-training",
  },
  {
    id: "07",
    name: "java_execices",
    description: [javaExIntro, javaExDescription, javaExCommentaire],
    link: "https://github.com/celineblle/java_exercices",
  },
];

export const allStacks: Stack[] = [
  {
    id: "0",
    name: "React front",
    projects: [allProjects[0], allProjects[1], allProjects[2]],
  },
  {
    id: "1",
    name: "React full stack",
    projects: [allProjects[3], allProjects[4]],
  },
  {
    id: "2",
    name: "Angular",
    projects: [allProjects[5]],
  },
  {
    id: "3",
    name: "Java",
    projects: [allProjects[7], allProjects[6]],
  },
];
