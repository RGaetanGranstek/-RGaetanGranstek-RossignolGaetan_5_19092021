// fonction pour créé des cartes de mes produits en page d'accueil
function addCarte(value) {
  //boucle pour chaque iteration d'un produit
  for (ficheOurson of value) {
    //recupère l'élément linkOurson dans le nav pour créer des liens vers les produits
    const linkOurson = document.getElementById("linkOurson");
    linkOurson.innerHTML += `
    <a class="dropdown-item text-white" href="../Pages/produit.html?_id=${ficheOurson._id}">Peluche => ${ficheOurson.name}</a>`;
  }
}

//récupérer l'id dans l'url
function carteId(value) {
  let parsedUrl = new URL(window.location.href);
  let oursonCible = parsedUrl.searchParams.get("_id");
  console.log(parsedUrl.searchParams.get("_id"));
  for (ficheOurson of value) {
    if (oursonCible === ficheOurson._id) {
      //recupère l'élément Ourson dans le HTML pour les cartes
      const carteProduit = document.getElementById("oursonProduit");
      carteProduit.innerHTML = `
      <div class="col-sm-6 p-3 mb-5 card">
          <img src="${ficheOurson.imageUrl}" class="img-fluid img-thumbnail p-1" alt="image représentant ${ficheOurson.name}">
          </a>
          <div class="row card-body">
              <h2 class="col-6 card-title">${ficheOurson.name}</h3>
              <h3 class="col-6 text-right">${ficheOurson.price} euros</h3>
          </div>
          <div class="card-body">
              <p class="card-text text-truncate">${ficheOurson.description}</p>
          </div>
          <a href="#" class="btn btn-secondary">Ajouter au panier</a>
      </div>`;
    } else {
      console.log("AIE AIE AIE");
    }
  }
}
carteId();
