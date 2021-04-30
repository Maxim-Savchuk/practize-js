/**
 * Деструктуризация обьекта 
 *  - Значение по умолчанию
 *  - Имя переменной отличное от имени свойства
 */

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };

// // console.log(playlist.name, playlist.rating, playlist.tracks, playlist.trackCount);

// const { name, rating, tracks, trackCount: numberOfTracks, } = playlist;

// console.log(
//     name,
//     rating,
//     tracks,
//     numberOfTracks
// );

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// }

// const entries = Object.entries(authors);

// // console.log(entries);

// for (const [name, rating] of entries) {
//     // const [name, rating] = entry;

//     // const name = entry[0];
//     // const rating = entry[1];

//     console.log(name, rating);
// };

/**
 * Операция rest (сбор)
 */

// const profile = {
//     name: 'jacques gluke',
//     tag: 'jqluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://amazon.com',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
