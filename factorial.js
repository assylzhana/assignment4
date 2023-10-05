function factorial(num){
    let n = 1
    for(let i = 1; i<=num;i++){
        n*=i;
    }
    console.log(n);
}
let number = parseInt(prompt(""))
factorial(number)
