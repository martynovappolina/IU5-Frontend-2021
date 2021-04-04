/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {

    let n = 1;
    let new_str = "";
    for (let i = 0; i < str.length; i++) {
        while (str[i] == str[i + 1]) {
            n++;
            i++;
        }
        new_str += str[i];
        if (n > 1) new_str += n;
        n = 1;
    }
    return new_str;
}

// module.exports = rle;

// //code here


// module.exports = rle;

//     //code here


// module.exports = rle;