/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let arr1 = [];
    for (let i in arr) {
        arr1[i] = arr[i].toLowerCase().split("").sort().join("");
    }

    let result = {};
    for (let i in arr1) {
        if (arr1[i] in result) result[arr1[i]].push(arr[i]);
        else result[arr1[i]] = [arr[i]];
    }

    return Object.values(result);

    // let obj = new Object();
    // for (let i in arr) {
    //     let obj = {
    //         id: i,
    //         word: arr[i].toLowerCase().split("").sort().join(""),
    //     }
    //     arr1[i] = obj;
    // }

    // for (let i in arr) {
    //     arr1[i] = arr[i].toLowerCase().split("").sort().join("");
    // }
    // let a = true;
    // let n = 0;
    // let arr_index;
    // for (let i = 0; i < arr1.length() - 1; i++) {
    //     arr_index[n] = i;
    //     n++;
    //     for (let j = 1; j < arr1.length(); j++) {
    //         for (let k in arr1[i]) {
    //             if (arr1[i][k] != arr1[j][k]) a = false
    //         }
    //         if (a) {
    //             arr_index[n] = j;
    //             delete(arr1[j]);
    //         }
    //     }
    // }
}

module.exports = getAnagramms;