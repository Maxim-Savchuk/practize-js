/**
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию :
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://
 * unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers', numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);

/**
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - если compareFunction(A, B) меньше 0, сщртировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сщртировка поставит B перед A
 *  - если compareFunction(A, B) вернет 0, сщртировка оставит A и B на
 * неизменными по отношении друг к другу, но отсортирует их по отношению ко всем
 * другим элементам.
 */

// numbers.sort((curEl, nextEl) => {
//     return nextEl - curEl;
// });
// console.log(numbers);

/**
 * как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);

// const copy = [...numbers]; // операция spread распеляет массив в новый 
// copy.sort();

// console.log('copy', copy);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);
// console.log('numbers', numbers);

/**
 * Кастомная сортировка сложных типов
 */

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// // По игровому времени
// const sortedByBestPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
// );
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
// );
// console.table(sortedByWorstPlayers);
