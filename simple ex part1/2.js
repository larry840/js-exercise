//編寫一個名為table9to9的函式，它打印出九九乘法表的內容。
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3

function table9to9() {
    for (i = 1; i < 10; i++) {
        for (j = 1; j < 10; j++) {
            console.log(i + " * " + j + " = " + i * j);
        }
    }
}
table9to9();
