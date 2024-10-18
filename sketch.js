let palavra;

function setup() { // configurações
  createCanvas(400, 400); // cria tela
  
  
  let palavras = ["Me da 10 plis", "Te amo deus", "PiquMaria"]; //palavras escolhidas
  
  palavra = random(palavras); // configura para alearoriedade das palavras
}

function inicializaCores() {
  
  background("lightblue"); //fundo cor azul
  fill("darkgreen"); // cor das palavras
  textSize(64); // tamanho da palavra
  textAlign(CENTER, CENTER); // deixar texto alinhado
}

function draw() {
  
  inicializaCores()

  
  
  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length // comprimento da palavra
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
}
