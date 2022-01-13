https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
Math.sqrt(16)  // 4
Math.pow(2, 3)  // 8


const myArray=["a", "b", "c"]
myArray[1]  // "b"

const myString = "abc"
myString[1]  // "b"
myString.charAt(1)  // "b"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt


for (const char of "asdf") {
   console.log(char)
}
// In Java:
// int[] myInts = {12, 13, 14, 15};
// for (int i : myInts) {
//     System.out.println(i)
// }
//
// Python:
// for char in "asdf":
//   print(char)

for (const char in "asdf") {
   console.log(char)
}


object = {
  a: "hello",
  b: "world",
}
object.a  // "hello"
object["a"]  // "hello"

notAnArray = {
  0: "a",
  1: "b",
  2: "c",
}

for (const value of notAnArray) {
  console.log(value)
}

// TL;DR:
// use for … of on arrays (and strings)
// use for … in on objects, but be careful

// Variablen deklarieren:
var myVariable_var = 42  // old school
let myVariable_let = 42  // allows overwriting
const myVariable_const = 42  // constant -> no overwriting

myVariable_var = 1337  // ok
myVariable_let = 1337  // ok
myVariable_const = 1337  // error


const myStack = []
myStack.push(4)  // undefined
myStack.push(5)  // undefined
console.log(myStack)  // [4, 5]
myStack.pop()  // 5
console.log(myStack)  // [4]

// push & pop -> end of array
// unshift & shift -> start of array

myArray.splice(3, 0, 4)
myArray = [...myArray.slice(0, 3), 4, ...myArray.slice(3)]
// Python [*myArray[:3], 4, *myArray[3:]


// number to string
// n.toString()
// "" + n
// `${n}`   // template string | string interpolation



["a", "s", "d", "f"].join(" und ")  // "a und s und d und f"
[1, 2, 3].join(",")  // "1,2,3"  like [1,2,3].toString()
["hello", "world"].join("")  // "helloworld"
