let input = prompt("Enter array:");
let inputArray = input.split(' ');

let arr = inputArray.map(function(item) {
  return parseInt(item); 
});

console.log(arr);

let sum = 0;

for(let i =0;i<arr.length;i++){
    sum += arr[i]
}
console.log('Sum of array: '+ sum);

console.log('Avarage of array: '+ sum/arr.length);

let max = arr[0]

for(let i = 0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log('Max value: '+max)

let min = arr[0]

for(let i =0; i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log('Min value: '+min)