var player1 = 0;
var player2 = 0;
function getScore() {
    var score = 0;
    return function add(x) {
        return score = score + x;
    };
}
;
var getForPlayer1 = getScore();
var getForPlayer2 = getScore();
//Round 1
player1 = getForPlayer1(20);
player2 = getForPlayer2(200);
console.log(player1);
console.log(player2);
//Round 2
player1 = getForPlayer1(30);
player2 = getForPlayer2(300);
console.log(player1);
console.log(player2);
