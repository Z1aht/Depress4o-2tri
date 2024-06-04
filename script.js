const caixaPrincipal = document.quarySelector(".caixa-principal");
const caixaPerguntas = document.quarySelector(".caixa-perguntas");
const caixaAlternativas = document.quarySelector(".caixa-alternativas");
const caixaResultado = document.quarySelector(".caixa-resultado");
const textoResultado = document.quarySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Pergunta 1",
    alternativas;[
      "alternativa 1",
      "alternativa 2",
  ]
},
   {
    enunciado: "Pergunta 2",
    alternativas;[
      "alternativa 1",
      "alternativa 2",
  ]
},
 {
    enunciado: "Pergunta 3",
    alternativas;[
      "alternativa 1",
      "alternativa 2",
  ]
},
 {
    enunciado: "Pergunta 4",
    alternativas;[
      "alternativa 1",
      "alternativa 2",
  ]
},
 {
    enunciado: "Pergunta 5",
    alternativas;[
      "alternativa 1",
      "alternativa 2",
  ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativas){
  const botaoAlternativas = documeent.createElement("button");
  botaoAlternativas.textContent = alternativa;
  caixaAlternativas.appendChild(botaoAlternativas);
  }
}

mostraPergunta();
