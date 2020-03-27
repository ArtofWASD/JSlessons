var now = new Date();
let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD', now);
let expenses1 = prompt('Введите обязательную статью расходов в этом месяце?');
let expenses2 = prompt('Во сколько обойдётся?');
// let optionalExpenses1 = prompt('Введите обязательную статью расходов в этом месяце?');
// let ptionalExpenses2 = prompt('Во сколько обойдётся?');
let income = [];
let appData = {
    money,
    time,
    expenses: {expenses1, expenses2},
    // optionalExpenses,
    savings:false
}
console.log(appData);
alert("Ваш бюджет на день " + appData.money/30);
