/*�ƭȥ[�`�GaddUpTo() �o�Ө禡���j��0���Ѽ� n�An���@�ӥ���ơC
addUpTo() �n return 1 + 2 + 3 + ..... + n ���ȡC
�Ҧp:
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
