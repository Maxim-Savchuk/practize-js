// class Car1 {
//     static description = 'Клас описывающий автомобиль';

//     static logInfo(carObj) {
//         console.log('Car1.logInfo -> carObj', carObj);
//     }

//     constructor({ brand, model, price } = {}) {       
//         this.brand = brand;
//         this._model = model;
//         this._price = price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     updateModel(newModel) {
//         this.model = newModel;
//     }

//     set price(newPrice) {
//         this._price = newPrice;
//     }

//     get price() {
//         return this._price;
//     }

//     set model(newModel) {
//         this._model = newModel;
//     }

//     get model() {
//         return this._model;
//     }

//     // setModel(newModel) {
//     //     this.model = newModel;
//     // }

//     //     getModel() {
//     //         return this.model;
//     //     }
// }

// // console.log(Car1);

// const carInstance = new Car1({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// console.log(carInstance);

// console.log(carInstance.model);
// carInstance.model = 'Q5';
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price)