/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    // let new_str = '';
    // let space = ' ';
    // for (let i in str) {
    //     if (parseInt(str[i])) {
    //         new_str = new_str + str[i]
    //         if (!parseInt(str[i + 1]))
    //             new_str += space;
    //     }
    // }

    // new_str.split(' ').map(parseInt);
    str.split(/\D+(?!$)/).map(parseFloat);
    return 'min: ' + Math.min(new_str) + ', max: ' + Math.max(new_str)

}

module.exports = getMinMax;