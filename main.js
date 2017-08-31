var tBody = document.getElementById("tbody");
var selector = document.getElementById("selector");

//REQUETE AJAX
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      affichage();
      selector.addEventListener("change", function(){
        trier(data.dab, selector.options[selector.selectedIndex].innerHTML)}
    );
    }
  };
  xhttp.open("GET", "main.json", true);
  xhttp.send();

//RECUPERER LES PRENOMS
function affichage() {
  tbody.innerHTML = "";
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

function trier(table, select) {
  table.sort(function(element1, element2) {
    if (element1[select] > element2[select]) {
      return 1;
    }
    if (element1[select] < element2[select]) {
      return -1;
    }
    return 0;
  })
  affichage();
}

//var test = "name";
//objet["name"] = objet.name
