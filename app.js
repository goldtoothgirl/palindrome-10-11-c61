//function word say is a palindrome
//clarify if question
//Prep parametrs, Returns, examples, sudeo code
//keep interviwer engaged, talk with them, laughing

//ask questions will answer yes
//PARAMETERS- clarifed what coming in
//word -> str, no empty, no ! no funny bizno caps1 word

//RETURN
//return boolean true || false

//EXAMPLES 
//racecar - > true
// bob -> true
//tacos -> false

//test cases
//suedo code
// function isPalindrome(word){
//   //word -> reverse the word - split reverse join
// let reversedWord = word.split('').reverse().join()
//   //revWord === word

//   // if(word===reversedWord){
//   //   return true
//   // }else{
//   //   return false
  
//   //OR
    
//   //return word === reversedWord


  
//   }
  //is there anything I am missing, Bob?
  //does this meet you requirments?
  //at your company, do leave the comments in?
  //shorter number lines of code
// }

//   //OR
//arrow function
const isPalindrome = word => word === word.split('').reverse().join('')

console.log(isPalindrome('racecar'), 'true')
console.log(isPalindrome('bob'), 'true')
console.log(isPalindrome('tacos'), 'false')

//if all these cases work, would you agree I have solved the challenge for today? - receipts cant add more stuff


