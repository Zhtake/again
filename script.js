"use strict";
let money, time;

function start() {
  (money = +prompt("Ваш бюджет на месяц?", "")),
    (time = prompt("Введите дату в формате YYYY-MM-DD", ""));
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appDate = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

function choosExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = +prompt("Во сколько обойдется", "");
    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 60
    ) {
      appDate.expenses[a] = b;
    } else {
      i = i - 1;
    }
  }
}
choosExpenses();

function checkSavings() {
  if (appDate.savings == true) {
    let save = +prompt("Какова сумма накопления?"),
      percent = +prompt("Под какой процент?");
    appDate.monthIncome = (save / 100 / 12) * percent;
    alert("Доход в месяц с вашего дерозита:" + appDate.monthIncome);
  }
}
checkSavings();

function detectDayBudget() {
  appDate.moneyPerDay = (appDate.budget / 30).toFixed();
  alert("Бюджет на один день " + appDate.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appDate.moneyPerDay < 6000) {
    alert("Минимальный уровень достатка ");
  } else if (appDate.moneyPerDay > 6000 && appDate.moneyPerDay < 10000) {
    alert("Ваш уровень средний");
  } else if (appDate.moneyPerDay > 10000) {
    alert("Ваш уровень достатка высокий");
  } else {
    alert("Произошла ошибка");
  }
}
detectLevel();
function chooseOptExpenses() {
  for (let i = 1; i < 4; i++) {
    let q = prompt("Статья необязательных расходов?", "");
    if (typeof q == "string" && typeof q != null && q != "" && q.length < 20) {
      appDate.optionalExpenses[i] = q;
    } else {
      i = i - 1;
    }
  }
}
chooseOptExpenses();
