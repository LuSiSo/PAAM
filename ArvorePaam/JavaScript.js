const thLivro = document.getElementById('colLivro');
const thPaginas = document.getElementById('colPaginas');

const celulasLivro = document.getElementsByClassName('celula-livro');
const celulasPaginas = document.getElementsByClassName('celula-paginas');

function limparCores() {
  for (let i = 0; i < celulasLivro.length; i++) {
    celulasLivro[i].style.backgroundColor = "";
    celulasPaginas[i].style.backgroundColor = "";
  }
}

thLivro.onclick = function() {
  limparCores();
  for (let td of celulasLivro) {
    td.style.backgroundColor = "blue";
    td.style.color = "white";
  }
};

thPaginas.onclick = function() {
  limparCores();
  for (let td of celulasPaginas) {
    td.style.backgroundColor = "green";
    td.style.color = "white";
  }
};
