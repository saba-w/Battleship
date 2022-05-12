let english = document.getElementById("en");
let french = document.getElementById("fr");
let title = document.getElementById("Title");
let presentation = document.getElementById("Presentation");
let jouer = document.getElementById("Jouer");
let consignes = document.getElementById("Consignes");
let textes = document.getElementById("Textes");
/*
let winner = document.getElementById("Winner");
let looser = document.getElementById("Looser");
let social = document.getElementById("Social");
let retour = document.getElementById("Retour");
let relancer = document.getElementById("Relancer");
let niveau = document.getElementById("Niveau");
let feli = document.getElementById("Feli");
let feli_lost = document.getElementById("Feli_lost");
*/
let footer = document.getElementById("Foot");

english.onclick = () => {
    setLanguage("en");
};

french.onclick = () => {
    setLanguage("fr");
};

function setLanguage(getLanguage) {
    if (getLanguage === "en") {
        title.innerHTML = "Battleship";
        presentation.innerHTML = "Video Presentation & Instructions";
        jouer.innerHTML = "Play Now";
        consignes.innerHTML = "Description & Instructions";
        footer.innerHTML = "Legal Notice";
        textes.innerHTML = "At the start of a game, each player places their fleet on the first grid.Each ship must be placed, horizontally or vertically and they cannot be overlapped. The game begins with a coin toss(heads or tails) to determine the starting player. On each turn, a player must choose one space from the second grid on which he wishes to shoot(for example A1). Each impact will be represented on grid number 2 (with 2 notations to differentiate shots hit and missed). It is impossible to select the same square twice to shoot. The resolution of a shot ends with three possible states: hit, miss or sink. Each player has a game time limit per turn. If the allotted time expires, the next player begins his turn. After three turns expired consecutively, the game ends in forfeit. When all spaces of a ship are touched, the latter is sunk.";
        /*
        winner.innerHTML = "Congratulations, you won!";
        looser.innerHTML = "You lost, better luck next time!";
        social.innerHTML = "Share your score on social media";
        retour.innerHTML = "Back to the menu";
        relancer.innerHTML = "Play again";
        feli.innerHTML = "Congratulations !";
        feli_lost.innerHTML = "You lost !";
        */
    } else if (getLanguage === "fr") {
        title.innerHTML = "Bataille Navale";
        presentation.innerHTML = "Présentation Vidéo & Instructions";
        jouer.innerHTML = "Jouer Maintenant";
        consignes.innerHTML = "Description & Consignes";
        footer.innerHTML = "Mentions Légales";
        textes.innerHTML = "Au début d’une partie, chaque joueur place sa flotte sur la première grille. Chaque navire doit être placé, de manière horizontale ou verticale et ils ne peuvent pas être superposés. La partie commence par un lancer de pièce(pile ou face) pour déterminer le joueur qui débute. A chaque tour, un joueur doit choisir une case de la seconde grille sur laquelle il souhaite tirer(par exemple A1). Chaque impact sera représenté sur la grille numéro 2 (avec 2 notations pour différencier les tirs touchés et loupés). Il est impossible de sélectionner deux fois la même case pour tirer. La résolution d’ un tir se conclut par trois états possibles: touché, loupé ou coulé. Lorsque toutes les cases d’ un navire sont touchées, ce dernier est coulé.";
        /*
        winner.innerHTML = "Félicitations, vous avez gagné !";
        looser.innerHTML = "Vous avez perdu, bonne chance la prochaine fois !";
        social.innerHTML = "Partagez votre score sur les réseaux sociaux";
        retour.innerHTML = "Retour à l'accueil";
        relancer.innerHTML = "Relancer";
        feli.innerHTML = "Félicitations !";
        feli_lost.innerHTML = "Vous avez perdu !";
        */
    }
}