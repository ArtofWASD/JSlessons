
let num = 50;

if(num < 49){
console.log("Wrong")
}else if(num > 100){
console.log("Too Much")
}else{
    console.log("Right!")
}

(num == 50) ? console.log('Верно!') : console.log('Неверно!');

switch(num){
    case num < 49:
        console.log("Wrong");
        break;
    case num > 100:
        console.log("Too Much")
        break;
    case num < 80:
        console.log("too much!!")
        break;
    case 50:
        console.log ("Right!")
        break;
    default:
        console.log("Something wrong")
        break;    
}
