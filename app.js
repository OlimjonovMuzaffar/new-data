"use strict";

let year = document.querySelector(".item1");
let day = document.querySelector(".item2");
let month = document.querySelector(".item3");

let clock = document.querySelector("h1");
console.log(clock);

let now = new Date();

let months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];

let haftaKunlari = [
  "Yakshanba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];

  //oy ni chiqarish
  let oy = now.getMonth();
  month.textContent = `Months:${months[oy]}`;
  // haftani chiqarish
  let hafta = now.getDay();
  day.textContent = `Day:${haftaKunlari[hafta]}`;
  //yilni chiqarish
  let yil = now.getFullYear();
  year.textContent = `Year:${yil}`;


function soatVaqt() {
  let now = new Date();
  let hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();

  let minute =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

  let seconde =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

  clock.innerHTML = `${hour}:${minute}:${seconde}`;
}
setInterval(soatVaqt, 1000);
