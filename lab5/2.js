/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 * 
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
function curry(f) {

    let l = f.length;
    return function f1(...args) {
        if (args.length >= l) {
            return f(...args);
        } else {
            return function f2(...moreArgs) {
                let newArgs = args.concat(moreArgs);
                return f1(...newArgs);
            }
        }
    };

    //code here

}

module.exports = curry;