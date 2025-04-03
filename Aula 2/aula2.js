function changeToWeapon(x) {
    if(x == 1){
        return("Pedra")
    }else if(x == 2){
        return("Papel")
    }else{
        return("Tesoura")
    }
}

function jogar(){
    age = prompt("Qual a sua idade?")
    if (age < 18) {
        alert("Melhor não jogar")
    }else{
        alert("Pode jogar!")
        playerChoice = prompt("Digite:\n1 - Pedra\n2 - Papel\n3 - Tesoura")
        computerChoice = Math.floor(Math.random() * 3) + 1;

        if (playerChoice == computerChoice) {
            alert("Empate!")
        }else if (playerChoice == 1 && computerChoice == 3 || playerChoice == 2 && computerChoice == 1 || playerChoice == 3 && computerChoice == 2){
            alert("Você ganhou!")
        }else {
            alert("Você perdeu ;(")
        }
        alert("Você escolheu: " + changeToWeapon(playerChoice) + "\nO computador sorteou: " + changeToWeapon(computerChoice))
    }
}
