let lista = document.querySelector("select#caixa");
let res = document.querySelector("div#res");
let vetValores = [];
function isNum(valor) {
  if (valor >= 1 && valor <= 100) return true;
  else return false;
}
function inLista(valor, array) {
  //"-1" -> "valor" não está na lista
  //console.log(array.indexOf(valor) != -1); //-> valor ESTÁ na lista
  if (array.indexOf(valor) != -1) return true;
  else return false;
}
function adicionar() {
  let numero = document.querySelector("input#numero");
  //console.log(numero); -> imprimi o elemento HTML
  //console.log(numero.value) -> imprimi o valor de entrada
  //Cria um elemento "item" e anexa ao elemento "lista"
  if (isNum(numero.value) && !inLista(numero.value, vetValores)) {
    //vetValores.concat(numero);
    //console.log(vetValores);
    vetValores.push(numero.value);//inserindo no fim
    let item = document.createElement("option");
    item.text = `Valor ${numero.value} adicionado`;
    lista.appendChild(item);
  } else {
    alert("[ERRO]Valor inválido ou já encontrado na lista!");
  }
  numero.value = "";
  //foca no campo de entrada correspondente sem ter de clicar no campo
  numero.focus();
}
function maiorValor(vetor) {
  let valorInicial = 0;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > valorInicial) valorInicial = vetor[i];
  }
  return valorInicial;
}
function menorValor(vetor) {
  let valorInicial = 101;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < valorInicial) valorInicial = vetor[i];
  }
  return valorInicial;
}
function soma(vetor) {
  let somaVetValores = 0;
  for (let i = 0; i < vetor.length; i++) {
    somaVetValores += parseInt(vetor[i]);
  }
  return somaVetValores;
}
function media(vetValores, tamanhoVetor) {
  return soma(vetValores) / tamanhoVetor;
}
function finalizar() {
  // lista.innerHTML = "";
  lista.style.width = "135px";
  let section = document.querySelector("section");
  section.style.height = "430px";
  //section.style.heigth = "350px";
  res.innerHTML = `<p>Ao todos temos ${vetValores.length} numeros cadastrados </p>`;
  res.style.marginTop = "<p>10px";
  res.style.marginLeft = "<p>10px";
  res.innerHTML += `<p>O maior valor informado foi ${maiorValor(vetValores)} </p>`;
  res.innerHTML += `<p>O menor valor informado foi ${menorValor(vetValores)} </p>`;
  res.innerHTML += `<p>Somando todos os valores, <mark> temos ${soma(
    vetValores
  )} <mark></p>`;
  res.innerHTML += `<p>A média dos valores digitados foi ${media(vetValores, vetValores.length)} <mark>`;
}
