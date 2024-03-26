//編寫一個名為reverse的函式，參數為一個String，回傳值為順序反轉的String。

function reverse(str) {
    let result = "";
    for (i = str.length - 1; i >= 0; i--) {
        //原本的寫法，錯在push只能對array使用，不能對string
        //result.push(str[i]);

        result += str[i];
    }
    console.log(result);
}

reverse("abcd"); // returns "dcba"
reverse("I am a good guy."); // returns ".yug doog a ma I"
