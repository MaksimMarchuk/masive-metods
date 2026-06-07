var list = ["Adolf", 88, "Haiel", "Gebels", 1161, "Reich"];

//1
list.push("Rotsernberg");
console.log(list);

//2
list.pop();
console.log(list);

//3
list.unshift("Gimler");
console.log(list);

//4
list.shift();
console.log(list);

//5
var list2 = ["Göring", "Rudolf", "Bormann"];

var lists = list.concat(list2);

console.log(lists);

//6
console.log(list.join(" - "))

//7
var num = [88 , 1488, 1161, 44, 123]

num.sort((a,b) => a - b);
console.log(num);

//8
num.sort((a,b) => b - a);
console.log(num);

//9
num.reverse();
console.log(num);

//10
console.log(list.indexOf("Gebels"));

//11
console.log(list.includes("Heinrich"));

//12
console.log(list.slice(2, 4));

//13
console.log(list.splice(1, 3));

//14
list.splice(1, 1, "Hess");
console.log(list);

//15
