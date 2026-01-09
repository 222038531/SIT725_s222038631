const socket = io();

document.getElementById('wordButton').onclick = () => {
    socket.emit('getWord');
}

socket.on('word', (msg) => {
    console.log('Random word:', msg);
    document.getElementById('word').innerText = msg;
});

