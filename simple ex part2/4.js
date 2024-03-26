/*回文是指，正著讀或反著讀都一樣的句子。例如:【上海自來水來自海上】是迴文。
寫一個名為palindrome的函式，接受一個String作為參數，回傳boolean，告訴我們參數是否為回文。*/

/*自己寫的，問題是沒辦法解決字數為偶數時
function palindrome(str) {
    let center = str.length / 2;
    for (i = 1; i < center; i++) {
        if (str[center + i] != str[center - i]) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}*/

function palindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] != str[j]) {
            console.log(false);
            return false;
        }
        i++;
        j--;
    }
    console.log(true);
    return true;
}

// 解法二，運用前面學到的reverse來比對原字串

palindrome("bearaeb"); // returns true
palindrome("whatever revetahw"); // returns true
palindrome("Aloha, how are you today?"); // returns false
