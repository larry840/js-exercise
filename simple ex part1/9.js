/*�s�g�@�ӦW��stars2���禡�A�\�ର���H�U�Ҧ����L�X�P�P�h�G
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
