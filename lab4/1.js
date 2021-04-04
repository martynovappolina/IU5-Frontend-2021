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
}

// module.exports = getAnagramms;

// //code here


// module.exports = getAnagramms;

// //code here


// module.exports = getAnagramms;