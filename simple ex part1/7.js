/*�s�g�@�ӦW��findSmallerTotal���禡�A��ѼƬ��@�Ӿ�ƪ�array�H�Υt�@�Ӿ�ơA
�^�ǭȬ�array���p��ĤG�ӰѼƪ��Ҧ��������`�M�C*/

function findSmallerTotal(arr, num) {
    let total = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            total += arr[i];
        }
    }
    return total;
}

console.log(findSmallerTotal([1, 2, 3], 3)); // returns 3
console.log(findSmallerTotal([1, 2, 3], 1)); // returns 0
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); // returns 25
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)); // returns 0
