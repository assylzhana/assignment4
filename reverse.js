let text = prompt("Enter your string: ")
let word = text.split('');
let a = "";

for(let i = text.length-1; i>=0;i--){
    a += word[i]
}
console.log(a)

