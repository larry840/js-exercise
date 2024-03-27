// let myButton = document.querySelector("#my-btn");

// myButton.addEventListener("click", () => {
//     alert("click");
// });

let body = document.querySelector("body");

let myH1 = document.createElement("h1");
// innerHTML和innerText的差別是，輸入的內容會不會被當html文本來輸出
myH1.innerHTML = "<a href='https://www.google.com'>Google</a>";
body.appendChild(myH1);
