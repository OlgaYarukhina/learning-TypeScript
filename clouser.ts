let player1: number = 0;
let player2: number = 0;

function getScore (){
    let score = 0;
    return function add (x: number):number {
        return score = score + x;
       
    }
};

let getForPlayer1: any = getScore();
let getForPlayer2: any = getScore();

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