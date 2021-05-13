// =========  1  ===========
// const Car = function ({ brand, model, price } = {}) {
//     // const { brand, model, price } = config;
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello :) ');
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }

// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });   
// console.log(myCar);

// console.log(Car.prototype);

// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'M5',
//     price: 55000,
// });   
// console.log(myCar2);

// const myCar3 = new Car({
//     brand: 'Audi',
//     model: 'A6',
//     price: 65000,
// });   
// console.log(myCar3);

// =========  2  ===========
// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// }

// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// }

// const mango = new User({ email: 'mango@mail.com', password: 1111111 });

// mango.changeEmail('my-new-email.com')
// console.log(mango);