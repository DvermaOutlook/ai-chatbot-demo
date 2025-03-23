const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const authRoutes = require('./auth');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('sendMessage', (message) => {
        console.log('Message received:', message);
        io.emit('receiveMessage', { user: 'Bot', text: `Hello, you said: ${message.text}` });
    });

    socket.on('disconnect', () => console.log('User disconnected'));
});


//Start socket Server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));