const caixaPrincipal = document.quarySelector(".caixa-principal");
const caixaPerguntas = document.quarySelector(".caixa-perguntas");
const caixaAlternativas = document.quarySelector(".caixa-alternativas");
const caixaResultado = document.quarySelector(".caixa-resultado");
const textoResultado = document.quarySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: " Em uma noite fria você anda pelas nas da sua cidade pacata, indo para casa, quando no meio do caminho você percebe uma sombra lhe seguindo, você:",
    alternativas: [
    {
      texto: " continua andando ignorando a sombra e tentando chegar em casa rápido",
      afirmação: "sua intuição parece estar a todo vapor, ela não indica que é algo bom.",
    },
    {
      texto: " se vira e pergunta em voz alta:  'Quem está ai? Apareça!' ",
      afirmação: "apesar de uma escolha boba, você sabe lutar e prefere que quem quer que seja não saiba onde você mora",
    },
  ]
},
{
  enunciado: "Eventualmente a figura sai das sombras e te alcança, você a reconhece como um amigo(a) muito próximo",
  alternativas: [
    {
      texto: "se assusta com o encontro repentino e se afasta rapidamente dele(a) 'Que porra é essa? Por que está me seguindo como um psicopata?'",
      afirmação: "a fato dele não ter se introduzido antes e estar apenas de seguindo lhe dá um mal pressentimento",
    },
    {
      texto: "coloca a mão no peito e suspira de alivio 'que susto, nunca faça isso de novo'",
      afirmação: "o alívio de reconhecer um resto familiar é o suficiente para ignorar o quão estranho isso é",
    },
  ]
},
{
  enunciado: "Sem falar nada ele(a) apenas agarra seu braço e sai te puxando para a direção oposta a de sua casa",
  alternativas: [
    {
      texto:  "apenas deixa ele(a) te puxar para onde quer que estejam indo pois confia nele(a)",
      afirmação: "provavelmente por estupidez ou simplesmente por que você confia nele(a), afinal, pode ser uma festa surpresa",
    },
    {
      texto: "luta contra o aperto e tenta se afastar 'o que caralhos você quer comigo, me solta'",
      afirmação: "a sesação que você sente desde o início lhe diz para ir embora, algo não está certo e você precisa ir embora",
    },
  ]
},
{
  enunciado: "Após um tempo em silencio você é arrastado para um armazem estranho no meio do nada",
  alternativas: [
    {
      texto: "'onde estamos? Por que estamos aqui? RESPONDE'",
      afirmação: "pronta para se defender mas ao mesmo tempo desesperada para sair, você uma resposta, procurando saídas",
    },
    {
    texto: "'Ok seu estranho, eu vou pra casa, me recuso a ficar aqui' Após ser solto você sai correndo",
    afirmação: "a sensação de alívio mudou para uma de estranheza e medo, ele(a) não falou uma palavra desde que se encontraram",
    },
  ]
},
{
  enunciado: " A porta de saida foi trancada, qual a sua ultima ação?",
  alternativas: [
    {
      texto: "Pular a janela, só quero ir para casa",
      afirmação: "apesar de ser arriscado e que doa, é a unica chance que você tem de correr antes que ele(a) faça algo",

    },
    {
    texto: "Se virar e demandar a chave",
    afirmação: "uma ação idiota, e isso pode te custar algo",
    },
  ]
},

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
        if(atual >= perguntas.length){
        mostraResultado();
        return;
    }   
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; 
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
            const afirmações = opcaoSelecionada.afirmacoes; 
            historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
function mostraResultado(){
    caixaPerguntas.textContent = "De acordo com suas respostas, o seu destino foi:"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="Morte";
  
mostraPergunta();
