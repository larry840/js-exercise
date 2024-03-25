// 在不使用Array.prototype.reverse()及考慮時間複雜度的情況下，做到反轉陣列。
const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];
let reversed_friends = [];
for (let i = friends.length - 1; i >= 0; i--) {
    reversed_friends.push(friends[i]);
}
console.log(reversed_friends);
