console.log("Hello world");
//1 write a code to get array of names form given array of users
const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age:20,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18,
    }, {
        id: 3,
        name: "Mike",
        isActive: false,
        age:30,
    },
]

let ans1 = users.map(user=>user.name)
console.log(ans1)

ans1 = [];
for (let i=0; i< users.length; i++){
    ans1.push(users[i].name);
}
console.log(ans1)

ans1 = [];
users.forEach(element => {
    ans1.push(element.name)
});
console.log(ans1)

//2) get back only active users

let ans2 = users.filter((user)=> user.isActive).map((user)=> user.name)
console.log(ans2)

//3)sort the users by age desc
let ans3 = users.sort((a,b)=> {
    if (a.age < b.age)
        return 1
    if (a.age > b.age)
        return -1
    return 0
})
console.log("sort the users by age desc", ans3)
//sort => filter => map

//question what will be logged in first exapmle and second example
let var1;
console.log(var1);
//undefined => vairable is declare but not initialised
console.log(typeof var1);
//undefined

let var2 = null;
console.log(var2);
//null
console.log(typeof var2);
//object

//Hoisting
//Question what will be the output
console.log(foo)
foo = 1
var foo = 1

