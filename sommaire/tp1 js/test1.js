function test_age() {
    let age = prompt("Quelle est votre age ?")
    if(age < 18) {
        document.write("vous estes mineur");
        document.body.style.backgroundColor= "#E56D6E";
    }
    else {
        
    document.write("Vous êtes majeur");
    document.body.style.backgroundColor="#8DCB76";
    }
}

function calcul_moyenne(){
    var n1 = prompt("Donner la premiere note");
    var n2 = prompt("Donner la deuxieme note");
    var n3 = prompt("Donner la troisieme note");
    var somme = Number(n1) + Number(n2) + Number(n3);
    document.write("Voici la somme: " + somme + "<br>");
    var moyenne = somme/3;
    document.write("Voici la somme: "+ moyenne + "<br>");

    if(moyenne<10){
        document.write("refuser");
        document.body.style.backgroundColor="red";
    }
    else{
        document.write("admit");
        document.body.style.backgroundColor="green";
    }
}

function test_couleur(){
    let couleur = prompt("Donner une coleur");
    if(couleur == "red" || couleur == "red") {
        document.body.style.background = "red"
    }
    else if (couleur == "blue" || couleur == "blue" ) {
        document.body.style.background = "blue"
    }
    else if (couleur == "green" || couleur == "green" ) {
        document.body.style.background = "green"
    }
    else if (couleur == "pink" || couleur == "pink" ) {
        document.body.style.background = "pink"
    }
}