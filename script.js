function fuja() {
  var botaoNao = document.getElementById("nao")

  var larguraJanela = window.innerwidth;
  var alturaJanela = window.innerHeight;
  var maxX = larguraJanela - botaoNao.offsetWidth;

  var maxX = alturaJanela - botaoNao.offsetHeight;

  var aleatorioX = Math.floor(Math.random() * maxX);
  var aleatorioY = Math.floor(Math.random * maxY);

  botaoNao.style.left = aleatorioX + "px";
  botaoNao.style.top = aleatorioY + "px";
}

