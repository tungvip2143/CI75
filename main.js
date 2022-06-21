// câu 1:false
// Var khai báo một biến có phạm vi là execution context hiện tại của nó

// câu 2:true
// Const khai báo một hằng số có phạm vi trong một block scope giống như biến khai báo bằng let nhưng giá trị của hằng số không thể thay đổi

// câu 3: true
// Let khai báo một biến có phạm vi trong một block scope

// câu 4: 3
// const mặc dù giá trị không thể gán lại, nó vẫn có thể thay đổi. Ví dụ nếu như giá trị là một object, các thuộc tính của object đó có thể thay đổi được.

// câu 5: 4

// câu 6: 1

// câu 7: 4
// không thể thay đổi giá trị của hẳng số

// câu 8: 2

// câu 9: 1

// câu 10: 2

// câu 11: 2

// câu 12: 1

// câu 13: 4

// Bài tập giải quyết vấn đề 
// problem1
console.log("problem1")

const users = [
    { name: "Angelina Jolie", age: 8 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

function pbl1(users) {
    let arrpbl1 = users.map((user) => {
        return `<div><h1>${user.name}</h1><h2>${user.age}</h2></div>`;
    });
    return arrpbl1;
}
console.log(pbl1(users))

// problem2
console.log("problem2")

const students = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'other' }
];

function pbl2(arr = []) {
    return arr.filter((item) => item.gender !== "female");
}
console.log(pbl2(students))

// problem3
console.log("problem3")

//Example 1:
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]


const sortStr = (str) => {
    let newStr = str.split("").sort();
    let resut = "";
    for (let i = 0; i < newStr.length; i++) {
        resut += newStr[i];
    }
    return resut;
};

function anagrams(list = []) {
    if (list.length == 1) return [
        [list[0]]
    ];
    let memoization = {};
    for (let i = 0; i < list.length; i++) {
        let temp = sortStr(list[i]);
        if (temp in memoization) {
            memoization[temp].push(list[i]);
        } else {
            memoization[temp] = [list[i]];
        }
    }
    // let result = [];
    // for (let key in memoization) {
    //   result.push(memoization[key]);
    // }
    // console.log(result);
    return Object.values(memoization);
}
// console.log(anagrams(strs));

//   problem4
console.log("problem4");

nums = [4, 1, 2, 1, 2];

function bai4(arr = []) {
    if (arr.length == 1) {
        return arr[0];
    }
    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res = res ^ arr[i];
    }

    return res;
}

console.log(bai4(nums));