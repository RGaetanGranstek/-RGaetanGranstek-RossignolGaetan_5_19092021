// fonction pour créé mes liens produits
function addCarte(value) {
  //boucle pour chaque iteration d'un produit
  for (ficheOurson of value) {
    //recupère l'élément linkOurson dans le nav pour créer des liens vers les produits
    const linkOurson = document.getElementById("linkOurson");
    linkOurson.innerHTML += `
    <a class="dropdown-item text-white" href="../Pages/produit.html?_id=${ficheOurson._id}">Peluche => ${ficheOurson.name}</a>`;
  }
}

function carteId(value) {
  for (ficheOurson of value) {
    if (oursonCible === ficheOurson._id) {
      //recupère l'élément Ourson dans le HTML pour les cartes
      const carteProduit = document.getElementById("oursonProduit");
      carteProduit.innerHTML = `
      <div class="col-sm-6 p-3 m-5 mb-5 card">
          <img src="${ficheOurson.imageUrl}" class="img-fluid img-thumbnail p-1" alt="image représentant ${ficheOurson.name}">
          </a>
          <div class="row card-body justify-content-between">
              <h2 class="col-6 card-title">${ficheOurson.name}</h3>
              <h3 class="col-3">${ficheOurson.price} euros</h3>
          </div>
          <div class="card-body">Choisissez votre couleur :
          </div>
          <div id="checkBoxColor" class="card-body">
          </div>
          <div class="card-body">
              <p class="card-text">${ficheOurson.description}</p>
          </div>
          <a href="#" class="btn btn-secondary">Ajouter au panier</a>
      </div>`;
      // checkBox des couleurs
      const checkProduit = document.getElementById("checkBoxColor");
      let incrementationCheck = 0;
      for (ficheOursonColors of ficheOurson.colors) {
        if (incrementationCheck == 0) {
          checkProduit.innerHTML += `
          <div>
            <input type="radio" id="${ficheOursonColors}" name="colors" value="${ficheOursonColors}" checked>
            <label for="${ficheOursonColors}">${ficheOursonColors}</label>
          </div>`;
        } else {
          checkProduit.innerHTML += `
          <div>
            <input type="radio" id="${ficheOursonColors}" name="colors" value="${ficheOursonColors}">
            <label for="${ficheOursonColors}">${ficheOursonColors}</label>
          </div>`;
        }
        incrementationCheck++;
      }
      // else {
      //   console.log("AIE AIE AIE");
      // }
    }
  }
}
