// Tableau des produits (objet)
function oursonSelect() {
  fetch("http://localhost:3000/api/teddies")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then((value) => {
      addCarte(value);
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

console.log(ficheOurson);

// fonction pour créé des cartes de mes produits en page d'accueil
function addCarte(value) {
  //boucle pour chaque iteration d'un produit
  for (ficheOurson of value) {
    //recupère l'élément Ourson dans le HTML
    const carte = document.getElementById("Ourson");
    carte.innerHTML += `
    <div class="col-sm-6 p-3 mb-5 card">
      <a href="./frontend/Pages/produit.html?_id=${ficheOurson._id}"></a>
      <img src="${ficheOurson.imageUrl}" class="img-fluid img-thumbnail p-1" alt="${ficheOurson.name}">
      <div class="card-body">
          <h2 class="card-title">${ficheOurson.name}</h3>
          <p class="card-text text-truncate">${ficheOurson.description}</p>
      </div>
      <a href="./frontend/Pages/produit.html?_id=${ficheOurson._id}" class="btn btn-secondary">Acheter ce produit</a>
    </div>`;
  }
}
