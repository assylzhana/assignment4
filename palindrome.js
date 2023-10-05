function isPalindrome(str){
    let smth= /[^A-Za-z0-9]/g;
    let check = str.replace(smth, '').toLowerCase();
    return check === check.split('').reverse().join('');
}
let text = prompt("Enter a string: ")
if(isPalindrome(text)){
    console.log('yes')
}
else{
    console.log('no')
}
