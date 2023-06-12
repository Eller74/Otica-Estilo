// Código para a página Home (index.html)
function exibirDetalhesProduto(id) {
  window.location.href = 'detalhes.html?id=' + id;
}


fetch('https://diwserver.vps.webdock.cloud/products/category/Accessories - Eyewear')
  .then(res => res.json())
  .then(data => {
    let str = '';
    for (let i = 0; i <= 9; i++) {
      let ler = data.products[i];
      str += `<div class="card">
                <img class="img-card" src="${ler.image}" alt="oculos escuro">
                <h4> <a href="#">${ler.title}</a> </h4>
                <h5>R$${ler.price}</h5>
                <button onclick="exibirDetalhesProduto(${ler.id})">Detalhes</button>
              </div>`;
    }
    document.getElementById('pro').innerHTML = str;
  });

  fetch('https://diwserver.vps.webdock.cloud/products/category/Personal Care - Perfumes')
  .then(res => res.json())
  .then(data => {
    let str = '';
    for (let i = 0; i <= 4; i++) {
      let ler = data.products[i];
      str += `<div class="card">
                <img class="img-card" src="${ler.image}" alt="Perfumes">
                <h4> <a href="#">${ler.title}</a> </h4>
                <h5>R$${ler.price}</h5>
                <button onclick="exibirDetalhesProduto(${ler.id})">Detalhes</button>
              </div>`;
    }
    document.getElementById('pro2').innerHTML = str;
  });

  fetch('https://diwserver.vps.webdock.cloud/products/category/Accessories - Ties')
  .then(res => res.json())
  .then(data => {
    let str = '';
    for (let i = 0; i <= 4; i++) {
      let ler = data.products[i];
      str += `<div class="card">
                <img class="img-card" src="${ler.image}" alt="Gravatas">
                <h4> <a href="#">${ler.title}</a> </h4>
                <h5>R$${ler.price}</h5>
                <button onclick="exibirDetalhesProduto(${ler.id})">Detalhes</button>
              </div>`;
    }
    document.getElementById('pro3').innerHTML = str;
  });

  function search() {
    let input = document.getElementById('barradepesquisa').value.toLowerCase();
    let x = document.getElementsByClassName('card');
  
    for (let i = 0; i < x.length; i++) {
      let title = x[i].getElementsByTagName('h4')[0].innerText.toLowerCase();
      if (title.includes(input)) {
        x[i].style.display = 'block';
      } else {
        x[i].style.display = 'none';
      }
    }
  
    // Verifique se o campo de pesquisa está vazio e, em seguida, exiba todos os itens novamente
    if (input === '') {
      let allCards = document.getElementsByClassName('card');
      for (let i = 0; i < allCards.length; i++) {
        allCards[i].style.display = 'block';
      }
    }
  }