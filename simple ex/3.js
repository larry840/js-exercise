/* �s�g�@�ӦW��isUpperCase���禡�A�ߤ@���ѼƬO�@��String�A
��\�ର���ˬd�ѼƤ�String���Ĥ@�Ӧr���O�_���j�g�C
isUpperCase("ABCD"); // returns true
isUpperCase(""); // returns false
isUpperCase("aBCD"); // returns false */

function isUpperCase(str) {
    if (str.length == 0) {
        return false;
    }

    if (str[0] == str[0].toUpperCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(isUpperCase("ABCD")); // returns true
console.log(isUpperCase("")); // returns false
console.log(isUpperCase("aBCD")); // returns false
