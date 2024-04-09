let rock = document.querySelector('.option-1');
let paper = document.querySelector('.option-2');
let scicors = document.querySelector('.option-3');
let result = document.querySelector('.result');
let Myscore = document.querySelector('.Myscore');
let Compscore = document.querySelector('.Compscore');
let Reser_btn = document.querySelector('.reset_btn');
const randomChoice = () => {
    let num = Math.random()*3;
    let computerChoice;
    if(num>0 && num<=1){
        computerChoice = "rock";
    }
    else if(num<=2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scisors";
    }
    console.log(computerChoice);
    return computerChoice;
};
let Your_score = 0;
let Comp_score = 0;
const rockChoice = () => {
    if(randomChoice() === 'rock'){
        Comp_score+=0.5;
        Your_score+=0.5;
        Compscore.innerText = `${Comp_score}`;
        Myscore.innerText = `${Your_score}`;
        result.innerText = "It's a Tie! Computer Choices ROCK.";
    }
    else if(randomChoice() === 'paper'){
        Comp_score++;
        Compscore.innerText = `${Comp_score}`;
        result.innerText = "You Loss! Computer Choices PAPER.";
    }
    else{
        Your_score++;
        Myscore.innerText = `${Your_score}`;
        result.innerText = "You Won! Computer Choices SCICORS.";
    }
    limit();
}
const paperChoice = () => {
    if(randomChoice() === 'rock'){
        Your_score++;
        Myscore.innerText = `${Your_score}`;
        result.innerText = "You Won! Computer Choices ROCK.";
    }
    else if(randomChoice() === 'paper'){
        Comp_score+=0.5;
        Your_score+=0.5;
        Compscore.innerText = `${Comp_score}`;
        Myscore.innerText = `${Your_score}`;
        result.innerText = "It's a Tie! Computer Choices PAPER.";
    }
    else{
        Comp_score++;
        Compscore.innerText = `${Comp_score}`;
        result.innerText = "You Loss! Computer Choices SCICORS.";
    }
    limit();
}
const scicorsChoice = () => {
    if(randomChoice() === 'rock'){
        Comp_score++;
        Compscore.innerText = `${Comp_score}`;
        result.innerText = "You Loss! Computer Choices ROCK."
    }
    else if(randomChoice() === 'paper'){
        Your_score++;
        Myscore.innerText = `${Your_score}`;
        result.innerText = "You Won! Computer Choices PAPER."
    }
    else{
        Comp_score+=0.5;
        Your_score+=0.5;
        Compscore.innerText = `${Comp_score}`;
        Myscore.innerText = `${Your_score}`;
        result.innerText = "It's a Tie! Computer Choices SCICORS."
    }
    limit();
}

const limit = () =>{
    if(Your_score >= 10){
        result.innerText = "Congratulations! You Won the Game";
        rock.removeEventListener("click", rockChoice);
        paper.removeEventListener("click", paperChoice);
        scicors.removeEventListener("click", scicorsChoice);
    }
    else if(Comp_score >=10){
        result.innerText = "Better Luck Next Time";
        rock.removeEventListener("click", rockChoice);
        paper.removeEventListener("click", paperChoice);
        scicors.removeEventListener("click", scicorsChoice);
    }
}

const Reset = () => {
    Your_score = 0;
    Comp_score = 0;
    Compscore.innerText = `${Comp_score}`;
    Myscore.innerText = `${Your_score}`;
    result.innerText = "Result";
    rock.addEventListener("click", rockChoice);
    paper.addEventListener("click", paperChoice);
    scicors.addEventListener("click", scicorsChoice);
}
Reser_btn.addEventListener("click", Reset)
rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scicors.addEventListener("click", scicorsChoice);