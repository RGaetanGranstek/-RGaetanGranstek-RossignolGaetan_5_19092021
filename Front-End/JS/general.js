// Tableau des produits (objet)
function oursonSelect() {
  fetch("http://localhost:3000/api/teddies")
    .then(function (res) {
      if (res.ok) {
        console.log(res);
        return res.json();
      }
    })
    .then((value) => {
      addCarte(value);
      carteId(value);
    })
    .catch(function (err) {
      console.log(err);
      // Une erreur est survenue
    });
}
oursonSelect();
// console.log(oursonSelect());

// Création de ma class d'Ourson en peluche
class ficheOurson {
  constructor(_id, name, price, description, imageUrl, colors, quantity) {
    this._id[0] = _id;
    this.name[0] = name;
    this.price[0] = price;
    this.description[0] = description;
    this.imageUrl[0] = imageUrl;
    this.colors = colors;
    this.quantity[0] = quantity;
  }
}
// console.log(ficheOurson);

//
//

function oursonSelectPage() {
  fetch(
    "http://127.0.0.1:5500/Front-End/Pages/produit.html?_id=5be9c8541c9d440000665243"
  )
    .then(function (res) {
      if (res.ok) {
        console.log(res);
      }
    })
    .catch(function (err) {
      console.log(err);
      // Une erreur est survenue
    });
}
oursonSelectPage();

function requestInfo() {
  // récupération de l'id
  // let idMaterial = ficheOurson._id;

  // Création de l'objet AJAX
  let ajax = new XMLHttpRequest();

  //méthode de connexion
  ajax.open(
    "GET",
    // "http://127.0.0.1:5500/frontend/Pages/produit.html?_id" + ficheOurson._id
    "http://127.0.0.1:5500/Front-End/Pages/produit.html?_id=5be9c8541c9d440000665243"
  );

  // fonction de rappel
  ajax.onload = function (b) {
    console.log(b);
    // document.getElementById("linkOurson").innerHTML = this.responseText;
  };

  //lance la requéte
  ajax.send();
}
requestInfo();
