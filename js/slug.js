/**
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок состоит только из букв и пробелов 
 * 
 * - Нормализируем строку
 * - Разбиваем по словам
 * - сшиваем в строку с разделителями
 */

// const title = 'Top 10 benefits of React framework';

// // const normalizedTitle = title.toLowerCase();

// // const words = normalizedTitle.split(' ');

// // const slug = words.join('-');
// // console.log(slug);

// //  ИЛИ

// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);

//Должно получится top-10-benefits-of-react-framework