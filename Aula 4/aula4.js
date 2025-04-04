//Create chars list
charPlayer = ["","",""]

charComputer = ["","",""]

function play(){
    powerPlayer = 0
    powerComputer = 0

    for(let i = 0; i < 3;i++){
        charPlayer[i] = prompt("Pick your characters' names:\n" + (i+1) + " - ")
        powerPlayer += power()
    }


    for(let i = 0; i < 3;i++){
        charComputer[i] = randomChar()
        powerComputer += power()
    }

    finalVeredict(powerPlayer,powerComputer)
    console.log(charPlayer)
    console.log(powerPlayer)
    console.log(charComputer)
    console.log(powerComputer)
}

function randomChar() {
    charPicker = Math.floor(Math.random() * 15)
    charList = [
        "Kaido",
        "Frieza",
        "Light Yagami",
        "Dio Brando",
        "Aizen Sosuke",
        "Meruem",
        "Shou Tucker",
        "Crocodile",
        "All For One",
        "Makoto Shishio",
        "Envy",
        "Char Aznable",
        "Esdeath",
        "Ragyo Kiryuin",
        "Yhwach"
      ];
    return charList[charPicker];
}


//Measure each char's power

function power(){
    powerValue = Math.floor(Math.random() * 10) + 1;
    console.log(powerValue)
    return powerValue
}

//Compare both teams

function finalVeredict(player , computer){
    if(player > computer){
        alert("Congrats!\nYou are lucky :D")
    }else if(player == computer){
        alert("Hmm...\nSomehow both teams are pretty even and they've been fighting for 5 months now")
    }else{
        alert("HAHA\nYou lost\nTHE GAME!")
    }
}