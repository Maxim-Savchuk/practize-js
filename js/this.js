/**
 * Как метод обьекта. В контексте обьекта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag(); //Вызов в контексте обьекта

/**
 * Вызов без контекста
 *  - В строгом режиме = undefined
 *  - Не в строгом режиме = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

/**
 * Как метод обьекта но обьявлена как внешняя функция.
 * В контексте обьекта.
 */
// showTag();

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showtag -> this', this);
//         console.log('showtag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

/**
 * Контекст в callback-функциях
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showtag -> this', this);
//         console.log('showtag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);

/**
 * Тренируемся === 1 ===
 */

// const fn = function () {
//     console.log('fn -> this', this);
// };

// fn();

/**
 *   === 2 ===
 */
// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis(); // ссылается на обьект

// const outerShowThis = book.showThis;
// outerShowThis(); // undefined (не вызвал обьект)

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // error

/**
 *   === 3 ===
 */
// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

//     // changeColor(); // undefined

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     // sweater.updateColor('red'); // Какой this ? ссылка на обьект sweater.

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue'); // undefined