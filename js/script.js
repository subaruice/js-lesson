"use strict";

const userData = +prompt("Сколько вам лет?", "");

console.log(userData);
const category = "films";
console.log(`https://google.com/${category}25`);

/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};
const userLastWatched = prompt("Один из последних просмотренных фильмов?", "");
const userRate = prompt("На сколько оцените его?", "");
personalMovieDB.movies[userLastWatched] = userRate;

console.log(personalMovieDB.movies);

//-------------------------------------cycle-----------------------------------
// *
// **
// ***
// ****
// *****
// ******

let result = "";

const length = 7;

for (let i = 1; i < length; i++) {
	result += "\n";
	for (let j = 0; j < i; j++) {
		result += "*";
	}
}


console.log(result);



first: for (let i = 1; i < length; i++) {
	console.log(`Third lvl: ${i}`);
	for (let j = 0; j < i; j++) {
		console.log(`Third lvl: ${i}`);
		for (let k = 0; k < i; k++) {
			if (k === 2) continue first;
			console.log(`Third lvl: ${k}`);
		}
	}
}
