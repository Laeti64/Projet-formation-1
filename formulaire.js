let min = 1,
  max = 14,
  select = document.getElementById("number-nights");

for (let i = min; i <= max; i++) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}
let numPeople = document.getElementById("number-people");
for (let i = 1; i < 11; i++) {
  let opt2 = document.createElement("option");
  opt2.value = i;
  opt2.innerHTML = i;
  numPeople.appendChild(opt2);
}
let numWeeks = document.getElementById("week-number");
for (let i = 1; i < 13; i++) {
  let opt3 = document.createElement("option");
  opt3.value = i;
  opt3.innerHTML = `Week ${i}`;
  numWeeks.appendChild(opt3);
}
let numMonth = document.getElementById("exp-date-month");
for (let i = 10; i < 13; i++) {
  let opt4 = document.createElement("option");
  opt4.value = i;
  opt4.innerHTML = i;
  numMonth.appendChild(opt4);
}

let numYear = document.getElementById("exp-date-year");
for (let i = 2022; i < 2026; i++) {
  let opt5 = document.createElement("option");
  opt5.value = i;
  opt5.innerHTML = i;
  numYear.appendChild(opt5);
}
let form = document.querySelector(".form");

if (form !== null) {
  form.addEventListener("submit", function (e) {
    alert("Merci d'avoir choisi The Wild Travel Agency! Bon Voyage!!");
    e.preventDafault();
  });
}
