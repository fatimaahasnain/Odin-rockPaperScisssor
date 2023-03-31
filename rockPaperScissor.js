userChoice= prompt('Enter your weapon: ');
const playerSelection=userChoice.toLowerCase()
const computerSelection= getComputerChoice();
console.log(computerSelection)
console.log(gameGround(playerSelection,computerSelection))

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

function  gameGround(playerSelection,computerSelection){
    msg='';
    if((playerSelection=='rock'&&computerSelection=='scissor')||(playerSelection=='scissor'&&computerSelection=='paper')||
    (playerSelection=='paper'&&computerSelection=='rock')){
        msg='PLayer won';}
        else if(playerSelection==computerSelection){
            msg='TIE!'
        }
        
        else {
            msg='Computer won!'
        }
return msg;
}


