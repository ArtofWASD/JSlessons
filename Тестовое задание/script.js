let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(money,time);

let appData = {
    money:'50000',
    time:'2020-03-24',
    expenses:"Введите обязательную статью расходов в этом месяце",
    optionalExpenses:'',
    income:'',
    savings:false

}

alert(money/30);