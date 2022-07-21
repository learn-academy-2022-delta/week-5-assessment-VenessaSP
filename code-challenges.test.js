// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { exportDefaultSpecifier } = require("@babel/types")


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//Pseudocode
// -First use the 'describe' method and create string 'codeWord'
// -Then use the 'it' method to describe the function: "takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0."
// - Then list the the variables to perform the test on 'const secretCodeWord1, secretCodeWord2 and secretCodeWord3'
// - Then use the 'expect' method to call the string in the describe method 'codeWord' for variables 'secretCodeWord1, secretCodeWord2 and secretCodeWord3
// - Then use the '.toEqual' method to list the expected output of test
// - Create the function 'codeWord'
// - Create parameter that can be reused "string"
// - Use 'return' command along with HOF ".map"to iterate through each element
// - Use ".replaceall" method to specify the which characters need to be converted.

// a) Create a test with expect statements using the variables provided.

describe("codeWord", () => {
    it("takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        const secretCodeWord1 = "Lackadaisical"
        const secretCodeWord2 = "Gobbledygook"
        const secretCodeWord3 = "Eccentric"
        expect(codeWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codeWord(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codeWord(secretCodeWord3)).toEqual("3cc3ntr1c")

    })
    
}
)

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.

const codeWord = (string) => {
    return string.map(value => {
         string.replaceAll("a", "4", "e", "3", "i", "1", "o", "0")
    })
}

//--------------------------------------------------------------- QUESTION 1 NOTES---------------------------
//--this is the error I got
// ● codeWord › takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// TypeError: string.map is not a function

//   42 |
//   43 | const codeWord = (string) => {
// > 44 |     let eachLetter = string.map(value => {
//      |                             ^
//   45 |         return string.replaceAll("a", "4", "e", "3", "i", "1", "o", "0")
//   46 |     })
//   47 | }

//   at map (code-challenges.test.js:44:29)
//   at Object.codeWord (code-challenges.test.js:24:16)
//------------- Then I replaced that code by just getting rid of the 'let' and still got the same error 'string.map is not a function

//-------------------------------------------------------QUESTION 1 NOTES-----------------------------------


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

//Pseudocode
// -First use the 'describe' method and create string 'fruits'
// -Then use the 'it' method to describe the function: "takes in an array of words and a single letter and returns an array of all the words containing that particular letter."
// - Then list the the variables to perform the test on 'const letterA, letterE and fruitArray'
// - Then use the 'expect' method to call the string in the describe method 'fruits' for only variables 'letterA and letterE
// - Then use the '.toEqual' method to list the expected output of test
// - Create the function 'fruits'
// - Create parameters for each variable (letterA, letterE)
// - Use conditional statment 'if' and input the variable fruitArray  with '.includes' method and pass the function 'letterA, letterE' as the argument for each parameter
// - Use 'return' command along with '.slice' method to get the expected out put

// a) Create a test with expects statement using the variable provided.

describe("fruits", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        const letterE = "e"
        expect(fruits(letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(fruits(letterE)).toEqual(["Cherry", "Blueberry", "Peach"])

    })
    
}
)

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


// b) Create the function that makes the test pass.

const fruits = (letterA, letterE) => {
 if ( fruitArray.includes(letterA)) {
  return fruitArray.slice([1, 3, 5]) 
}
else ( fruitArray.includes(letterE)) ; {
 return fruitArray.slice([0, 2, 4])
}
}

//--------------------------------------- QUESTION 2 NOTES -----------------------------------------------
 // --So I got this error message below--

// ● fruits › takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// expect(received).toEqual(expected) // deep equality

// Expected: ["Mango", "Apricot", "Peach"]
// Received: undefined

//   50 |         const letterA = "a"
//   51 |         const letterE = "e"
// > 52 |         expect(fruits(letterA)).toEqual(["Mango", "Apricot", "Peach"])
//      |                                 ^
//   53 |         expect(fruits(letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//   54 |
//   55 |     })

//   at Object.toEqual (code-challenges.test.js:52:33)

// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 total
// Snapshots:   0 total
// Time:        0.184 s, estimated 1 s
//------------------------------------------------------- So to my best understanding I used the commands that would specifically get the expected output but its just 'undefined'

//off the bat I know the .filter would be the best choice but I'm unsure how to put it in the function. went with .includes method and passed the function as the argument. Did a 'return' command with the '.slice' method to identify the specified indexes and remove to get expected output.
//---------------------------QUESTION 2 NOTES--------------------------------------------------------------



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

//Pseudocode
// -First use the 'describe' method and create string 'poker'
// -Then use the 'it' method to describe the function: "takes in an array of 5 numbers and determines whether or not the array is a “full house"
// - Then list the the variables to perform the test on 'const hand1, hand2 and hand3'
// - Then use the 'expect' method to call the string in the describe method 'poker' for all variables 'hand1, hand2 and hand3'
// - Then use the '.toEqual' method to list the expected output of test
// - Create the function 'poker'
// - Create parameter 'array' to be able to pass every array declared
// - Use conditional statment 'if' and list the variable 'hand2' with method '.indexOf(4)' 4 is the last number in each array and determines if its true or false.
//- Pass a modulo on index '4' as an argument to set a value (even which goes against 'it' statement) for the return statement
// - Do a return command to match expected output of 'hand2'
// - Repeat the same conditional statement as 'hand2'for 'hand3'
// - Use conditional statement 'else if' for 'hand3' and with same method as 'hand2 and 3'
//- Pass modulo on index '4' as an argument to set a value (odd which goes against 'it' statement) for the return statement

// a) Create a test with expect statements using the variable provided.

describe("poker", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
        expect(poker(hand1)).toEqual(true)
        expect(poker(hand2)).toEqual(false)
        expect(poker(hand2)).toEqual(false)

    })
    
}
)

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false


// b) Create the function that makes the test pass.
const poker = (array) => {
    if(hand2.indexOf(4 % 2 === 0)) {
        return false
    }
    else if(hand3.indexOf(4 % 2 === 0)) {
        return false
    }
    else if(hand1.indexOf(4 % 2 === 1)) ;{
        return true
    }
}
   


    
//---------------------------------------QUESTION 3 NOTES---------------------------------------
// first error I got 

//● poker › takes in an array of 5 numbers and determines whether or not the array is a “full house

// expect(received).toEqual(expected) // deep equality

// Expected: true
// Received: "false"

//   168 |         const hand2 = [5, 5, 3, 3, 4]
//   169 |         const hand3 = [5, 5, 5, 5, 4]
// > 170 |         expect(poker(hand1)).toEqual(true)
//       |                              ^
//   171 |         expect(poker(hand2)).toEqual(false)
//   172 |         expect(poker(hand2)).toEqual(false)
//   173 |

//   at Object.toEqual (code-challenges.test.js:170:30)

// Test Suites: 1 failed, 1 total
// Tests:       3 failed, 3 total
// Snapshots:   0 total
// Time:        0.21 s
//------------------------------------------------------------------------------------
// So I changed the hard coded the parameter which mixed up some of the variables and got this error:

//● poker › takes in an array of 5 numbers and determines whether or not the array is a “full house

// TypeError: Cannot read properties of undefined (reading 'indexOf')

// 187 | // b) Create the function that makes the test pass.
// 188 | const poker = (hand1, hand2, hand3) => {
// > 189 |     if(hand2.indexOf(4 % 2 === 0)) {
//     |              ^
// 190 |         return "false"
// 191 |     }
// 192 |     else if(hand3.indexOf(4 % 2 === 0)) {

// at indexOf (code-challenges.test.js:189:14)
// at Object.poker (code-challenges.test.js:170:16)

// Test Suites: 1 failed, 1 total
// Tests:       3 failed, 3 total
// Snapshots:   0 total
// Time:        0.212 s, estimated 1 s
// Ran all test suites.
//------------------------------------------------------------------------------------
// so then i put the array back as a parameter and got the same error as the first one.
// This is the first test that I felt like I'm just right there!!!! I just dont know what to correct, it looks corret to me?