//�s�g�@�ӦW��reverse���禡�A�ѼƬ��@��String�A�^�ǭȬ����Ǥ��઺String�C

function reverse(str) {
    let result = "";
    for (i = str.length - 1; i >= 0; i--) {
        //�쥻���g�k�A���bpush�u���array�ϥΡA�����string
        //result.push(str[i]);

        result += str[i];
    }
    console.log(result);
}

reverse("abcd"); // returns "dcba"
reverse("I am a good guy."); // returns ".yug doog a ma I"
