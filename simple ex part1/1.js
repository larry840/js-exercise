// 編寫一個名為“printEvery3()”的函式，它打印出等差數列 1, 4, 7, …, 88。

//原本的方法，缺點是一開始的1沒辦法被輸出，沒辦法判斷88該停止
function test_printEver3() {
    for (let i = 1; i < 10; i++) {
        console.log(1 + 3 * i);
    }
}
// test_printEver3();
function printEver3() {
    for (let i = 1; i <= 88; i += 3) {
        console.log(i);
    }
}
printEver3();
