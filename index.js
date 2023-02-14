function randomNum1() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}
function randomNum2() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}



switch (randomNum1()) {
    case 1:
        document.getElementById("one").src = "./images/dice1.png";
      break;
    case 2:
        document.getElementById("one").src = "./images/dice2.png";
      break;
    case 3:
        document.getElementById("one").src = "./images/dice3.png";
      break;
    case 4:
        document.getElementById("one").src = "./images/dice4.png";
      break;
    case 5:
        document.getElementById("one").src = "./images/dice5.png";
      break;
    case 6:
        document.getElementById("one").src = "./images/dice6.png";
  }


  switch (randomNum2()) {
    case 1:
        document.getElementById("two").src = "./images/dice1.png";
      break;
    case 2:
        document.getElementById("two").src = "./images/dice2.png";
      break;
    case 3:
        document.getElementById("two").src = "./images/dice3.png";
      break;
    case 4:
        document.getElementById("two").src = "./images/dice4.png";
      break;
    case 5:
        document.getElementById("two").src = "./images/dice5.png";
      break;
    case 6:
        document.getElementById("two").src = "./images/dice6.png";
  }

  // if(randomNum1() > randomNum2()){
  //   document.getElementById("demo").innerHTML = ("PLAYER 1 IS WINNER ")
  // } else if(randomNum1() < randomNum2()){
  //   document.getElementById("demo").innerHTML = ("PLAYER 2 IS WINNER")
  // } else{
  //   document.getElementById("demo").innerHTML = ("DRAW")
  // }




