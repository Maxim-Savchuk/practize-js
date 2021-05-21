/**
 * isEmpty()
 */
// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 5 }));

/**
 * get()
 * 
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */
// const user = {
//     name: 'mango',
//     location: {
//         coords: [1, 2],
//         city: 'Lviv',
//     },
// };

// console.log(_.get(user, 'location.city')); // спасает от ошибки ...возвращает undefined если такого свойства нет
// console.log(user.location.city);
// console.log(user?.location?.city); // Новый синтаксис ...проверка!

/**
 * union()
 */
// console.log(_.union([1, 2, 3], [3, 4, 5]));

/**
 * range()
 */
// console.log(_.range(3, 10, 2));

/**
 * sortBy()
 */
// const users = [
//     { user: 'fred', age: 48 },
//     { user: 'barney', age: 36 },
//     { user: 'fred', age: 40 },
//     { user: 'barney', age: 34 },
// ];
// console.log(_.sortBy(users, ['user', 'age']));

/**
 * sum() и sumBy()
 */

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// console.log(_.sumBy(players, player => player.timePlayed));

/**
 * uniq() и uniqBy()
 * sortedUniq() и sortedUniqBy()
 */

/**
 * random()
 */

/**
 * min() и max()
 * minBy() и maxBy()
 */
// console.log(_.minBy(players, player => player.timePlayed).name);

/**
 * camelCase(), capitalaze(), kebabCase(), lowerCase(), upperCase()
 */
// console.log(_.kebabCase(' a b c'));