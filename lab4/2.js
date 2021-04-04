/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {

    let a = true;
    let str1 = str.toLowerCase().split("");
    let str2 = str.toLowerCase().split("");
    str2.reverse();
    for (let i in str1) {
        if (str1[i] != str2[i]) {
            a = false;
        }
    }
    return a;
}

// module.exports = isPalindrome;

// //code here


// module.exports = isPalindrome;

//     //code here
// }

// module.exports = isPalindrome;