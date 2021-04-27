// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3
// }

// console.log(playlist);

// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.rating);
// console.log(playlist.trackCount);

// console.log(playlist['tracks']);

/**
 * Короткая запись свойств
 */
// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//     username: username,
//     email: email
// }

// console.log(signupData);

/**
 * Вычесляемые свойства
 */

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickedData = {
//     [inputName]: inputValue,
// };

// console.log(colorPickedData);

/**
 * Ссылочный тип {} === {}
 */


// const a = { x: 1, y: 2 };
// const b = a;

// a.hello = 100;
// a.hello = 150;

// console.log(a);
// console.log(b);

/**
 * Массивы и функции это обьекты
 */

// const a = [1, 2, 3];

// a.hello = 150;

// console.log(a);

// const fn = function () {
//     console.log('hello');
// };

// fn.hello = ';-)'

// console.log(fn, fn.hello);

// const a = [0, 1, 2, 3, 4];

// a.unshift(4, 3, 2, 1);

// console.log(a);