const blueCards = [
    {Color: "blue", Contents: 0},
    {Color: "blue", Contents: 1},
    {Color: "blue", Contents: 1},
    {Color: "blue", Contents: 2},
    {Color: "blue", Contents: 2},
    {Color: "blue", Contents: 3},
    {Color: "blue", Contents: 3},
    {Color: "blue", Contents: 4},
    {Color: "blue", Contents: 4},
    {Color: "blue", Contents: 5},
    {Color: "blue", Contents: 5},
    {Color: "blue", Contents: 6},
    {Color: "blue", Contents: 6},
    {Color: "blue", Contents: 7},
    {Color: "blue", Contents: 7},
    {Color: "blue", Contents: 8},
    {Color: "blue", Contents: 8},
    {Color: "blue", Contents: 9},
    {Color: "blue", Contents: 9},
]
const yellowCards = [
    {Color: "yellow", Contents: 0},
    {Color: "yellow", Contents: 1},
    {Color: "yellow", Contents: 1},
    {Color: "yellow", Contents: 2},
    {Color: "yellow", Contents: 2},
    {Color: "yellow", Contents: 3},
    {Color: "yellow", Contents: 3},
    {Color: "yellow", Contents: 4},
    {Color: "yellow", Contents: 4},
    {Color: "yellow", Contents: 5},
    {Color: "yellow", Contents: 5},
    {Color: "yellow", Contents: 6},
    {Color: "yellow", Contents: 6},
    {Color: "yellow", Contents: 7},
    {Color: "yellow", Contents: 7},
    {Color: "yellow", Contents: 8},
    {Color: "yellow", Contents: 8},
    {Color: "yellow", Contents: 9},
    {Color: "yellow", Contents: 9},
]

const redCards = [
    {Color: "red", Contents: 0},
    {Color: "red", Contents: 1},
    {Color: "red", Contents: 1},
    {Color: "red", Contents: 2},
    {Color: "red", Contents: 2},
    {Color: "red", Contents: 3},
    {Color: "red", Contents: 3},
    {Color: "red", Contents: 4},
    {Color: "red", Contents: 4},
    {Color: "red", Contents: 5},
    {Color: "red", Contents: 5},
    {Color: "red", Contents: 6},
    {Color: "red", Contents: 6},
    {Color: "red", Contents: 7},
    {Color: "red", Contents: 7},
    {Color: "red", Contents: 8},
    {Color: "red", Contents: 8},
    {Color: "red", Contents: 9},
    {Color: "red", Contents: 9},
]

const greenCards = [
    {Color: "green", Contents: 0},
    {Color: "green", Contents: 1},
    {Color: "green", Contents: 1},
    {Color: "green", Contents: 2},
    {Color: "green", Contents: 2},
    {Color: "green", Contents: 3},
    {Color: "green", Contents: 3},
    {Color: "green", Contents: 4},
    {Color: "green", Contents: 4},
    {Color: "green", Contents: 5},
    {Color: "green", Contents: 5},
    {Color: "green", Contents: 6},
    {Color: "green", Contents: 6},
    {Color: "green", Contents: 7},
    {Color: "green", Contents: 7},
    {Color: "green", Contents: 8},
    {Color: "green", Contents: 8},
    {Color: "green", Contents: 9},
    {Color: "green", Contents: 9},

]

const specialCards = [
    {Color: "blue", Contents: "+2"},
    {Color: "red", Contents: "+2"},
    {Color: "green", Contents: "+2"},
    {Color: "yellow", Contents: "+2"},
    {Color: "blue", Contents: "+2"},
    {Color: "red", Contents: "+2"},
    {Color: "green", Contents: "+2"},
    {Color: "yellow", Contents: "+2"},

    {Color: "blue", Contents: "Skip"},
    {Color: "red", Contents: "Skip"},
    {Color: "green", Contents: "Skip"},
    {Color: "yellow", Contents: "Skip"},
    {Color: "blue", Contents: "Skip"},
    {Color: "red", Contents: "Skip"},
    {Color: "green", Contents: "Skip"},
    {Color: "yellow", Contents: "Skip"},

    {Color: "blue", Contents: "Reverse"},
    {Color: "red", Contents: "Reverse"},
    {Color: "green", Contents: "Reverse"},
    {Color: "yellow", Contents: "Reverse"},
    {Color: "blue", Contents: "Reverse"},
    {Color: "red", Contents: "Reverse"},
    {Color: "green", Contents: "Reverse"},
    {Color: "yellow", Contents: "Reverse"},
]

const wildCards = [
    "Change Color",
    "Change Color",
    "Change Color",
    "Change Color",
    "Draw 4",
    "Draw 4",
    "Draw 4",
    "Draw 4",
]

let cardDeck = [blueCards, yellowCards, redCards, greenCards, specialCards, wildCards]

let placedCards = []

function newCard(color, content, parent){
    let card = document.createElement("div")
    card.classList.add(`card`)
    card.classList.add(`${color}`)
    document.body.appendChild(card)
    parent.push(card)
}

function placeCard(card, parent){
    parent.splice(parent.indexOf(card), 1)
    placedCards.push(card)
    console.log(placedCards, parent)
}

function getCardDeckLength(){
    let totalLength = 0
    cardDeck.forEach((cardArray) => totalLength += cardArray.length)
    return totalLength
}

let playerDeck = []
let aiDeck = []

let plrTurn = true

function giveCard(typeIndex){
    const chosenCardType = cardDeck[typeIndex]
    const cardIndex = Math.floor((Math.random() * chosenCardType.length))
    const cardObj = chosenCardType[cardIndex]
    const card = newCard(cardObj.Color, cardObj.Contents, playerDeck)
    console.log(card, cardIndex)
    cardDeck[typeIndex].splice(cardIndex, 1)
    console.log(cardDeck)

}

setTimeout(() => {giveCard(1)}, 1000)