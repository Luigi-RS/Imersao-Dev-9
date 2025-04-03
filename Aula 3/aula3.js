function play(){
    round = 1
    while(round <=3){
        playerChoice = 0
        while(playerChoice > 3 || playerChoice < 1 || isNaN(playerChoice)){
            playerChoice = prompt("Você está no nível " + round + "\nEscolha um vidro para avançar(1-3):")            
            if (playerChoice > 3 || playerChoice < 1 || isNaN(playerChoice)){
                alert("O número escolhido deve ser entre 1 e 3!!")
            }
        }
        brokenGlass = Math.floor(Math.random()*3) + 1;
        if(playerChoice == brokenGlass){
            alert("F")
            return
        }else if(round == 3){
            alert("Parabéns, você ganhou!!")
        }else{
            alert("Você sobreviveu...por enquanto")
        }

        round += 1        
    }
}