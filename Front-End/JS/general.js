// Récupérations des produits en Back-End
const adresse = fetch("http://localhost:3000/api/teddies")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((value) => {
    addCarte(value);
  })
  .catch((err) => {
    console.log(err);
    // Une erreur est survenue
  });
// console.log(oursonSelect());

//récupérer l'id dans l'url des objets
const parsedUrl = new URL(window.location.href);
const oursonCible = parsedUrl.searchParams.get("_id");
// console.log(oursonCible);

//modification de l'adresse d'appel à l'API
const newUrl = `http://localhost:3000/api/teddies/${oursonCible}`;
// console.log(newUrl);

//Variables Globales et localstorage
const panier = JSON.parse(localStorage.getItem("oursonCommande")) || [];
const commande = JSON.parse(localStorage.getItem("order")) || [];
const date = JSON.parse(localStorage.getItem("date")) || [];
const formulaire = document.getElementById("formulaire");
const panierVide = document.getElementById("panierVide");
// console.log(panier);

//création des liens pour le nav
function linkCarte() {
  const linkOurson = document.getElementById("linkOurson");
  linkOurson.innerHTML += `
    <a class="dropdown-item text-white" href="../Pages/produit.html?_id=${FicheOurson._id}">Peluche => ${FicheOurson.name}</a>`;
}

// Création de ma class d'Ourson en peluche pour l'index
class FicheOurson {
  constructor(_id, name, price, description, imageUrl, colors, quantity) {
    this._id = _id;
    this.name = name;
    this.price = +price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.colors = colors;
    this.quantity = +quantity;
  }
}
// console.log(FicheOurson);

// création de la class des produits ajouté au panier
class Produit {
  constructor(
    newUrl,
    _id,
    name,
    price,
    description,
    imageUrl,
    checkBoxColor,
    quantity
  ) {
    this.newUrl = newUrl;
    this._id = _id;
    this.name = name;
    this.price = +price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.checkBoxColor = checkBoxColor;
    this.quantity = +quantity;
  }
}

// conversion des prix
function prixConverti(prixProduit) {
  let prix = `${prixProduit}`;
  prix = Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(prix / 100);
  return prix;
}

// calcul du total
function prixTotalPanier() {
  let totalpanier = 0;
  panier.forEach((produitOursonCommande) => {
    totalpanier =
      totalpanier +
      produitOursonCommande.price * produitOursonCommande.quantity;
  });
  return totalpanier;
}

//affiche le total du Panier
function prixTotal() {
  const prixTotal = document.getElementById("prixTotal");
  prixTotal.innerHTML += `${prixConverti(prixTotalPanier())}`;
}

// calcul de  l'apercu Panier
function apercuPanier() {
  if (panier.length == 0) {
  } else {
    let addapercuPanier = document.getElementById("apercuPanier");
    let calculapercuPanier = 0;
    for (FicheOurson of panier) {
      calculapercuPanier += FicheOurson.quantity;
    }
    addapercuPanier.innerHTML = `Panier <span class="badge rounded-pill bg-secondary align-middle my-auto">${calculapercuPanier}</span>`;
  }
}

//Mise à jour de l'apercu du Panier
apercuPanier();

// supprimer le Panier
function effacerPanier() {
  localStorage.clear();
}

//ajoute le tableau de commande
function listeCommande(product) {
  const indexProduit = panier.indexOf(product);
  const listeProduit = document.getElementById("listePanier");
  listeProduit.innerHTML += `
      <tr class="text-center bg-light">
          <td>
              <img src="${
                product.imageUrl
              }" class="img-fluid img-thumbnail" alt="${product.name}">
          </td>
          <td class="align-middle">
              <span>${product.name}</span>
          </td>
          <td class="align-middle">
              <span>${product.checkBoxColor}</span>
          </td>
          <td class="align-middle">
              <button aria-label="Bouton moins" type="button" class="rounded minus data-toggle="modal" data-target="#exampleModal" data-index="${indexProduit}"><span class="fas fa-minus-square text-danger" data-index="${indexProduit}"></span></button>
              <span class="mx-0 mx-lg-3"> ${product.quantity}</span>
              <button aria-label="Bouton plus" type="button" class="rounded plus" data-toggle="modal" data-target="#exampleModal" data-index="${indexProduit}"><span class="fas fa-plus-square text-success" data-index="${indexProduit}"></span></button>
          </td>
          <td class="align-middle">
              <span>${prixConverti(product.price)}</span>
          </td>
          <td class="align-middle">
              <span>${prixConverti(product.quantity * product.price)}</span>
          </td>
      </tr>`;
}
