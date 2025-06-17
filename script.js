var fomula = document.getElementById('converterForm')
var amount = document.getElementById('amount')
var fromCurrency = document.getElementById('fromCurrency')
var convertedAmount = document.getElementById('convertedAmount')
var toCurrency = document.getElementById('toCurrency')
var butao = document.getElementById('converterBtn')
var loading = document.querySelector('.loading')
var result = document.querySelector('.result')
var error = document.querySelector('.error')

var API_URL = "https://api.exchangerate-api.com/v4/latest/"

async function convertMoney(){
    butao.style.display = "none"
    loading.style.display = "block"
    error.style.display = "none"
    result.style.display = "none"

    //TENTAR ACESSAR O SERVIDOR
    try{
        const response = await fetch(API_URL + fromCurrency.value)
        const data = await response.json()

        const rate = data.rates[toCurrency.value]
        const convertedRate = (amount.value * rate).toFixed(2)

        convertedAmount.value = convertedRate
        error.style.display = "none"
        result.style.display = "block"

        result.innerHTML = `
        <div style="font-size: 1.4rem;"> 
            ${amount.value} ${fromCurrency.value} = ${convertedAmount.value} ${toCurrency.value}
        <div/>

        <div style="font-size: 0.9rem; opacity: 0.8; margin-top: 10px;"> 
            Taxa: 1 ${fromCurrency.value} = ${rate}
        <div/>
        `
    }
    catch(err){
        error.style.display = "block"
        error.innerHTML = 'Falha ao converter moeda! Tente novamente.'
    }

    loading.style.display = "none"
}

fomula.addEventListener("submit", function (event){
    event.preventDefault()
    convertMoney()
})