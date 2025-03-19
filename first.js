let userScore =0;
let compScore =0;

const choices =document.querySelectorAll(".choice");
const move =document.querySelector("#move");

const userScorePara =document.querySelector("#userScore");
const compScorePara =document.querySelector("#compScore");


const genCompChoice = () => {
    //rock,paper,scissors
    const options =["rock" ,"paper","scissors"];  //array
    const randIdx = Math.floor(Math.random() * 3); // 0.125....X 3 => 2.455..... always less than 3 (0-3)
    return options[randIdx];
};

const drawGame =() => {
    move.innerText ="DRAW , PLAY AGAIN 😑";
    move.style.backgroundColor ="blue";
}

const showWinner =(userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText =userScore;
        move.innerText ="YOU WIN 🥳 !!";
        move.style.backgroundColor ="green";
        

    }else{
        compScore++;
        compScorePara.innerText =compScore;
        move.innerText ="YOU LOSE 😵‍💫";
        move.style.backgroundColor ="red";

    }

}

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    const compChoice= genCompChoice();
    console.log("comp choice =  ", compChoice);

    if(userChoice === compChoice){
        //Draw choice 
        drawGame();
    }else{
        let userWin =true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false:true;
        }else if(userChoice ==="paper"){
            userWin = compChoice ==="scissors" ?false:true;
        }else{
            userWin =compChoice === "rock"? false:true;
        }
        showWinner(userWin);
        }
    };

    



choices.forEach((choice) => {
   
    choice.addEventListener("click",() => {
        const userChoice =choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});
