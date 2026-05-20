function mostrarCategoria() {
  const categoria = document.getElementById("categorias").value;
  const mensagem = document.getElementById("mensagem");

  switch (categoria) {
    case "":
      mensagem.textContent = "Erro: selecione uma categoria válida.";
      break;

    case "eletronicos":
      mensagem.textContent = "Eletrônicos: celulares, computadores e acessórios.";
      break;

    case "roupas":
      mensagem.textContent = "Roupas: camisetas, calças e vestidos.";
      break;

    case "alimentos":
      mensagem.textContent = "Alimentos: produtos de mercado e bebidas.";
      break;

    default:
      mensagem.textContent = "Categoria inválida.";
  }
}
