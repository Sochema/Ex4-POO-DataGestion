//REQUETE AJAX

var tBody = document.getElementById("tbody");
var selector = document.getElementById("selector").value;


//EventListener Onclick pour selector
// for (var i = 0; i < selector.length; i++) {
//   selector[i].addEventListener("click", ..... )
// }

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      affichage(name);
      //trier( , ,selector)
    }
  };
  xhttp.open("GET", "main.json", true);
  xhttp.send();
}

//RECUPERER LES PRENOMS
function affichage() {
  for (x in data.dab) {
    var ligne = document.createElement("tr");
    tBody.appendChild(ligne);
    for (i in data.dab[x]) {
      var col = document.createElement("td");
      ligne.appendChild(col);
      col.innerHTML = (data.dab[x])[i];
    }
  }
}

loadDoc();


//TRIER

function trier (element1, element2, htmlElement){






}

//c = selecteur
