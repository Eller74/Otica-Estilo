// Código para a página de Detalhes (detalhes.html)
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  
fetch('https://diwserver.vps.webdock.cloud/products/category/Accessories - Eyewear')
    .then(res => res.json())
    .then(data => {
      var id = parseInt(getUrlParameter('id'));
      var produto = data.products.find(itenscar => itenscar.id === id);
  
      if (produto) {
        var detalhes = document.getElementById('itenscar');
        if (detalhes) { // Verifica se o elemento existe na página
          detalhes.innerHTML = `
            <h2 class="inform">Detalhes do Produto</h2>
            <img src="${produto.image}" alt="${produto.title}">
            <p class="inform">ID: ${produto.id}</p>
            <p class="inform">Nome: ${produto.title}</p>
            <p class="inform">Descrição: ${produto.description}</p>
            <p class="inform">Preço: R$${produto.price}</p>
          `;
        } else {
          console.error('Elemento detalhesProduto não encontrado na página.');
        }
      } else {
        console.error('Produto não encontrado.');
      }
    })
    .catch(error => console.error(error));

    fetch('https://diwserver.vps.webdock.cloud/products/category/Personal Care - Perfumes')
    .then(res => res.json())
    .then(data => {
      var id = parseInt(getUrlParameter('id'));
      var produto = data.products.find(itenscar => itenscar.id === id);
  
      if (produto) {
        var detalhes = document.getElementById('itenscar');
        if (detalhes) { // Verifica se o elemento existe na página
          detalhes.innerHTML = `
            <h2 class="inform">Detalhes do Produto</h2>
            <img src="${produto.image}" alt="${produto.title}">
            <p class="inform">ID: ${produto.id}</p>
            <p class="inform">Nome: ${produto.title}</p>
            <p class="inform">Descrição: ${produto.description}</p>
            <p class="inform">Preço: R$${produto.price}</p>
          `;
        } else {
          console.error('Elemento detalhesProduto não encontrado na página.');
        }
      } else {
        console.error('Produto não encontrado.');
      }
    })
    .catch(error => console.error(error));

    fetch('https://diwserver.vps.webdock.cloud/products/category/Accessories - Ties')
    .then(res => res.json())
    .then(data => {
      var id = parseInt(getUrlParameter('id'));
      var produto = data.products.find(itenscar => itenscar.id === id);
  
      if (produto) {
        var detalhes = document.getElementById('itenscar');
        if (detalhes) { // Verifica se o elemento existe na página
          detalhes.innerHTML = `
            <h2 class="inform">Detalhes do Produto</h2>
            <img src="${produto.image}" alt="${produto.title}">
            <p class="inform">ID: ${produto.id}</p>
            <p class="inform">Nome: ${produto.title}</p>
            <p class="inform">Descrição: ${produto.description}</p>
            <p class="inform">Preço: R$${produto.price}</p>
          `;
        } else {
          console.error('Elemento detalhesProduto não encontrado na página.');
        }
      } else {
        console.error('Produto não encontrado.');
      }
    })
    .catch(error => console.error(error));