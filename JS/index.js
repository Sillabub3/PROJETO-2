let paginaAtual = document.getElementById("select").value;

let mensagem = document.getElementById("mensagem");
let passo = document.getElementById("passo");
let qualMetodo = true;

function mudaPagina() {
  const pagina = document.getElementById("select").value;
  if (pagina !== paginaAtual) {
    location.href = "base64.html";
  }
}

const metodo = (value) => {
  if (value === "Codificar") {
    document.getElementById("botao").innerHTML = "Codificar Mensagem!";
    qualMetodo = true;
  } else {
    document.getElementById("botao").innerHTML = "Decodificar Mensagem!";
    qualMetodo = false;
  }
};

const codificar = (mensagem, passo) => {
  let mensagemCodificada = "";
  for (let i = 0; i < mensagem.length; i++) {
    const indiceLetra = alfabeto.indexOf(mensagem[i].toUpperCase());
    if (indiceLetra !== -1) {
      const validaIndice =
        indiceLetra + passo > 37
          ? indiceLetra + passo - 38
          : indiceLetra + passo;
      mensagemCodificada += alfabeto[validaIndice];
    } else {
      mensagemCodificada += mensagem[i];
    }
  }
  document.getElementById("resultado").value = mensagemCodificada;
};

const decodificar = (mensagem, passo) => {
  let mensagemCodificada = "";
  for (let i = 0; i < mensagem.length; i++) {
    const indiceLetra = alfabeto.indexOf(mensagem[i].toUpperCase());
    if (indiceLetra !== -1) {
      const validaIndice =
        indiceLetra - passo < 0
          ? indiceLetra - passo + 38
          : indiceLetra - passo;
      mensagemCodificada += alfabeto[validaIndice];
    } else {
      mensagemCodificada += mensagem[i];
    }
  }
  document.getElementById("resultado").value = mensagemCodificada;
};

const usarMetodo = (mensagem, passo) => {
  if (passo > 37 || passo < 0) {
    alert("O passo deve ser maior ou igual a 0 e menor que 38!");
  } else {
    if (qualMetodo) {
      codificar(mensagem, passo);
    } else {
      decodificar(mensagem, passo);
    }
  }
};

let alfabeto = [
  "A",
  "Á",
  "Â",
  "Ã",
  "À",
  "B",
  "C",
  "Ç",
  "D",
  "E",
  "É",
  "Ê",
  "F",
  "G",
  "H",
  "I",
  "Í",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ó",
  "Õ",
  "Ô",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "Ú",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];