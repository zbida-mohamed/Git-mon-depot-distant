



var mot = window.prompt ("Entrer un mot :");
var voyelle = "aeiouy";
var nbrevoyelle = 0;
var consonnes = 0;

for (i=0; i<mot.length; i++)
{

var lettre = mot.substr(i,1);
//  remplace : lettre == a, lettre = b ....
if(voyelle.indexOf(lettre)>=0)

// 
{nbrevoyelle++;}

else if ((lettre>= 'a' && lettre<='z'))

{consonnes++;}
}

window.alert("le nombre de voyelle est de :"+nbrevoyelle);
window.alert("le nombre de consonnes est :"+consonnes);





















// 


var mot = window.prompt ("Entrer un mot :");
var velle = 0;
var consonnes =0;

for (i=0; i<mot.length; i++)
{

var lettre = mot.substr(i,1);


if(lettre == 'a' || lettre == 'e' || lettre == 'i' || lettre == 'o' || lettre == 'u' || lettre == 'y')
{
velle++;
}
else if ((lettre>= 'a' && lettre<='z'))
{consonnes++;}
}

window.alert("le nombre de voyelle est de"+velle);
window.alert( "nombre de consonnes " +consonnes);


















