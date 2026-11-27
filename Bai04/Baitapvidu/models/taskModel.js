
let tasks = [
    { id: 1, title: 'Hoc Node.js va Express', completed: false },
    { id: 2, title: 'Thuc hanh mo hinh MVC', completed: false },
    { id: 3, title: 'Hoan thanh bai tap', completed: true }
];

function getAll() {
    return tasks;
}

function add(title) {
    const id = tasks.length
        ? Math.max(...tasks.map(task => task.id)) + 1
        : 1;

    tasks.push({ id, title, completed: false });
}

function complete(id) {
    const task = tasks.find(task => task.id === Number(id));
    if (task) task.completed = true;
}

function remove(id) {
    tasks = tasks.filter(task => task.id !== Number(id));
}

module.exports = { getAll, add, complete, remove };
