function startGame(game, countCard) {
    let player = prompt('enter your name')
    let cardNumberArr = []

let firstCard = null
let secondCard = null

for(let i = 1; i <= countCard; i++) {
    cardNumberArr.push(i, i);
}

for (let i = 0; i < cardNumberArr.length; i++) {
    let randomIndex = Math.floor(Math.random() * cardNumberArr.length)

    let temp = cardNumberArr[i]
    cardNumberArr[i] = cardNumberArr[randomIndex]
    cardNumberArr[randomIndex] = temp
};


cardNumberArr.forEach((number) => {
    let card = document.createElement('div')
    card.textContent = number
    card.classList.add('card')

    card.addEventListener('click', () => {
        if(card.classList.contains('open') || card.classList.contains('success')) {
            return
        }

        if(firstCard !== null && secondCard !== null) {
                firstCard.classList.remove('open')
                secondCard.classList.remove('open')
                firstCard = null
                secondCard = null

        }

        card.classList.add('open')

        if (firstCard === null) {
            firstCard = card
        } else {
            secondCard = card
        }

 
        if(firstCard !== null && secondCard !== null) {
            if(firstCard.textContent === secondCard.textContent) {
                firstCard.classList.add('success')
                secondCard.classList.add('success')
            }
        }

        if(cardNumberArr.length === document.querySelectorAll('.success').length) {
            setTimeout(()=> {

                game.innerHTML = ''
                alert(`congratulation ${player}`)
                let countCard = +prompt('enter your number', 4)


                startGame(game, countCard)
            }, 400)
        }
       
       
    })
    

    game.append(card)
})
}


let game = document.querySelector('.game')
let countCard = +prompt('enter your number', 4)
startGame(game, countCard)