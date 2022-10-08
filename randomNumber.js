// var n = Math.random();
// n = n*6;
// n = Math.floor(n);
// console.log(n);

/<--------LOVE SCORE CALCULATOR------>/
prompt("What is your name: ");
prompt("What is thrie name: ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if(loveScore > 70){
    alert("Your Love Score is " + loveScore + "%"+" You both made for each other.");
}
else{
    alert("Your Love Score is " + loveScore + "%")
}