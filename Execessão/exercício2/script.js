const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  limparErros();

  let erros = [];

  const nome = document.getElementById("nome").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const dataNascimento = document.getElementById("dataNascimento").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  if (nome === "") {
    const msg = "Nome é obrigatório";
    erros.push(msg);
    document.getElementById("nomeError").textContent = msg;
  }

  const cpfNumeros = cpf.replace(/\D/g, "");

  if (cpfNumeros.length !== 11) {
    const msg = "CPF deve conter 11 dígitos numéricos";
    erros.push(msg);
    document.getElementById("cpfError").textContent = msg;
  }

  if (dataNascimento) {
    const hoje = new Date();
    const dataInformada = new Date(dataNascimento);

    hoje.setHours(0, 0, 0, 0);

    if (dataInformada > hoje) {
      const msg = "Data de nascimento não pode ser futura";
      erros.push(msg);
      document.getElementById("dataError").textContent = msg;
    }
  } else {
    const msg = "Data de nascimento é obrigatória";
    erros.push(msg);
    document.getElementById("dataError").textContent = msg;
  }

  if (senha.length < 6) {
    const msg = "Senha deve ter no mínimo 6 caracteres";
    erros.push(msg);
    document.getElementById("senhaError").textContent = msg;
  }

  if (confirmarSenha !== senha) {
    const msg = "As senhas devem ser iguais";
    erros.push(msg);
    document.getElementById("confirmarSenhaError").textContent = msg;
  }

  if (erros.length > 0) {
    const errorList = document.getElementById("errorList");
    const errorsUl = document.getElementById("errors");

    errorList.style.display = "block";

    erros.forEach(erro => {
      const li = document.createElement("li");
      li.textContent = erro;
      errorsUl.appendChild(li);
    });

    return;
  }

  document.getElementById("successMessage").textContent =
    "Cadastro realizado com sucesso!";
});

function limparErros() {
  document.getElementById("errors").innerHTML = "";
  document.getElementById("errorList").style.display = "none";

  document.getElementById("nomeError").textContent = "";
  document.getElementById("cpfError").textContent = "";
  document.getElementById("dataError").textContent = "";
  document.getElementById("senhaError").textContent = "";
  document.getElementById("confirmarSenhaError").textContent = "";

  document.getElementById("successMessage").textContent = "";
}
