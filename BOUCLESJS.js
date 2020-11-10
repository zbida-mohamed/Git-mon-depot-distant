var n=prompt("Saisissez le prénom N°1 ou Clic sur Annuler pour arrêter la saisie.")


console.log("prenom")

for (i=1; i<5; i++)

{
    resultat = n+i;
    n=prompt("Saisissez le prenom n)1 ou Clic sur Annuler pour arrêter la saisie.");
    console.log("n+"+i+"="+resultat);
}
console.log("fin de la boucle");







var nombre1 =parseInt(prompt('Entrez un nombre entier :'));

if 

(tant que le nombre inferieur 10
    
    
    
    
    affiché
    
    
    
    sinon 
    
    
    ne pas afficher)




























// voyelle a, e, i, o, u, y
var mot = window.prompt("Entrer un mot");
var Nbr = 0;
var   voytr="";
var voyelle = ['a', 'e', 'i', 'o', 'u', 'y']
var consonnes
for(var i =0; i<mot.length; i++){
    var lettre = mot.substr(i,1);
//   Nombre de lettre qui correspond a voyelle
    if(voyelle.indexOf(lettre)>=0){
//on ajoute les lettres étant une voyelle à la suite 
     voytr += mot[i] +','
        Nbr++
    }
   
consonnes = mot.length - Nbr;
}
window.alert("Dans "+ mot + " j'ai trouvé " +Nbr+ " voyelle qui sont "+voytr+"  et " +consonnes+ " consonnes")
