/*�s�g�@�ӦW��isAllUpperCase���禡�A�ߤ@���ѼƬO�@��String�A
��\�ର���ˬd�ѼƤ�String���Ҧ��r���O�_���j�g�C*/

function isAllUpperCase(str) {
    if (str.length == 0) {
        return false;
    }

    /* �쥻���g�k�Areturn true�n�g�b�~���A���M���槹�Ĥ@���j��N�|���X�j��
    �ӥB���ӭn�Ƿ|��!=
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
        } else {
            return false;
        }
        return true;
    } */

    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[i].toUpperCase()) {
            return false;
        }
    }
    return true;
}
console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false
