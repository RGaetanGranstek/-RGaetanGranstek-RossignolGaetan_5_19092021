// fonction pour créé mes liens produits
function addCarte(value) {
  //boucle pour chaque iteration d'un produit
  for (FicheOurson of value) {
    linkCarte();
  }
}
// console.table(commande);

// affichage des informations de commande
const informations = document.getElementById("informations");
informations.innerHTML += `
  <div class="col-sm-12 p-3 mb-5 card text-center">
      <p class="fs-5 card-text">Merci d'avoir choisi notre site pour votre achat !</p>
      <p class="fs-5"> Votre commande passée le <span class="fw-bold">${
        date[0].date
      }</span> à <span class="fw-bold">${
  date[0].hours
}</span> d'un montant total de <span class="fw-bold">${prixConverti(
  prixTotalPanier()
)}</span> a été validée.</p>
      <p class="fs-5">Référence de la commande => <span class="fw-bold">${
        commande.orderId
      }</span>.</p>
  </div>
  <div class="col-sm-12 p-3 mb-5 card text-center">
    <p class="fs-5">Votre commande sera envoyée à l'adresse suivante :
    <div class=" fs-5 text-center fw-bold">
        <p class="text-capitalize">${commande.contact.firstName} ${
  commande.contact.lastName
}</p>
        <p class="text-capitalize">${commande.contact.address}</p>
        <p class="text-capitalize">${commande.contact.city}</p>
    </div>
    <p class="fs-5">Un exemplaire de votre facture vous est transmise par e-mail à : <span class="fw-bold">${
      commande.contact.email
    }</span>.</p>
    </div>
    `;

// affiche Récapitulatif de ma commande
for (product of panier) {
  listeCommande(product);
}

//cache les boutons d'ajout suppression de quantité
const deletedItem = document.getElementsByClassName("rounded");
for (element of deletedItem) {
  element.classList.add("d-none");
}

//affiche le prix total
prixTotal();

//bouton imprimer
const imprimer = document.getElementById("imprimer");
imprimer.addEventListener("click", (e) => {
  e.preventDefault;
  window.print();
});

//vide le localStorage
const clickHome = document.getElementById("accueil");
clickHome.addEventListener("click", () => {
  effacerPanier();
});
const clickPanier = document.getElementById("apercuPanier");
clickPanier.addEventListener("click", () => {
  effacerPanier();
});
