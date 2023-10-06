const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        todo: 'TODO 1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        todo: 'TODO 2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        todo: 'TODO 3',
    },
];
async function getAllTodos() {
    // Fausse requête ...
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // SEULEMENT POUR LA DÉMO ET FORCER LE RE-RENDERER
    const dataCopy = Object.assign([], DATA);
    return dataCopy;
}

async function insertTodo(todo) {
    // Fausse requête ...
    await new Promise((resolve) => setTimeout(resolve, 2000));
    DATA.push(todo);
    return todo;
}

async function getTodo(id) {
    // Fausse requête ...
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const todo = DATA.find((todo) => todo.id === id);
    return todo;
}

export default {getAllTodos, insertTodo, getTodo}