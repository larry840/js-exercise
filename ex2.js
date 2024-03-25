// 寫一個function可以找到array中的最大值
function findBiggest(arr) {
    let biggestNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        biggestNumber = biggestNumber > arr[i] ? biggestNumber : arr[i];
    }
    return biggestNumber;
}

console.log(findBiggest([1, 46, 299, 100]));
