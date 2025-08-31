export type Section = {
  id: string;
  name: string;
  content: Content[];
};

export type Content = {
  id: string;
  name: string;
  description: string;
};

const bacDescription: string =
  "Apprentissage de la technicité des tissus, bases de la couture et du modélisme.";
const DTMSDescription: string =
  "Apprentissage des techniques de l'habillage théâtre, techniques de couture spécifique, histoire approfondie du costume et modélisme historique.";
const titreDevDescription: string =
  "Apprentissage des langage, framework et outils de développement web full stack. Développement de projet full stack en équipe.";
const vendeuseDescription: string =
  "Développement du chiffre d'affaire et KPIS.";
const adjointeDescription: string =
  "Support management, administratif et vente.";
const responsableBoutique: string =
  "Gestion de boutique( administratif et presentation des produits), management(recrutement, formation et gestion d'équipe) et développement du chiffre d'affaire.";
const reactDescription: string =
  "Maitrise de la bibliothèque et création de projet.";
const typescriptDescription: string =
  "Maitrise de typescript et création de projet.";
const expressDescription: string =
  "Maitrise du framework et création de back sur les projets full stack.";
const sqlDescription: string =
  "Modélisation de BDD avec la méthode Merise, création et integration de BDD avec MySql.";
const nodeDescription: string =
  "Utilisation de NodeJs pour le développement des projets React front et React/ExpressJs full stack.";
const gitDescription: string =
  "Maitrise et utilisation des commandes courantes de git pour le développement des projets. Utilisation de Github pour la gestion à distance des projets personnels et en équipe.";
const angularDescription: string =
  "En cour d'apprentissage du framework. Développement d'un projet en simultané pour consolider les connaissances.";
const javaDescription: string =
  "En cour d'apprentissage. Base de la POO en Java vanilla, et consolidation des connaissances avec des exercices.";
const logicielDescription: string =
  "Utilisation des logiciel: VS code (React, ExpressJs, Angular), Postman, MySQL Workbench, IntelliJ (Java).";
const coutureDescription: string =
  "Création et modification de patron, techniques de couture flou, spécificité technique des matières.";
const venteDescription: string =
  "Discours de vente, technique de vente pour augmenter les indicateurs de vente (KPIS).";
const managementDescription: string =
  "Analyse des cv, entretiens d'embauche, gestion des équipes, formation aux techniques de vente.";
const gestionBoutiqueDescription: string =
  "Merch, reception de stock, affichage legal et administratif...";

export const allContents: Content[] = [
  {
    id: "0",
    name: "Bac Professionel Métiers de la mode",
    description: bacDescription,
  },
  {
    id: "1",
    name: "DTMS Habilleur",
    description: DTMSDescription,
  },
  {
    id: "2",
    name: "Titre professionnel Developpeur web",
    description: titreDevDescription,
  },
  {
    id: "3",
    name: "Vendeuse Comptoir des Cotonniers",
    description: vendeuseDescription,
  },
  {
    id: "4",
    name: "Responsable Adjointe Comptoir des Cotonniers",
    description: adjointeDescription,
  },
  {
    id: "5",
    name: "Responsable boutique Jott",
    description: responsableBoutique,
  },
  {
    id: "6",
    name: "React",
    description: reactDescription,
  },
  {
    id: "7",
    name: "Typescript",
    description: typescriptDescription,
  },
  {
    id: "8",
    name: "ExpressJS",
    description: expressDescription,
  },
  {
    id: "9",
    name: "MySQL et BDD",
    description: sqlDescription,
  },
  {
    id: "10",
    name: "NodeJs",
    description: nodeDescription,
  },
  {
    id: "11",
    name: "Git et GitHub",
    description: gitDescription,
  },
  {
    id: "12",
    name: "Angular",
    description: angularDescription,
  },
  {
    id: "13",
    name: "Java",
    description: javaDescription,
  },
  {
    id: "14",
    name: "Logiciels de developpement web",
    description: logicielDescription,
  },
  {
    id: "15",
    name: "Couture, matières et modélisme",
    description: coutureDescription,
  },
  {
    id: "16",
    name: "Vente",
    description: venteDescription,
  },
  {
    id: "17",
    name: "Management",
    description: managementDescription,
  },
  {
    id: "18",
    name: "Gestion boutique",
    description: gestionBoutiqueDescription,
  },
];

export const allCVSection: Section[] = [
  {
    id: "00",
    name: "Etudes",
    content: [allContents[0], allContents[1], allContents[2]],
  },
  {
    id: "01",
    name: "Experiences professionnelles",
    content: [allContents[5], allContents[4], allContents[3]],
  },
  {
    id: "02",
    name: "Savoir-faire",
    content: [
      allContents[18],
      allContents[17],
      allContents[16],
      allContents[15],
      allContents[14],
      allContents[13],
      allContents[12],
      allContents[11],
      allContents[10],
      allContents[9],
      allContents[8],
      allContents[7],
      allContents[6],
    ],
  },
];
