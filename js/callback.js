// const fnA = function (message, callback) {
//     console.log(message);

//     // console.log(callback);
//     callback(100);
// }

// const fnB = function (number) {
//     console.log('Ето лог при вызове fnB', number);
// }

// fnA('qweqwe', fnB);

/**
 * Function doMath(a, b, callback)
 */

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }

// doMath(2, 3, function (x, y) {
//     return x + y;
// });
// doMath(10, 8, function (x, y) {
//     return x - y;
// });

// const add = function (x, y) {
//     return x + y;
// }

// const sub = function (x, y) {
//     return x - y;
// }

/**
 * Отложенный вызов: регистрация событий
 */
// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('Клик по кнопке ' + Date.now());
// }

// buttonRef.addEventListener('click', handleBtnClick);

/**
 * Отложенный вызов: геолокация
 */

// const onGetPositionSuccess = function (position) {
//     console.log('Это вызов onGetPositionSuccess');
//     console.log(position);
// }

// const onGetPositionError = function (error) {
//     console.log('Это вызов onGetPositionError');
//     console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(
//     function (position) {
//     console.log('Это вызов onGetPositionSuccess');
//     console.log(position);
//     },
//     function (error) {
//     console.log('Это вызов onGetPositionError');
//     console.log(error);
//     },
// );

/**
 * Отложенный вызов: интервалы
 */

// const callback = function () {
//     console.log('Через 3 секунды внутри колбека в таймауте');
// };

// console.log('в коде перед таймаутом')
// setTimeout(callback, 3000);
// console.log('В коде после таймаута')

/**
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon 
 */

// const onRequestSuccess = function (response) {
//     console.log('Вызов функции onRequestSuccess после успешного ответа бекенда',);

//     console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);
    
// console.log('перед fetch');

// console.log('после fetch');