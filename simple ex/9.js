/*編寫一個名為stars2的函式，功能為按以下模式打印出星星層：
stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *
*/

function stars(n) {
    for (i = 1; i <= n; i++) {
        let str = "";
        for (j = 1; j <= i; j++) {
            str += "*";
        }
        console.log(str);
    }

    for (i = n - 1; i > 0; i--) {
        let str = "";
        for (j = 1; j <= i; j++) {
            str += "*";
        }
        console.log(str);
    }
}

stars(1);
stars(2);
stars(3);
stars(4);
