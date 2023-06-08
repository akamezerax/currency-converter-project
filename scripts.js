const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")


const convertValues = async () => {
    const input = document.getElementById('input-coin').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValue = document.getElementById('currency-value-text')

    const data = await fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realValueText.innerHTML = input

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(input)

    if (select.value === "U$ Dólar americano") {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'USD' }
        ).format(input / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'EUR' }
        ).format(input / euro)
    }

    if (select.value === "Bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 8,}
        ).format(input / bitcoin)
    }
};

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'U$ Dólar americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/img/estados-unidos (1) 1.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/img/Euro.png"
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/img/bitcoin.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

