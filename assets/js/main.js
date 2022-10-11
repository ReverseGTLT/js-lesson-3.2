let age = prompt('Ваш рік');
let city = prompt('Ваше місто');
let favoriteSport = prompt('Ваш улюблений вид спорту');

if (age === null){
  age = `Шкода, що Ви не захотіли ввести свій вік`;
} else {
  age = +age;
}

if (city === `Київ`) {
  city = `Ти живеш у столиці України`;
} else if (city === `Вашингтон`) {
  city = `Ти живеш у столиці США`;
} else if (city === `Лондон`) {
  city = `Ти живеш у столиці Великої Британії`;
} else if (city === null) {
  city = `Шкода, що Ви не захотіли ввести своє місто`;
} else {
  city = `ти живеш у місті ${city}`;
}

if (favoriteSport === `Бокс`) {
  favoriteSport = `Круто! Хочеш стати Усиком?`;
} else if (favoriteSport === `Футбол`) {
  favoriteSport = `Круто! Хочеш стати Мессі?`;
} else if (favoriteSport === `Біг`) {
  favoriteSport = `Круто! Хочеш стати Кіпчоге?`;
} else if (favoriteSport === null) {
  favoriteSport = `Шкода, що Ви не захотіли ввести свій улюблений вид спорту`;
} else {
  favoriteSport = `Новий вид спорту?)`;
}
 alert(`${age} \n${city} \n${favoriteSport}`);