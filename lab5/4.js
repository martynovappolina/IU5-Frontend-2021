/**
 * починить функцию memoize(func),
 * на вход принимает функцию
 * на выходе получаем функцию, которая умеет запоминать последний результат вызова
 * примеры:
 * const add = (a) => a * 2;
 * const memozedAdd = memoize(add) 
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(1) -> {cache: true, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(1) -> {cache: false, result: 2}
 * memozedAdd(2) -> {cache: false, result: 4}
 * memozedAdd(2) -> {cache: true, result: 4}
 */

function memoize(func) {
    let cache = {};
    return function(value) {
        if (cache[value] !== undefined) return { cache: true, result: value };
        else {
            const r = func(value);
            cache[value] = r;
            return { cache: false, result: r };
        }
    }
}

// return function new_f(...args) {
//     if (value == func(...args)) return { cache: true, result: value };
//     else return { cache: false, result: func(...args) };
//     value = func(...args);
// }

module.exports = memoize;