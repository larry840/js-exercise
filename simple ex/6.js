/*
絪糶findSmallCountㄧΑ材把计Τ俱计arrayの材タ俱计把计
ㄧΑ琌肚俱计ノㄓボarrayいΤぶじ材把计
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
