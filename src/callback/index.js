function sum(numero1,numero2){
    return numero1 + numero2;
}

function cal(num1,num2, callback) {
    return callback(num1,num2)
}

console.log(cal(6,2,sum));


function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);