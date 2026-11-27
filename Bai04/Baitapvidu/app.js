
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

const taskRoutes = require('./routes/taskRoutes');
app.use('/', taskRoutes);

// Xu ly duong dan khong ton tai
app.use((req, res) => {
    res.status(404).send('404 - Khong tim thay trang.');
});

app.listen(PORT, () => {
    console.log(`To-Do List dang chay tai http://localhost:${PORT}`);
});
