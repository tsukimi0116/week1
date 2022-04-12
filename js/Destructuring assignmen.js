let obj = { a: 1, b: 2, c: { d: { e: 5 } } }
let { a, b, c: { d }, b: f = 5 } = obj
// let { b: f = 5} = obj
console.log(d) // ? { e: 5 } //解構
console.log(f) //? 2 // 解構 把b拿出來重新賦予變數名稱
console.log({ ...obj, f: b || 6 }) //? {a:1, b:2, c:d{e: 5},f:6} //非解構 前後不相干
console.log(b) //? 6 //非解構


