// fonction pour créé des cartes de mes produits en page d'accueil
function addCarte(value) {
  // incrementation pour ma class active de mon carousel
  let incrementation = 0;
  //boucle pour chaque iteration d'un produit
  for (ficheOurson of value) {
    //recupère l'élément Ourson dans le HTML pour les cartes
    const carte = document.getElementById("Ourson");
    carte.innerHTML += `
    <div class="col-sm-6 p-3 mb-5 card">
      <a href="./Front-End/Pages/produit.html?_id=${ficheOurson._id}">
        <img src="${ficheOurson.imageUrl}" class="img-fluid img-thumbnail p-1" alt="image représentant ${ficheOurson.name}">
      </a>
      <div class="row card-body justify-content-around">
        <h2 class="col-6 card-title text-center">${ficheOurson.name}</h3>
      </div>
      <div class="card-body">
        <p class="card-text text-truncate">${ficheOurson.description}</p>
      </div>
      <a href="./Front-End/Pages/produit.html?_id=${ficheOurson._id}" class="btn btn-secondary">Acheter ce produit</a>
    </div>`;
    //recupère l'élément linkOurson dans le nav pour créer des liens vers les produits
    const linkOurson = document.getElementById("linkOurson");
    linkOurson.innerHTML += `
    <a class="dropdown-item text-white" href="./Front-End/Pages/produit.html?_id=${ficheOurson._id}">Peluche => ${ficheOurson.name}</a>`;
    //recupère l'élément carouselOurson dans le header pour créer le carousel
    const carouselOurson = document.getElementById("carouselOurson");
    if (incrementation == 0) {
      carouselOurson.innerHTML += `
      <div class="carousel-item active">
        <img src="${ficheOurson.imageUrl}" alt="${ficheOurson.description}" class="d-block w-100" height="250px">
      </div>`;
    } else {
      carouselOurson.innerHTML += `
      <div class="carousel-item">
        <img src="${ficheOurson.imageUrl}" alt="${ficheOurson.description}" class="d-block w-100" height="250px">
      </div>`;
    }
    incrementation++;
  }
}
