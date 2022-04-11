const shallowFunc = () => {
    var shallow = { a: 1, b: 2 }

    //淺拷貝 
    var shallow2 = shallow

    shallow2.a = 11

    // shallow會跟著被改變
    console.log('淺拷貝');
    console.log(shallow, shallow2);
}

const deepFunc = () => {

    var deep = { a: 1, b: 2 }
    // 深拷貝
    var deep2 = Object.assign({}, deep);

    deep2.a = 11

    console.log('深拷貝');
    console.log(deep, deep2);
}

shallowFunc();

deepFunc();


