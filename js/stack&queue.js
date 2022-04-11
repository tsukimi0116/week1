var arr = ['arr1', 'arr2'];
var stackTarget = 'stack';
var queueTarget = 'queue';

//stack 先進後出
const stackFunc = () => {
    arr.push(stackTarget);
    console.log(arr, 'push');
    arr.pop();
    console.log(arr, 'pop');
}

//queue 先進先出
const queueFunc = () => {
    arr.push(queueTarget);
    console.log(arr, 'push');
    arr.shift();
    console.log(arr, 'shift');
}

stackFunc();
queueFunc();