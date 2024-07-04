// 1. Design a function that reverses the digits of an integer. For example, 50 
// should become 5 and -12 should become -21.


function Reversal(n){
    const num= n< 0 ? -1 :1
    const reverseN= parseInt(String(Math.abs(n)).split('').reverse().join(''),10)
    return num*reverseN
}

const btnQ1 =document.getElementById("btnQ1")
const Q1result= document.getElementById("Q1result")
btnQ1.onclick = function(){
    const questionInput = document.querySelector('#Question1 input[type="number"]')
    const reverse = Reversal(questionInput.value)
    console.log(reverse)
    Q1result.innerHTML =`Result=  ${reverse}`
}

// 2. Write a recursive function to calculate the factorial of a number
function factorial(num){
    if (num===0 ||num===1) {
        return 1
    }
    return num*factorial(num-1)
}

const btnQ2 =document.getElementById("btnQ2")
const Q2result= document.getElementById("Q2result")
btnQ2.onclick = function(){
    const questionInput = document.querySelector('#Question2 input[type="number"]')
    const factorialNumber = factorial(questionInput.value)
    console.log(factorialNumber)
    Q2result.innerHTML =`Result=  ${factorialNumber}`
}


// 3. Design a function that takes a string or sequence of characters as input and 
// returns the character that appears most frequently.
// //Eg 11189 => '1'
// //hello => l

function mostFrequentChar(s){
    const frequency = {}
    const str =String(s)

    return str.split('').reduce((maxChar, char)=>{
        frequency[char] = (frequency[char]|| 0)+1
        return frequency[char]>frequency[maxChar] ?char:maxChar
    },str[0])
}

const btnQ3 =document.getElementById("btnQ3")
const Q3result= document.getElementById("Q3result")
btnQ3.onclick = function(){
    const questionInput = document.querySelector('#Question3 input[type="text"]')
    const frequentChar = mostFrequentChar(questionInput.value)
    console.log(frequentChar)
    Q3result.innerHTML =`Result=  ${frequentChar}`
}

//  4.Design a function that determines whether a given string is a pangram. A 
// pangram is a sentence or phrase containing every letter of the alphabet at 
// least once. Punctuation and case are typically ignored. For example, the 
// string "The quick brown fox jumps over the lazy dog" is a pangram, while 
// "Hello, world!" is not.

function isPangram(s){
    const alphabet ="abcdefghijklmnopqrstuvwxyz"
    const changeToSmallLetters = s.toLowerCase()

    for (let char of alphabet){
        if (!changeToSmallLetters.includes(char)) {
            return false
        }
    }
    return true
}

const btnQ4 =document.getElementById("btnQ4")
const Q4result= document.getElementById("Q4result")
btnQ4.onclick = function(){
    const questionInput = document.querySelector('#Question4 input[type="text"]')
    const checkPangram = isPangram(questionInput.value)
    console.log(checkPangram)
    Q4result.innerHTML =` Is Pangram =  ${checkPangram}`
}

// 5. Design a function that takes a list of integers as input. The function should 
// return True if the list contains two consecutive threes (3 next to a 3) anywhere 
// within the list. Otherwise, it should return False. For example, the function 
// should return True for [1, 3, 3] and False for [1, 3, 1, 3].

function consecutiveThrees(n){
    for (let i = 0; i < n.length-1; i++) {
        if (n[i]===3 && n[i+1]===3) {
            return true
        }
    }
    return false
}
const btnQ5 =document.getElementById("btnQ5")
const Q5result= document.getElementById("Q5result")
btnQ5.onclick = function(){
    const questionInput = document.querySelector('#Question5 input[type="text"]')
    const inputArray = questionInput.value.split(',').map(Number)
    const checkConsecutiveThrees = consecutiveThrees(inputArray)
    console.log(checkConsecutiveThrees)
    Q5result.innerHTML =` Has Consecutive Threes =  ${checkConsecutiveThrees}`
}
// 6. Master Yoda, a renowned Jedi Master from the Star Wars universe, is known 
// for his unique way of speaking. He often reverses the order of words in his 
// sentences. For example, instead of saying "I am home" he might say "Home 
// am I" Design a function that takes a sentence as input and returns a new 
// sentence with the words reversed in the same order that Master Yoda would 
// use.

function Yoda(sentence){
    const words = sentence.split(/\s+/)
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
    const reversedWords = words.reverse()
    return reversedWords.join(' ')
}

const btnQ6 =document.getElementById("btnQ6")
const Q6result= document.getElementById("Q6result")
btnQ6.onclick = function(){
    const questionInput = document.querySelector('#Question6 input[type="text"]')
    const yodaReverse = Yoda(questionInput.value)
    console.log(yodaReverse)
    Q6result.innerHTML =` Yoda says " ${yodaReverse}"`
}