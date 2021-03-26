/**
 * Напишите функцию polyfill map reduce,
 * написать полифил на функцию map через reduce
 * что такое полифил нужно почитать в гугле
 * Примеры:
 * [1,2,3].myMap((x) => x*2) -> [2,4,6]
 * Нужно назвать myMap !!!!!
 */



Array.prototype.myMap = function(reducer) {
    let new_arr = [];
    for (let i = 0; i < this.length; i++) {
        let el = reducer(this[i]);
        new_arr.push(el);
    }
    return new_arr;
}

// this.forEach(element => {
//     element.reducer(element);
// });
// return this;