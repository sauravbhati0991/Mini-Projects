let boxes = document.querySelectorAll('.box');
let reset_game = document.querySelector('.game_btn');
let winning = document.querySelector('#msg');
let turnO = true;
let win_pat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turnO = true;
    enableBtn();
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.style.color = "black";
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    winning.classList.add('hide');
    reset_game.innerText = "Reset Game";
}
const checkWinner = () => {
    for(let pattern of win_pat){
        let Val1 = boxes[pattern[0]].innerText;
        let Val2 = boxes[pattern[1]].innerText;
        let Val3 = boxes[pattern[2]].innerText;
        if(Val1 != "" && Val2 != "" && Val3 != ""){
            if(Val1 === Val2 && Val2 === Val3){
                console.log("Winner", Val1);
                winning.classList.remove('hide');
                winning.innerText = `Congratulations! Winner is ${Val1}`;
                reset_game.innerText = "New Game";
                disableBtn();
            }
        }
    }
};
reset_game.addEventListener("click",resetGame);