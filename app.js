const cardArray = [
  {
    name: "one",
    img: "image/one.png",
  },
  {
    name: "two",
    img: "image/two.png",
  },
  {
    name: "three",
    img: "image/three.png",
  },
  {
    name: "four",
    img: "image/four.png",
  },
  {
    name: "five",
    img: "image/five.png",
  },
  {
    name: "six",
    img: "image/six.png",
  },
  {
    name: "one",
    img: "image/one.png",
  },
  {
    name: "two",
    img: "image/two.png",
  },
  {
    name: "three",
    img: "image/three.png",
  },
  {
    name: "four",
    img: "image/four.png",
  },
  {
    name: "five",
    img: "image/five.png",
  },
  {
    name: "six",
    img: "image/six.png",
  },
];

// console.log(cardArray);

cardArray.sort(() => 0.5 - Math.random()); // randomly

const gridDisplay = document.querySelector("#grid"); //search whole thing and find ig grid

const resultDisplay = document.querySelector("#result");

let cardsChosen = [];
let cardsChosenIds = [];
let cardsKnown = [];

// console.log(gridDisplay)

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "image/blank1.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);

    //    console.log(card, i)
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img"); // #grid id you can use this for larger project

  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  console.log(cards);

  console.log("check for match!");

  if (optionOneId == optionTwoId) {
    alert("You have clicked the same image!");
    window.location.reload();
    cards[optionOneId].setAttribute("src", "image/blank1.png");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("🎉🎉🎉🎉Impressive!! You found a match!!🎉🎉🎉🎉");
    cards[optionOneId].setAttribute("src", "image/white.png");
    cards[optionTwoId].setAttribute("src", "image/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsKnown.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "image/blank1.png");
    cards[optionTwoId].setAttribute("src", "image/blank1.png");
    alert("☹️☹️☹️☹️Sorry try again!!☹️☹️☹️☹️");
  }
  resultDisplay.innerHTML = cardsKnown.length; //

  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsKnown.length == cardArray.length / 2) {
    resultDisplay.innerHTML =
      "🙌🙌🙌🙌Congratulations you find them all!!🙌🙌🙌🙌";
  }
}

function flipCard() {
  // console.log(cardArray)
  const cardId = this.getAttribute("data-id");
  // console.log(cardArray[cardId].name)
  cardsChosen.push(cardArray[cardId].name);
  // console.log(cardsChosen)
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);

  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 300); // 400 miliseconds
  }
}
