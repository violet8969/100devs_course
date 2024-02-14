// *Variables*
// Create a variable and console log the value
let soupTime = "Miso"
console.log(soupTime)
// Create a variable, add 10 to it, and alert the value
let proteinAmount = 5
proteinAmount = proteinAmount+ 10
alert(proteinAmount)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substactFourNumbers(num1, num2, num3, num4){
    let subtractResult = num1 - num2 - num3 - num4
    alert(subtractResult)
}
substactFourNumbers(50, 10, 5, 1)
    
// Create a function that divides one number by another and returns the remainder
function divideAndReturn(n1,n2){
    return n1/n2

}
alert(divideAndReturn(50, 2))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanjiAdd(v1,v2){
    const addTwo = v1 + v2

    if (addTwo > 50)
    alert("Jumanji") 
}
jumanjiAdd(22,30)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
