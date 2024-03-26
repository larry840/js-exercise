/*編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，
其功能為來檢查參數中String的所有字母是否為大寫。*/

function isAllUpperCase(str) {
    if (str.length == 0) {
        return false;
    }

    /* 原本的寫法，return true要寫在外面，不然執行完第一次迴圈就會跳出迴圈
    而且應該要學會用!=
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
        } else {
            return false;
        }
        return true;
    } */

    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[i].toUpperCase()) {
            return false;
        }
    }
    return true;
}
console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false
