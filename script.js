const BASE_URL = 'https://latest.currency-api.pages.dev/v1/currencies'
 
const dropdowns = document.querySelectorAll('.dropdown select');

// dropdowns will have list of both select element in drop

const btn = document.querySelector('form button');
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
const result = document.querySelector('.result')


for (let select of dropdowns){                          
    for(currCode in countryList){
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        if (select.name === 'from' && currCode === 'USD'){
            newOption.selected = "selected";
        }
        if (select.name === 'to' && currCode === 'INR'){
            newOption.selected = "selected";
        }
    }
}

// update flag 
let fromSelect = document.querySelector('#from-select');
let toSelect = document.querySelector('#to-select');

fromSelect.addEventListener('change', () =>{
    updateFlag(fromSelect);
    })
toSelect.addEventListener('change', () =>{
    updateFlag(toSelect);
})

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newImgSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector('img')
    img.src = newImgSrc ?? ''
};


// exchange rate caluculations inside updateExhangeRate function 
const updateExchangeRate = async () => {
    let amount = document.querySelector('.amount input');
    let amtVal = Number(amount.value);

    if (amtVal < 0  || amtVal === ''){
        amtVal = 1;
        amount.value = '1';
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    
    let data = await response.json();

    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]

    let finalAmount = amtVal * rate;
    result.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}



window.addEventListener('load', () =>{      
    updateExchangeRate();
});

btn.addEventListener('click', (evt) =>{
    evt.preventDefault();
    updateExchangeRate();
});