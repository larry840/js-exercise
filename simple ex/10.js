// 費布納西數列的總和
function fib(n) {
    let f0 = 0;
    let f1 = 1;
    for (i = 2; i <= n; i++) {
        let number = 0;
        for (j = 2; j <= n; j++) {
            number += j;
        }
    }
}

fib(0); // returns 0
fib(1); // returns 1
fib(2); // returns 1
fib(3); // returns 2
fib(8); // returns 21
