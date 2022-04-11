let obj = { a: 1, b: 2, c: { d: { e: 5 } } }
let { a, b, c: { d }, b: f = 5 } = obj
console.log(d) // ?
console.log(f) //?
console.log({ ...obj, f: b = 6 }) //?
console.log(b) //?