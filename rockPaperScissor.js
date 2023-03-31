function getComputerChoice()
{
    let num =Math.floor(Math.random() * 4);
    choice=''
    if(num==1){
        choice='rock';
    }
    else 
    if(num==2){
        choice='paper';
    }
    else 
    if(num==3){
        choice='scissor';
    }
 return choice;
}

const playerSelection = "rock";
const computerSelection= getComputerChoice();
console.log(computerSelection)


