const primeNumFunc = (num) => {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}


var tot = 0;
for (var i = 2; i <= 100; i++) {
    if (primeNumFunc(i)) {
        tot += i;
    }
}

console.log(tot);




