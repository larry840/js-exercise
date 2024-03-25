/*计羆addUpTo() 硂ㄧΑΤ0把计 nnタ俱计
addUpTo() 璶 return 1 + 2 + 3 + ..... + n 
ㄒ:
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
