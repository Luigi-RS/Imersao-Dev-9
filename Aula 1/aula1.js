function conversorBrl() {
    conversionRate = 0.003856
    moneyIn = prompt("Digite um valor em wons:")
    moneyOut = (moneyIn * conversionRate)
    alert((moneyOut).toLocaleString("pt-BR",{style: "currency", currency: "BRL"}))
}

function conversorDol() {
    conversionRate = 0.0006813
    moneyIn = prompt("Digite um valor em wons:")
    moneyOut = (moneyIn * conversionRate)
    alert((moneyOut).toLocaleString("en-US",{style: "currency", currency: "USD"}))
}

function conversorEur() {
    conversionRate = 0.0006241
    moneyIn = prompt("Digite um valor em wons:")
    moneyOut = (moneyIn * conversionRate)
    alert((moneyOut).toLocaleString("it-IT",{style: "currency", currency: "EUR"}))
}