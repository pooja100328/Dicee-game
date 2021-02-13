//alert("Welcome");
//var player1 = prompt("Enter first player name");
//var player2 = prompt("Enter second player name");


//for first image
var x1 = 6 * (Math.random());
var y1 = Math.floor(x1) + 1;//generate random number b/w 1-6

var randomimage1 = "dice" + y1 + ".png";//dice1-dice6.png

var srcimage1 = "images/" + randomimage1;//images/dice1-dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", srcimage1);


//for second image

//var x2 = 6 * (Math.random());
var y2 = Math.floor(6 * Math.random()) + 1;

//var randomimage2 = "dice" + y2 + ".png";

var srcimage2 = "images/dice" + y2 + ".png";//combined 2 steps

//var image2 = document.querySelectorAll("img")[1];

document.querySelectorAll("img")[1].setAttribute("src", srcimage2);//combined 2 steps




if(y1===y2){
  document.querySelector("h1").innerText="Draw";
}
else if(y1>y2){
  document.querySelector("h1").innerText="Player 1 wins";
}
else{
  document.querySelector("h1").innerText="Player 2 wins";
}
