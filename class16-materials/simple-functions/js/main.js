//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwo(n1, n2){
   alert(n1-n2)
}

subtractTwo(5, 6)



//create a function that divides three numbers and console logs the quotient

function dividesThreeNums(zebra, forest, unicorn){
    console.log( zebra / forest/ unicorn)
}

dividesThreeNums(12, 4, 3)

//create a function that multiplys three numbers and returns the product

function multiplyThreeNums(numb1, numb2, numb3){
    return numb1 * numb2 * numb3
}

let product = multiplyThreeNums(5, 10, 2)

alert(product)


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addTwoAndDivide(num1, num2, num3){
    return (num1 + num2) % num3

}


console.log(addTwoAndDivide(3,3,2))


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
