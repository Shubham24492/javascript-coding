console.log("Hello world");
//1 write a code to get array of names form given array of users
const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
    }, {
        id: 3,
        name: "Mike",
        isActive: false,
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

//3)