const perguntas = [
    // Pergunta 1
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var x = 10;",
            "variable x = 10;",
            "let x = 10;",
        ],
        correta: 2
    },
    // Pergunta 2
    {
        pergunta: "Qual desses métodos é usado para exibir uma janela de alerta com uma mensagem em JavaScript?",
        respostas: [
            "msgBox('Hello World');",
            "alertBox('Hello World');",
            "alert('Hello World');",
        ],
        correta: 2
    },
    // Pergunta 3
    {
        pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
        respostas: [
            "&",
            "+",
            "-",
        ],
        correta: 1
    },
    // Pergunta 4
    {
        pergunta: "O que o método 'getElementById' faz em JavaScript?",
        respostas: [
            "Obtém um elemento pelo seu nome de classe.",
            "Obtém um elemento pelo seu ID.",
            "Obtém um elemento pelo seu nome de tag.",
        ],
        correta: 1
    },
    // Pergunta 5
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
        respostas: [
            "function",
            "func",
            "method",
        ],
        correta: 0
    },
    // Pergunta 6
    {
        pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "addToEnd()",
        ],
        correta: 0
    },
    // Pergunta 7
    {
        pergunta: "Qual dessas opções é um operador de comparação em JavaScript?",
        respostas: [
            "<>",
            "==",
            "||",
        ],
        correta: 1
    },
    // Pergunta 8
    {
        pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
        respostas: [
            "// Comentário",
            "/* Comentário */",
            "' Comentário",
        ],
        correta: 0
    },
    // Pergunta 9
    {
        pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "remove()",
            "pop()",
            "delete()",
        ],
        correta: 1
    },
    // Pergunta 10
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Compara o valor e o tipo de dois operandos.",
            "Atribui um valor a uma variável.",
            "Compara o valor de dois operandos.",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}