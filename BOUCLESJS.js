
// PROBLEME FINITION EXERCICE 1 BOUCLE



for (i=1; i<10; i++)

{
    resultat = n;
    n=prompt("Saisissez le prenom N°"+i+ " ou Clic sur Annuler pour arrêter la saisie.");
    console.log("n+"+i+"="+resultat);


}


console.log("fin de la boucle");






// probleme a finir ! pas compris EXERCICE 2 BOUCLES

// 

// exercicce 3 

var entrer = true;
 var result = 0;
 var nbr = 0

 while(entrer)
  {
    entier = window.prompt("entrer un entier");
    if (entier>0 && entier != null)
     {
        result = parseFloat(result)+parseFloat(entier)
        nbr ++
 }
 else
 {
break
 }
}
console.log(result,nbr);
var moyenne = result / nbr;
 document.write("le total est ="+result+ " et la moyenne est égal à "+moyenne);





// voyelle a, e, i, o, u, y
var mot = window.prompt("Entrer un mot");
var Nbr = 0;
var   voytr="";
var voyelle = ['a', 'e', 'i', 'o', 'u', 'y']
var consonnes


for (var i =0; i<mot.length; i++){
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
