
const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.get('/', taskController.index);
router.post('/add', taskController.add);
router.post('/complete/:id', taskController.complete);
router.post('/delete/:id', taskController.remove);

module.exports = router;
