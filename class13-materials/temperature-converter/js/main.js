//Write your pseduo code first! 
// 0 -> 32
//need the value in celsius
//convert from celcius to farenheight
//show it 


document.querySelector('#yell').addEventListener('click', convert)

function convert(){
    let temp = document.querySelector('#sel').value
    temp = temp * 9/5 + 32

    document.querySelector('#placeToYell').innerText = temp
}

