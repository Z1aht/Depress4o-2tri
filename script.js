const caixaPrincipal = document.quarySelector(".caixa-principal");
const caixaPerguntas = document.quarySelector(".caixa-perguntas");
const caixaAlternativas = document.quarySelector(".caixa-alternativas");
const caixaResultado = document.quarySelector(".caixa-resultado");
const textoResultado = document.quarySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: " Em uma noite fria você anda pelas nas da sua cidade pacata, a caminho de casa, quando no meio do caminho você percebe uma sombra lhe seguindo, você:",
    alternativas;[
    {
      texto: " continua andando ignorando a sombra e tentando chegar en casa rapido",
      afirmação: "afirmação",
    },
    {
      texto: " se vira e pergunta em voz alta:  'Quem está ai? Apareça!' ",
      afirmação: "afirmação",
    },
  ]
},
{
  enunciado: "Eventualmente a figura sai das sombras e te alcança, você a reconhece como um amigo(a) muito próximo",
  alternativas;[
  {
    texto: "se assusta com o encontro repentino e se afasta rapidamente dele(a) 'Que porra é essa? Por que está me seguindo como um psicopata?'",
    afirmação: "afirmação",
  },
  {
    texto: "coloca a mão no peito e suspira de alivio 'que susto, nunca faça isso de novo'",
    afirmação: "afirmação",
  },
]
},
{
  enunciado: "Sem falar nada ele(a) apenas agarra seu braço e sai te puxando para a direção oposta a de sua casa",
  alternativas;[
  {
    texto:  "apenas deixa ele(a) te puxar para onde quer que estejam indo pois confia nele(a)",
    afirmação: "afirmação",
  },
  {
    texto: "luta contra o aperto e tenta se afastar 'o que carahos você quer comigo, me solta'",
    afirmação: "afirmação",
  },
]
},
{
  enunciado: "Após um tempo em silencio você é arrastado para um armazem estranho no meio do nada",
  alternativas;[
  {
    texto: "'onde estamos? Por que estamos aqui? RESPONDE'",
    afirmação: "afirmação",
  },
  {
    texto: "'Ok seu estranho, eu vou pra casa, me recuso a ficar aqui' Após ser solto você sai correndo",
    afirmação: "afirmação",
  },
]
},
{
  enunciado: " A porta de saida foi trancada, qual a sua ultima ação?",
  alternativas;[
  {
    texto: "Pular a janela, só quero ir para casa",
    afirmação: "afirmação",
  },
  {
    texto: "Se virar e demandar a chave",
    afirmação: "afirmação",
  },
]
},

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
 /*    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }   */ 
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
 /* caixaAlternativas.textContent = ""; */
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacoes; /* mudar para opcaoSelecionada.afirmacao*/
            historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
function mostraResultado(){
    caixaPerguntas.textContent = "De acordo com suas respostas, o seu destino foi:"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="Morte";
  
mostraPergunta();
