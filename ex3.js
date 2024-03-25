/*數值加總：addUpTo() 這個函式有大於0的參數 n，n為一個正整數。
addUpTo() 要 return 1 + 2 + 3 + ..... + n 的值。
例如:
addUpTo(5) = 1 + 2 + 3 + 4+ 5 = 15
addUpTo(100) = 1 + 2 + 3 + 4 + 5 + ....... + 100 = 5050*/
function addUpTo(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}
console.log(addUpTo(5));
