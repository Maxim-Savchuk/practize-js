/**
 * Array.prototype.map()
 * - Поелементно перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];

// const doubleNums = numbers.map(number => {
//     console.log(number);

//     return number * 2;
// });

// console.log('numbers', numbers);
// console.log('doubleNums', doubleNums);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

/**
 * Получаем массив имен всех игроков
 */

// const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

// const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds);

// const playerTimePlayed = players.map(player => player.timePlayed);
// console.log('playerTimePlayed', playerTimePlayed);

// const playerPoints = players.map(player => player.points);
// console.log('playerPoints', playerPoints);

// const playerOnline = players.map(player => player.online);
// console.log('playerOnline', playerOnline);

// const res = players.map(({name, online}) => ({name,online}));
// console.log('res', res);

/**
 * увеличиваем кол-во поинтов игрока на 10%
 */

// const updatedPlayers = players.map(player => ({
//     ...player,
//     points: player.points * 1.1,
// }));
// console.table(updatedPlayers);

/**
 * увеличиваем кол-во поинтов игрока по id
 */
// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//     if (playerIdToUpdate === player.id) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         };
//     }
//     return player;
// });

// const updatedPlayers = players.map(player =>
//     playerIdToUpdate === player.id
//         ? { ...player, timePlayed: player.timePlayed + 100 }
//         : player,
// );
// console.table(updatedPlayers);