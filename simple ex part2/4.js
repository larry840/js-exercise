/*�^��O���A����Ū�Τϵ�Ū���@�˪��y�l�C�Ҧp:�i�W���ۨӤ��Ӧۮ��W�j�O�j��C
�g�@�ӦW��palindrome���禡�A�����@��String�@���ѼơA�^��boolean�A�i�D�ڭ̰ѼƬO�_���^��C*/

/*�ۤv�g���A���D�O�S��k�ѨM�r�Ƭ����Ʈ�
function palindrome(str) {
    let center = str.length / 2;
    for (i = 1; i < center; i++) {
        if (str[center + i] != str[center - i]) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}*/

function palindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] != str[j]) {
            console.log(false);
            return false;
        }
        i++;
        j--;
    }
    console.log(true);
    return true;
}

// �Ѫk�G�A�B�Ϋe���Ǩ쪺reverse�Ӥ���r��

palindrome("bearaeb"); // returns true
palindrome("whatever revetahw"); // returns true
palindrome("Aloha, how are you today?"); // returns false
