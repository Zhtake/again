"use strict";
let money,
  time,
  question1,
  question2,
  answer1,
  answer2,
  answer3,
  answer4,
  income = [],
  budgetDay;

money = prompt("Ваш бюджет на месяц");
time = prompt("Введите дату в формате YYYY-MM-DD");

answer1 = prompt("Введите обязательную статью расходов в этом месяце");
answer2 = +prompt("Во сколько обойдется");
answer3 = prompt("Введите обязательную статью расходов в этом месяце");
answer4 = +prompt("Во сколько обойдется");
console.log(answer2);

let appdate = {
  budget: money,
  timeData: time,
  expenses: {
    answer1: answer2,
    answer3: answer4,
  },

  optionalExpenses: "",
  income: "",
  savings: false,
};
console.log(appdate);
budgetDay = money / 30;
alert("Бюджет на один день" + " " + budgetDay);
