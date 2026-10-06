const EventEmitter = require('events');

const chat = new EventEmitter();

function sendMessage(username, message, emitter) {
    emitter.emit('message', username, message);
}

chat.on('message', (username, message) => {
    console.log(`${username}: ${message}`);
});

sendMessage('Sofiia', 'Привет всем!', chat);
sendMessage('Anna', 'Привет, София!', chat);
sendMessage('Max', 'Как дела?', chat);
sendMessage('Sofiia', 'Всё хорошо!', chat);