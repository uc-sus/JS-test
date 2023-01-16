// question 1.

// var listName = ["Sushant","Abhishek","Radhe","mohan","Rohan","Bruce"]
// var sortedList = listName.sort();
// console.log(sortedList);

// question 2

// function word_occurence(str){
//     if(str.length == 0){
//         console.log("plz input a valid string")
//         return 0;
//     }
//     for( let i=0;i<str.length;i++){
//         let count =0;
//         for(j=0;j<str.length;j++){
//             if(str[i]==str[j] && i>j){
//                 break;
//             }
//             if(str[i]==str[j]){
//                 count++;
//             }
//         }
//         if(count>0){
//             console.log(str[i]+ " comes " +count+ " time ");
//         }
//     }
    
// }

// let str1 = "I am sushant sharma"
// word_occurence(str2);

// question 3

// function is_prime(number){
//     if(number === 0){
//         return("input number is not a prime number")
//     }
//     else if(number==2){
//         return("input number is prime number")
//     }
//     else{
//         for(let i=2;i<number;i++){
//             if(number%i===0){
//                 return("input number is not a prime number")
//             }
//         }
//         return("input number is prime number")
//     }
// }
// console.log(is_prime(7))


// question 4

// function totalWordsCount(str){
//     str = str.replace(/(^\s*)|(\s*$)/gi, "")
//     str = str.replace(/[ ]{2,}/gi," ");
//     str =str.replace(/ /," ")
//     return(str.split(' ').length)
// }
// var str1 ="  I am Sushant Sharma "
// console.log(totalWordsCount(str1));



// question 10

function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString("sushant sharma"))