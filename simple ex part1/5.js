/*�s�g�@�ӦW��position���禡�A�ߤ@���ѼƬO�@��String�A
��\�ର���Ѽ�String�����Ĥ@�Ӥj�g�r���A
�åB�^�Ǥj�g�r�����ȥH�Ψ�index��m�C*/

function position(str) {
    /* �����ӥ���console�A��return�~�|�פ�j��
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            console.log(str[i] + " " + i);
            break;
        }
    }
    */

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            return str[i] + " " + i;
        }
    }
    return -1;
}
console.log(position("abcd")); // prints -1
console.log(position("AbcD")); // prints A 0
console.log(position("abCD")); // prints C 2
