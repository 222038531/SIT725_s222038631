const express = require('express');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io') (http); 


const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

let wordDic = [
    "Deakin", "University", "SIT725", "Application", "Development" 
];

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('getWord', () => {
        const randomIndex = Math.floor(Math.random() * wordDic.length);
        const randomWord = wordDic[randomIndex];
        socket.emit('word', randomWord);
    });
});

http.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

