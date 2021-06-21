function firstVerify() {
    let yesNo = prompt('Olá, deseja participar da nossa Trivia? \n Sim/Não')
    if (yesNo.toLowerCase() === 'sim') {
        let name = prompt('Mas antes de começar, preciso saber seu nome: ')
        alert(`Muito bem ${name}! Vamos para primeira pergunta! :)`)
        document.getElementById('congratulations').innerHTML += `${name}, PARABÉNS!!!`
        return true
    } else if (yesNo.toLowerCase() === 'não') {
        alert('É pena ;( Até a próxima!!! :)')
        return false
    } else {
        alert('RESPOSTA INVÁLIDA! Aperte F5 para recomeçar :)')
        return false
    }
}

function isValidateAnswer(answer) {
    if (answer === '1' || answer === '2' || answer === '3') {
        return true
    } else {
        alert('RESPOSTA INVÁLIDA! Aperte F5 para recomeçar :)')
        return false
    }
}


function gameOne() {
    let firstQuestion = prompt('Quem ganhou o BBB21? \n\n [1] Peppa Pig \n [2] Gil do Vigor \n [3] Juliete')
    if (isValidateAnswer(firstQuestion)) {
        if (firstQuestion == '3') {
            document.getElementById('correct').innerHTML += '<p>Questão 1 <\p>'
            return true
        } else {
            document.getElementById('incorrect').innerHTML += '<p>Questão 1 <\p>'
            return true
        }
    }
}

function gameTwo() {
    let secondQuestion = prompt('Qual o nome do apresentador do Calderão do Hulk? \n\n [1] Gugu \n [2] Luciano \n [3] Faustão')
    if (isValidateAnswer(secondQuestion)) {
        if (secondQuestion == '2') {
            document.getElementById('correct').innerHTML += '<p>Questão 2 <\p>'
            return true
        } else {
            document.getElementById('incorrect').innerHTML += '<p>Questão 2 <\p>'
            return true
        }
    }
}

function gameThree() {
    let thirdQuestion = prompt('Nome da vilã de AV Brasil? \n\n [1] Carmem \n [2] Nazaré \n [3] Carminha')
    if (isValidateAnswer(thirdQuestion)) {
        if (thirdQuestion == '3') {
            document.getElementById('correct').innerHTML += '<p>Questão 3 <\p>'
            return true
        } else {
            document.getElementById('incorrect').innerHTML += '<p>Questão 3 <\p>'
            return true
        }
    }
}

if (firstVerify() === true) {
    if (gameOne() === true) {
        if (gameTwo() === true) {
            if (gameThree() === true) {

            }
        }
    }
}
