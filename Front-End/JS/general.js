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
  constructor(_id, name, price, description, imageUrl, colors) {
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

//récupérer l'id dans l'url
const parsedUrl = new URL(window.location.href);
const oursonCible = parsedUrl.searchParams.get("_id");
// console.log(parsedUrl.searchParams.get("_id"));

// Création de ma class pour extraire les couleurs
class ficheOursonColors {
  constructor(colors) {
    this.colors = colors;
  }
}
// console.log(ficheOursonColors);

// pointer-cursor fonctionne pas avec bootstrap et CSS     X
// couleur background      X
// centrage page produit      X
// améliorer informations card produit    X
// mise en place chekbox       X
// fonction carteId a améliorer (passe toute la liste d'objet en revue)
