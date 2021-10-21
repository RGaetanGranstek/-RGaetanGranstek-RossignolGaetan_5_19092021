// fonction pour créé des cartes de mes produits en page d'accueil
function addCarte(value) {
  // incrementation pour ma class active de mon carousel
  let incrementation = 0;
  //boucle pour chaque iteration d'un produit
  for (FicheOurson of value) {
    //recupère l'élément Ourson dans le HTML pour les cartes
    const carte = document.getElementById("Ourson");
    carte.innerHTML += `
    <div class="col-sm-6 p-3 mb-5 card">
      <a href="../Pages/produit.html?_id=${FicheOurson._id}" class="text-center">
        <img src="${FicheOurson.imageUrl}" class="img-fluid img-thumbnail p-1" alt="image représentant ${FicheOurson.name}">
      </a>
      <div class="row card-body justify-content-around">
        <h2 class="col-6 card-title text-center">${FicheOurson.name}</h3>
      </div>
      <div class="card-body">
        <p class="card-text text-truncate">${FicheOurson.description}</p>
      </div>
      <a href="../Pages/produit.html?_id=${FicheOurson._id}" class="btn btn-outline-success">Acheter ce produit</a>
    </div>`;
    //recupère l'élément carouselOurson dans le header pour créer le carousel
    const carouselOurson = document.getElementById("carouselOurson");
    if (incrementation == 0) {
      carouselOurson.innerHTML += `
      <div class="carousel-item active">
        <img src="${FicheOurson.imageUrl}" alt="ourson en pelluche : ${FicheOurson.name}" class="d-block w-100" height="250px">
      </div>`;
    } else {
      carouselOurson.innerHTML += `
      <div class="carousel-item">
        <img src="${FicheOurson.imageUrl}" alt="ourson en pelluche : ${FicheOurson.name}" class="d-block w-100" height="250px">
      </div>`;
    }
    incrementation++;
  }
}
