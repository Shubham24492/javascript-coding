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
console.log(foo, '=====>')
foo = 1 //foo is not defined
var foo = 1

foo1 = 3;
console.log(foo1);
var foo1;
//this is similiar to 
/**
 * var foo1;
 * foo1 = 3;
 * console.log(foo1)
 */

//functions are also hoisted
foofun()
function foofun() {console.log('function hoisting')}

//Closure
// craete a counter function which has increament and getValue functionality
console.log('closure')
const privateCounter = () => {
    let count = 0;

    return {
        increment: (val = 1) => {
            count += val

        },
        getValue: () => {
            return count;
        }
    }
}

let counter = privateCounter()
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
//we dont have access to private count property
console.log(counter)
//{ increment: [Function: increment], getValue: [Function: getValue] }
//we have access inside a function to outside scope, 
//inside increment we have access to count which is not in increment function
//when we craete counter = privateCounter, we are creating a closure
console.dir(counter.getValue)
//Scopes > Closure (privateCounter) {count: 1}
