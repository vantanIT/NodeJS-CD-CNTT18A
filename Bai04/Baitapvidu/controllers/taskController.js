
const Task = require('../models/taskModel');

// Hien thi danh sach cong viec
function index(req, res) {
    res.render('index', {
        tasks: Task.getAll()
    });
}

function add(req, res) {
    const title = req.body.title?.trim();

    if (!title) {
        return res.status(400).send('Ten cong viec khong duoc de trong.');
    }

    Task.add(title);
    res.redirect('/');
}

function complete(req, res) {
    Task.complete(req.params.id);
    res.redirect('/');
}


function remove(req, res) {
    Task.remove(req.params.id);
    res.redirect('/');
}

module.exports = { index, add, complete, remove };
