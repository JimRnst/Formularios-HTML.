const btnMinusVB = document.querySelector('#btn-minus-VB');
const btnPlusVB = document.querySelector('#btn-plus-VB');
const btnMinusLS = document.querySelector('#btn-minus-LS');
const btnPlusLS = document.querySelector('#btn-plus-LS');
const inpVb = document.querySelector('input#inpVB');
const inpLs = document.querySelector('input#inpLS');
const totalInp = document.querySelector('#total');


const vbPrice = 54.99;
let countVB = 0;
let totalVB = 0;

const lsPrice = 74.99;
let countLS = 0;
let totalLS = 0;

let total = 0;

console.log(totalInp);


const app = () => {
    btnMinusVB.addEventListener('click', () => {
        if(countVB > 0){
            countVB--;
        }
        inpVb.value = countVB
        totalVB = countVB * vbPrice
        total = (totalVB + totalLS) + 19;
        totalInp.innerText = total.toFixed(2)
    })
    
    btnPlusVB.addEventListener('click', () => {
        if(countVB < 5){
            countVB++;
        }
        inpVb.value = countVB
        totalVB = countVB * vbPrice
        total = (totalVB + totalLS) + 19;
        totalInp.innerText = total.toFixed(2)
    })

    btnMinusLS.addEventListener('click', () => {
        if(countLS > 0){
            countLS--;
        }
        inpLs.value = countLS
        totalLS = countLS * lsPrice
        total = (totalVB + totalLS) + 19;
        totalInp.innerText = total.toFixed(2)
    })

    btnPlusLS.addEventListener('click', () => {
        if(countLS < 5){
            countLS++;
        }
        inpLs.value = countLS
        totalLS = countLS * lsPrice
        total = (totalVB + totalLS) + 19;
        totalInp.innerText = total.toFixed(2)
    })

}


window.addEventListener('DOMContentLoaded', app)