var randomNumber = Math.random() * 6 + 1;
var randomNumber1 = Math.floor(randomNumber)
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource)



var randomnumber = Math.random() * 6 + 1;
var randomNumber2 = Math.floor(randomnumber)
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2)
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}