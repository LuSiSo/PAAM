document.getElementById("formCadastro").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const idade = Number(document.getElementById("idade").value);
  const senha = document.getElementById("senha").value;

  const msg = document.getElementById("mensagem");

  try {
    if (!nome || nome.length < 3) {
      throw "Nome inválido (mínimo 3 caracteres).";
    }

    if (!email.includes("@")) {
      throw "E-mail inválido.";
    }

    if (!idade || idade < 18) {
      throw "Idade inválida (mínimo 18 anos).";
    }

    if (!senha || senha.length < 6) {
      throw "Senha deve ter no mínimo 6 caracteres.";
    }

    msg.style.color = "green";
    msg.textContent = "Cadastro realizado com sucesso!";
  } 
  catch (erro) {
    msg.style.color = "red";
    msg.textContent = erro;
  }
});
