function verificar() {
    const select = document.getElementById("opcoes");
    const valor = select.value;
    const resultado = document.getElementById("resultado");
  
    if (valor === "") {
      alert("Por favor, selecione uma opção válida!");
      resultado.textContent = "";
      return;
    }
  
    switch (valor) {
      case "html":
        resultado.textContent = "HTML: estrutura de páginas web.";
        break;
  
      case "css":
        resultado.textContent = "CSS: estilização de páginas web.";
        break;
  
      case "js":
        resultado.textContent = "JavaScript: programação para web.";
        break;
  
      default:
        resultado.textContent = "Opção inválida.";
    }
  }
