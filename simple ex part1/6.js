/*
�s�g�@�ӦW��findSmallCount���禡�A�Ĥ@�ӰѼƬ��@�ӧt����ƪ�array�H�βĤG�ӥ���ưѼơA
�禡���\��O�^�Ǥ@�Ӿ�ơA�ΨӪ��array�����h�֤����p��ĤG�ӰѼơC
*/

function findSmallCount(arr, num) {
    let times = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            times++;
        }
    }
    return times;
}

console.log(findSmallCount([1, 2, 3], 2)); // returns 1
console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0
console.log(findSmallCount([1, 2, 3, 4, 5], 6));
