const choices = ['pierre', 'feuille', 'ciseaux']
let UserChoice = prompt("Choisir : pierre, feuille, ciseaux")

function playRound(userChoice) {
  // Génération d'un choix aléatoire pour l'ordinateur
  let computerChoice = choices[Math.floor(Math.random() * 3)];
console.log(computerChoice)
  // Détermination du résultat de la partie
  if (userChoice === computerChoice) {
    return "Egalité !";
  } else if (
    (userChoice === "pierre" && computerChoice === "ciseaux") ||
    (userChoice === "feuille" && computerChoice === "pierre") ||
    (userChoice === "ciseaux" && computerChoice === "feuille")
  ) {
    return "Vous avez gagné !";
  } else {
    return "Vous avez perdu !";
  }
  
}
console.log(playRound(UserChoice));
