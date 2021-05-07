/**
 * call и apply
 */
// const showThis = function () {
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };
// showThis.call(objA, 5, 1, 1, 1);
// showThis.apply(objA,[ 5, 1, 1, 1]);

// const objB = {
//     x: 788,
//     y: 25,
// };
// showThis.call(objB, 1, 2, 1, 2);
// showThis.apply(objB, [1, 2, 1, 2]);

// showThis();


const changeColor = function (color) {
    console.log('changeColor -> this', this);
    // this.color = color;
};

const hat = {
    color: 'black',
};

// changeColor.call(hat, 'orange');
// console.log(hat);

const sweater = {
    color: 'green',
};

// console.log(sweater);


/**
 * bind
 */

const changeHatColor = changeColor.bind(hat);
const changeSweatertColor = changeColor.bind(sweater);

changeColor(); //undefined
changeHatColor();//bind делает копию функций с навсегда привязанным контекстом
changeSweatertColor();// bind - привязка
