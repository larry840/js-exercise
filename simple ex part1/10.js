// 費布納西數列的總和
/*function fib(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        let number = 1;
        let total = 0;
        for (i = 2; i <= n; i++) {

        }
    }
}*/

function fib(n) {
    if (n == 0) {
        console.log(0);
    } else if (n == 1) {
        console.log(1);
    } else {
        let fib_seq = [0, 1];
        while (fib_seq.length <= n) {
            let last_number = fib_seq[fib_seq.length - 1];
            let secontd_last_number = fib_seq[fib_seq.length - 2];
            fib_seq.push(last_number + secontd_last_number);
        }
        console.log(fib_seq[fib_seq.length - 1]);
    }
}

fib(0); // returns 0
fib(1); // returns 1
fib(2); // returns 1
fib(3); // returns 2
fib(8); // returns 21
