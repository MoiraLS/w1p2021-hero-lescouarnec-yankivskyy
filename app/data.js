const walking = require('./assets/img/Walking.png');
const dead = require('./assets/img/cadavre.png');

export default{
"1": {
    "img": walking,
    "title": "Vous vous êtes mis en route vers votre destinée, le chemin sera périlleux vous devrez faire les bons choix pour sauver la démoncratie capitaliste !",
    "BTNA":"Sortir votre pistolet démocratique",
    "BTNB": "Je suis venu en paix l'ami...",
    "toOne":"2",
    "toTwo": "/lose"
  },
  "2": {
    "img": dead,
    "title": "Vous avez tué le mutant! Continuons notre quête...",
    "BTNA":"Prélever un trophé du mutant",
    "BTNB": "Poursuivre notre chemin",
    "toOne":"4",
    "toTwo": "3"
  },
  "3": {
    "title": "Après plusieurs heures de marche, vous êtes épuisé et affamé... Par chance vous repérez un insecte radioactif!",
    "BTNA":"Un vrai patriot a besoin de forces!",
    "BTNB": "Ça ne me semble pas très prudent",
    "toOne":"5",
    "toTwo": "6"
  },
  "4": {
    "title": "Le cadavre est vraiment gigantesque, quelle partie serait la plus simple à transporter? Après avoir examiner le corps du mutant quasiment coupé en deux vous décidez de...",
    "BTNA":"Un orteil ferait un beau pendentif!",
    "BTNB": "Je pourrai utiliser son estomac comme gourde! En plus d'être un trophé, ça serait très pratique pour survivre.",
    "toOne":"3",
    "toTwo": "7"
  }
}