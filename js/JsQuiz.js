/* Aula 20 MaiaQuiz  */
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let progresso = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img') // ADICIONE
let pergunta = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
  numQuestao: 0,
  imagem: '0.png', // ADICIONE
  pergunta: 'Pergunta',
  alternativaA: 'Alternativa A',
  alternativaB: 'Alternativa B',
  alternativaC: 'Alternativa C',
  alternativaD: 'Alternativa D',
  correta: '0'
}
const q1 = {
  numQuestao: 1,
  imagem: 'html.png', // ADICIONE
  pergunta: 'Como que todo código de HTML começa?',
  alternativaA: '<html></html>',
  alternativaB: '<!DOCTYPE html>',
  alternativaC: '<head></head>',
  alternativaD: '<start></start>',
  correta: '<!DOCTYPE html>'
}
const q2 = {
  numQuestao: 2,
  imagem: 'html.png', // ADICIONE
  pergunta: 'Qual tag que defini o título de uma página em HTML?',
  alternativaA: '<page></page>',
  alternativaB: '<title></title>',
  alternativaC: '<name><//name>',
  alternativaD: '<titulo></titulo>',
  correta: '<title></title>'
}
const q3 = {
  numQuestao: 3,
  imagem: 'html.png', // ADICIONE
  pergunta: 'Para que serve a tag <head></head>?',
  alternativaA: 'Para nomear o Website.',
  alternativaB: 'Para adicionar coisas na cabeça do Website.',
  alternativaC: 'Para Mudar o nome do site.',
  alternativaD: 'Para adicionar uma cor.',
  correta: 'Para adicionar coisas na cabeça do Website.'
}
const q4 = {
  numQuestao: 4,
  imagem: 'html.png', // ADICIONE
  pergunta: 'Para que serve a tag <body></body>?',
  alternativaA: 'Para adicionar coisas no corpo do Website.',
  alternativaB: 'Para escrever textos.',
  alternativaC: 'Para definir o tamanho do Website',
  alternativaD: 'Todas alternativas.',
  correta: 'Para adicionar coisas no corpo do Website.'
}
const q5 = {
  numQuestao: 5,
  imagem: 'html.png', // ADICIONE
  pergunta: 'Qual tag que defini um parágrafo em HTML?',
  alternativaA: '<text></text>',
  alternativaB: '<h1></h1>',
  alternativaC: '<p></p>',
  alternativaD: '<div></div>',
  correta: '<p></p>'
}
const q6 = {
  numQuestao: 6,
  imagem: 'html.png', // ADICIONE
  pergunta: 'Qual tag que coloca uma foto no Website?',
  alternativaA: '<photo>',
  alternativaB: '<video>',
  alternativaC: '<foto>',
  alternativaD: '<img>',
  correta: '<img>'
}
const q7 = {
  numQuestao: 7,
  imagem: 'html.png', // ADICIONE
  pergunta: 'Porque colocamos "/" nas tags?',
  alternativaA: 'Para fechar a tag.',
  alternativaB: 'Para começar a tag.',
  alternativaC: 'Para mudar o nome.',
  alternativaD: 'Nenhuma das alternativas.',
  correta: 'Para fechar a tag.'
}
const q8 = {
  numQuestao: 8,
  imagem: 'html.png', // ADICIONE
  pergunta:
    'Quais outras linguagens de programação o HTML deixa você utilizar junto com ela?',
  alternativaA: 'CSS e JavaScript',
  alternativaB: 'Lua e XML e CSS 3',
  alternativaC: 'PHP e JavaScript',
  alternativaD: 'CSS e HyperText Markup Language',
  correta: 'PHP e JavaScript'
}
const q9 = {
  numQuestao: 9,
  imagem: 'html.png', // ADICIONE
  pergunta: 'Em que ano foi criado a linguagem de programação "HTML"?',
  alternativaA: '1994',
  alternativaB: '1995',
  alternativaC: '1993',
  alternativaD: '1992',
  correta: '1993'
}
const q10 = {
  numQuestao: 10,
  imagem: 'html.png', // ADICIONE
  pergunta: 'Qual tag deixa o texto o maior possível em HTML?',
  alternativaA: '<h6></h6>',
  alternativaB: '<h1></h1>',
  alternativaC: '<h3></h3>',
  alternativaD: '<h4></h4>',
  correta: '<h1></h1>'
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = questoes.length - 1
console.log('Total de questões ' + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', '../assets/Quiz html/' + q1.imagem) // ADICIONE
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
  numero.textContent = nQuestao
  numQuestao.textContent = questoes[nQuestao].numQuestao
  imgQuestao.setAttribute(
    'src',
    '../assets/Quiz html/' + questoes[nQuestao].imagem
  ) // ADICIONE
  pergunta.textContent = questoes[nQuestao].pergunta
  a.textContent = questoes[nQuestao].alternativaA
  b.textContent = questoes[nQuestao].alternativaB
  c.textContent = questoes[nQuestao].alternativaC
  d.textContent = questoes[nQuestao].alternativaD
  a.setAttribute('value', nQuestao + 'A')
  b.setAttribute('value', nQuestao + 'B')
  c.setAttribute('value', nQuestao + 'C')
  d.setAttribute('value', nQuestao + 'D')
  progresso.value = parseInt(progresso.value) + 1
  //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
  //console.log('Duplo clique')
  pontos -= 10 // tirar 10 pontos em caso de duplo click
  if (numQuestao.value == 10 && pontos == 110) {
    pontos = 100
  }
})

function bloquearAlternativas() {
  alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
  alternativas.classList.remove('bloqueado')
}

function tirarPiscar() {
  articleQuestoes.classList.remove('acertou')
  articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {
  let numeroDaQuestao = nQuestao.value
  console.log('Questão ' + numeroDaQuestao)

  let respostaEscolhida = resposta.textContent
  //console.log("RespU " + respostaEscolhida)

  let certa = questoes[numeroDaQuestao].correta
  //console.log("RespC " + certa)

  if (respostaEscolhida == certa) {
    //console.log("Acertou")
    //respostaEsta.textContent = "Correta 😊"
    pontos += 10 // pontos = pontos + 10
    if (nQuestao.value == 1 && pontos == 20) {
      pontos = 10
    }
  } else {
    //console.log("Errou!")
    //respostaEsta.textContent = "Errada 😢"
  }
  setTimeout(() => {
    tirarPiscar()
  }, 150)

  // atualizar placar
  placar = pontos
  instrucoes.textContent = 'Pontos ' + placar

  // bloquear a escolha de opcoes
  bloquearAlternativas()

  setTimeout(function () {
    proxima = numeroDaQuestao + 1

    if (proxima > totalDeQuestoes) {
      console.log('Fim do Jogo!')
      fimDoJogo()
    } else {
      proximaQuestao(proxima)
    }
  }, 150)
  desbloquearAlternativas()
}

function fimDoJogo() {
  let s = 's'
  pontos == 0 ? (s = '') : (s = s)
  instrucoes.textContent =
    'Fim de Jogo! Você conseguiu ' + pontos + ' ponto' + s

  instrucoes.classList.add('placar')

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestoes.style.display = 'none'

  setTimeout(function () {
    pontos = 0 // zerar placar
    //location.reload();
    instrucoes.classList.remove('placar')
    // REINICIAR O JOGO
    articleQuestoes.style.display = 'block'
    proximaQuestao(1)
    instrucoes.textContent = 'Leia a questão e clique na resposta correta'
  }, 8000)
}
