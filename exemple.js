//Création d'une calculatrice pour effectuer des opérations arithmétiques de base en utilisant une syntaxe alternative

function find_op(expression){
    let el = expression.split(' ');
    const op = ["*", "+", "-", "/"]
    for(let i=0; i<el.length-2; i++){
        if(op.includes(el[i]) && !(isNaN(parseInt(el[i+1]))) && !(isNaN(parseInt(el[i+2])))){
            return [el[i], el[i+1], el[i+2]].join(" ")
        }
    }
}

function calculatrice_alternative (expression) {
    //Décomposer l'expression en ses opérandes et opérateurs
    var elements = expression.split(' ');
  
    //Vérifier qu'il y ait le bon nombre d'opérandes et d'opérateurs
    if (elements.length != 3) {
      return "Expression invalide";
    }
  
    //Définir les variables
    var opérateur = elements[0];
    var nombre_1 = parseInt(elements[1]);
    var nombre_2 = parseInt(elements[2]);
  
    //Réaliser l'opération arithmétique correspondante
    if (opérateur == '+') {
      return nombre_1 + nombre_2;
    } else if (opérateur == '-') {
      return nombre_1 - nombre_2;
    } else if (opérateur == '*') {
      return nombre_1 * nombre_2;
    } else if (opérateur == '/') {
      return nombre_1 / nombre_2;
    } else {
      return "Opérateur non pris en charge";
    }
  }

  function calculer(expression){
    let exp = expression
    let elements = expression.split(' ');
    do{
      exp = exp.replace(find_op(exp), calculatrice_alternative(find_op(exp)).toString())
      elements = exp.split(' ');
    }while(elements.length >= 3)
    return exp;
  }
  
  //Test de la calculatrice
//   var resultat = calculatrice_alternative("* 10 45");
console.log(calculer("/ - 3 4 + 5 2"))
//   console.log(find_op("/ - 3 4 + 5 2")); // Affiche 7
//   console.log(calculatrice_alternative("- 3 4"));
//   console.log(find_op("/ - 3 4 + 5 2".replace("- 3 4", (-1).toString())))