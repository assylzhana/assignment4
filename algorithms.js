let input = prompt("Enter array:");
let inputArray = input.split(' ');

let arr = inputArray.map(function(item) {
  return parseInt(item); 
});

console.log(arr);



let max = arr[0]

for(let i = 0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log('Max value: '+max)

const duplicate = {};

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  
  if (duplicate[item]) {
    console.log('Duplicate found: ' + item);
  } else {
    duplicate[item] = true;
  }
}


function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const wordLength = word.length;
  
      if (wordLength > maxLength) {
        longestWord = word;
        maxLength = wordLength;
      }
    }
  
    return longestWord;
  }
  
  const sentence = "aaaaaaaaaa ss ddddddd ff";
  const longest = findLongestWord(sentence);
  console.log('Longest word:'+ longest);



