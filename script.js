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

    //TENTAR ACESSAR O SERVIDOR
    try{
        const response = await fetch(API_URL + fromCurrency.value)
        const data = await response.json()
        //console.log(data);
        //const rate = data.rates.USD
        console.log(toCurrency);
        
    }
    catch(error){
        alert("Falha no servidor!")
    }
}

fomula.addEventListener("submit", function (event){
    event.preventDefault()
    convertMoney()
})