let proximoId = 1;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function calcularHoras() {
  const horaInicio = document.getElementById("Entrada").value;
  const horaFim = document.getElementById("Saida").value;

  const [inicioHora, inicioMinuto] = horaInicio.split(":");
  const [fimHora, fimMinuto] = horaFim.split(":");

  const diferencaHoras = fimHora - inicioHora;
  const diferencaMinutos = fimMinuto - inicioMinuto;

  let horas = diferencaHoras;
  let minutos = diferencaMinutos;

  if (diferencaMinutos < 0) {
    horas--;
    minutos += 60;
  }

  const resultado = ` ${horas} horas e ${minutos} minutos`;
  document.getElementById("total").value = resultado;
}


var tempo = document.getElementById('tempo')
var taxa = document.getElementById('taxa')
var resultado = document.getElementById('TOTAL2')

function calcularTotal() {
  resultado.value = tempo.value * taxa.value;
}

document.getElementById("botao-adicionar").addEventListener("click", function () {
 
  const tipo = document.getElementById("tipo_veiculo").value;
  const marca = document.getElementById("Marcas_veiculo").value;
  const modelo = document.getElementById("Modelo_veiculo").value;
  const placa = document.getElementById("placa").value;
  const cor = document.getElementById("Cor").value;
  const hentrada = document.getElementById("entrada_veiculo").value;


  const tabela = document.getElementById("tabela-dados");
  const novaLinha = tabela.insertRow();

  const celulaId = novaLinha.insertCell(0);
  const celulatipo = novaLinha.insertCell(1);
  const celulamarca = novaLinha.insertCell(2);
  const celulamodelo = novaLinha.insertCell(3);
  const celulaplaca = novaLinha.insertCell(4);
  const celulacor = novaLinha.insertCell(5);
  const celulahentrada = novaLinha.insertCell(6);
  const celulaAcao = novaLinha.insertCell(7);

  celulaId.innerHTML = proximoId;
  celulatipo.innerHTML = tipo;
  celulamarca.innerHTML = marca;
  celulamodelo.innerHTML = modelo;
  celulaplaca.innerHTML = placa;
  celulacor.innerHTML = cor;
  celulahentrada.innerHTML = hentrada;

  celulaAcao.innerHTML = ' <button class="botao-excluir">Excluir</button>';

  proximoId++;
});


document.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("botao-excluir")) {
    const linha = evento.target.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
  }
});



const input_busca = document.getElementById('placa2');
const tabela = document.getElementById('tabela-dados');

input_busca.addEventListener('keyup', () => {

  let espre = input_busca.value;
  let linhas = tabela.getElementsByTagName('tr');

  console.log(linhas)
  for (let posi in linhas) {
    if(true === isNaN(posi)){
      continue;
    }


let conteudo = linhas[posi].innerHTML;

if(true === conteudo.includes(espre)){
  linhas[posi].style.display='';

}else{
  linhas[posi].style.display='none';
}
  }

});
