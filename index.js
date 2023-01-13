var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
randomimg1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimg1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
randomimg2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomimg2);

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
