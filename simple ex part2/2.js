//�s�g�@�ӦW��swap���禡�A�ѼƬ��@��String�A�^�ǭȬ��j�p�g���઺String�C

function swap(str) {
    let result = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    console.log(result);
}

swap("Aloha"); // returns "aLOHA"
swap("Love you."); // returns "lOVE YOU."
