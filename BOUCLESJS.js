var n=prompt("Saisissez le prénom N°1 ou Clic sur Annuler pour arrêter la saisie.")


console.log("prenom")

for (i=1; i<5; i++)

{
    resultat = n+i;
    n=prompt("Saisissez le prénom N°1 ou Clic sur Annuler pour arrêter la saisie.")
    console.log("n+"+i+"="+resultat);
}
console.log("fin de la boucle");