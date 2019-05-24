const walking = require('./assets/img/Walking.png');
const monstre = require('./assets/img/méchant.png');
const monstreMort = require('./assets/img/die.png');
const eat = require('./assets/img/eat.png');
const eating = require('./assets/img/eating.png');
const dead = require('./assets/img/cadavre.png');
const think = require('./assets/img/think.png');
const devil = require('./assets/img/devil.png');
const man = require('./assets/img/man.png');

export default{
"1": {
    "img": walking,
    "img2": monstre,
    "title": "Vous vous êtes mis en route vers votre destinée, le chemin sera périlleux vous devrez faire les bons choix pour sauver la démoncratie capitaliste !",
    "BTNA":"Sortir votre épée démocratique",
    "BTNB": "Je suis venu en paix l'ami...",
    "toOne":"2",
    "toTwo": "/lose"
  },
  "2": {
    "img": monstreMort,
    "title": "Vous avez tué le mutant! Continuons notre quête...",
    "BTNA":"Prélever un trophé du mutant",
    "BTNB": "Poursuivre notre chemin",
    "toOne":"4",
    "toTwo": "3"
  },
  "4": {
    "img": devil,
    "title": "Le cadavre est vraiment gigantesque, quelle partie serait la plus simple à transporter? Après avoir examiner le corps du mutant quasiment coupé en deux vous décidez de...",
    "BTNA":"Un orteil ferait un beau pendentif!",
    "BTNB": "Je pourrai utiliser son estomac comme gourde!",
    "toOne":"7",
    "toTwo": "7"
  },
  "3": {
    "img": eat,
    "title": "Après plusieurs heures de marche, vous êtes épuisé et affamé... Par chance vous repérez un insecte radioactif!",
    "BTNA":"Un vrai patriot a besoin de forces!",
    "BTNB": "Ça ne me semble pas très prudent",
    "toOne":"5",
    "toTwo": "6"
  },
  "5": {
    "img": eating,
    "title": "Après plusieurs heures de marche, vous êtes épuisé et affamé... Par chance vous repérez un insecte radioactif!",
    "BTNA":"Un vrai patriot a besoin de forces!",
    "BTNB": "Ça ne me semble pas très prudent",
    "toOne":"5",
    "toTwo": "6"
  },
  "6": {
    "img": eating,
    "title": "Après plusieurs heures de marche, vous êtes épuisé et affamé... Par chance vous repérez un insecte radioactif!",
    "BTNA":"Un vrai patriot a besoin de forces!",
    "BTNB": "Ça ne me semble pas très prudent",
    "toOne":"5",
    "toTwo": "6"
  },
  "7": {
    "img": man,
    "title": "Maintenant vous etes devenue un vrai mâle américain! Poursuivons notre quête!",
    "BTNA":"continuer",
    "toOne":"5",
  },
  "7": {
    "img": man,
    "title": "Maintenant vous etes devenue un vrai mâle américain! Poursuivons notre quête!",
    "BTNA":"continuer",
    "toOne":"5",
  },
  
}