//�s�g�@�ӦW��isPrime���禡�A�^�ǭȬ�boolean�A�ѼƬO�_���@�ӽ�ơC
//�o�D���|�A�쥻���Q�k�O��2,3,5������

function isPrime(n) {
    if (n == 1) {
        console.log(false);
        return false;
    }

    let starter = 2;
    while (starter < n) {
        if (n % starter == 0) {
            console.log(false);
            return false;
        } else {
            starter++;
        }
    }
    console.log(true);
    return true;
}

isPrime(1); // returns false
isPrime(2); // returns true
isPrime(5); // returns true
isPrime(91); // returns false
isPrime(1000000); // returns false
