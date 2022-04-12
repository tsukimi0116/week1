const report = {
    amount: 0,
    set count(num) {
        if (num.includes(',')) {
            let copy = num.split(',')
            this.amount = parseInt(copy[0] + copy[1])
        }
    },
    get count() {
        let copy2 = this.amount.toString()
        let copy3 = copy2.slice(0, copy2.length - 3) + ',' + copy2.slice(copy2.length - 3)
        return copy3
    }
}
report.count = "123,456" //set count
console.log(typeof report.amount === "number") //true
console.log(report.count) // get count = "123,456"
console.log(report.amount) // get amount = 123456

