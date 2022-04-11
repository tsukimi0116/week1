const get = () => {
    console.log('get');
}

const getAll = () => {
    console.log('getAll');
}

const create = () => {
    console.log('create');
}

const update = () => {
    console.log('update');
}

const deletes = () => {
    console.log('deletes');
}


const User = {
    get,
    getAll,
    create,
    update,
    deletes
}

const Dept = {
    get,
    getAll,
    create,
    update,
    deletes
}

export default { User, Dept }
