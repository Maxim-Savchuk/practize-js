// class Hero {
//     constructor( name = 'hero', xp = 0 ) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} получает ${amount} опыта`);
//         this.xp += amount;
//     }
// }

// // const mango = new Hero({ name: 'mango', xp: 1000 });

// class Warrior extends Hero {
//     constructor(name, xp, weapon) {
//         super(name, xp);

//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name} атакует используя ${this.weapon}`);
//     }
// }

// class Mage extends Hero {
//     constructor(name, xp, spells) {
//         super(name, xp);

//         this.spells = spells;
//     }

//     cast() {
//         console.log(`${this.name} кастует используя ${this.spells}`)
//     }
// }

// const mango = new Warrior( 'mango', 1000, 'алебарда' );

// console.log(mango);

// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage('poly', 2500, 'заклинание воздуха')

// console.log(poly);

// poly.cast();
// poly.gainXp(2500);


// console.log(
//     'mango.__proto__ === Warrior.prototype',
//     mango.__proto__ === Warrior.prototype,
// );

// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );

// console.log(
//     'Hero.prototype.__proto__ === Object.prototype',
//     Hero.prototype.__proto__ === Object.prototype,
// );
