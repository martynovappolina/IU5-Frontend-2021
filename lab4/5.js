/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {

    let a = true;
    let n = 0,
        m;
    let number_brackets = [0, 0, 0, 0, 0, 0];
    let brackets = ['(', '[', '<', ')', ']', '>'];
    for (let i in str) {
        if (str[i] == '(') {
            number_brackets[0]++;
            m = 0;
        }
        if (str[i] == '[') {
            number_brackets[1]++;
            m = 1;
        }
        if (str[i] == '<') {
            number_brackets[2]++;
            m = 2;
        }
        if (str[i] == ')') {
            number_brackets[3]++;
            m = 3;
        }
        if (str[i] == ']') {
            number_brackets[4]++;
            m = 4;
        }
        if (str[i] == '>') {
            number_brackets[5]++;
            m = 5;
        }

        if ((number_brackets[0] + number_brackets[1] + number_brackets[2]) < (number_brackets[3] + number_brackets[4] + number_brackets[5])) {
            a = false;
            break;
        }
        console.log(number_brackets, n);
        if (str[i] == brackets[3] || str[i] == brackets[4] || str[i] == brackets[5]) {
            n++;
            // if (i == n) n = 0;
            console.log(i, n);
            if (str[i - n] != brackets[m - 3]) {
                a = false;
                break;
            }
            // if (i == n) n = 0;
            n++;
            if (i == n + 1) n = 0;
        }

    }

    if ((number_brackets[0] + number_brackets[1] + number_brackets[2]) != (number_brackets[3] + number_brackets[4] + number_brackets[5])) a = false;
    return a;
}

module.exports = checkBrackets;

// //code here



// module.exports = checkBrackets;

//     //code here



// module.exports = checkBrackets;