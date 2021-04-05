/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {

    let new_arr = "";
    // for (let i in arr) {
    //     new_arr = new_arr.concat(arr[i]);
    // }
    new_arr = new_arr.concat(arr);
    new_arr = new_arr.split(',');
    for (let i in new_arr) {
        if (parseInt(new_arr[i]))
            new_arr[i] = parseInt(new_arr[i]);
    }

    if (new_arr == "") new_arr = [];

    return new_arr;
}

module.exports = get1DArray;

// //code here


// module.exports = get1DArray;

//     //code here

// module.exports = get1DArray;