// podemos colocar vários valores
// sempre começa do 0
// const perguntas = [
//   {
//     pergunta: "Pergunta 01",
//     respostas: [
//       "Resposta A", // esse é o 0
//       "Resposta B", // esse é o 1
//       "Resposta C", // esse é o 2
//     ],
//     correta: 2
//   }
// ]

const perguntas = [
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retorna o tipo de uma variável ou expressão.",
        "Concatena duas strings.",
        "Retorna o valor de uma variável.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variavel = 10;",
        "let = 5;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "'==' compara apenas os valores, enquanto '===' compara os valores e os tipos de dados.",
        "'==' compara os valores e os tipos de dados, enquanto '===' compara apenas os valores.",
        "Não há diferença entre eles, ambos são utilizados para comparação de valores.",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Converte uma string em um número inteiro.",
        "Converte um número em uma string.",
        "Retorna verdadeiro se um número é par e falso se for ímpar.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '3 + 2 + '5' em JavaScript?",
      respostas: [
        "'10'",
        "'7'",
        "'35'",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "Retorna verdadeiro se ambos os operandos forem verdadeiros, senão retorna falso.",
        "Retorna verdadeiro se pelo menos um dos operandos for verdadeiro, senão retorna falso.",
        "Retorna verdadeiro se pelo menos um dos operandos for falso, senão retorna verdadeiro.",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'forEach()' faz em JavaScript?",
      respostas: [
        "Executa uma função uma vez para cada elemento do array.",
        "Remove o primeiro elemento de um array.",
        "Adiciona um elemento ao final de um array.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão 'typeof null' em JavaScript?",
      respostas: [
        "'null'",
        "'undefined'",
        "'object'",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      respostas: [
        "/* Comentário */",
        "// Comentário",
        "<!-- Comentário -->",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'map()' faz em JavaScript?",
      respostas: [
        "Cria um novo array com os resultados da chamada de uma função para cada elemento do array.",
        "Remove elementos duplicados de um array.",
        "Inverte a ordem dos elementos de um array.",
      ],
      correta: 0
    }
  ];
                  // querySelector seleciona tags
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // true
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }