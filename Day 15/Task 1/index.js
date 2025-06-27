var rnd1=Math.random();
var n1=Math.floor(rnd1*6)+1;
var randomDiceImage = "dice"+n1+".png"; //dice1
var randomImageSource = "images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var rnd2=Math.random();
var n2=Math.floor(rnd2*6)+1;
var randomDiceImage = "dice"+n2+".png"; //dice2
var randomImageSource = "images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource);


if (n1>n2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
} 
else if (n1<n2) {
     document.querySelector("h1").innerHTML="🚩 Player 2 Wins!";
} 
else {
    document.querySelector("h1").innerHTML="It's a Draw!";
}
