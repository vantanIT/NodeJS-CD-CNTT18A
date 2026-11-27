
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3003;

// Cho phep su dung CSS trong thu muc public
app.use(express.static(path.join(__dirname, 'public')));

// Cac trang gioi thieu ca nhan
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'skills.html'));
});

app.get('/hobbies', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'hobbies.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Xu ly duong dan khong ton tai
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 - Khong tim thay trang</h1>
        <a href="/">Quay ve trang chu</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Website dang chay tai http://localhost:${PORT}`);
});
