var app = require('./config/server');

var server = app.listen(3000, function() {
    console.log('Servidor online');
});

io = require('socket.io').listen(server);

app.set('io', io);

// criar conection por websocket
// estamos ouvindo eventos de conexão
io.on('connection', function(my_socket) {
    console.log('user conectou');

    my_socket.on('disconnect', () => console.log('user desconectado'));

    my_socket.on('msgToServer', (data) => {
        // insere no seu próprio device
        my_socket.emit('msgToClient', { apelido: data.apelido, contentMensagem: data.contentMensagem });
        // insere nos demais devices do socket
        my_socket.broadcast.emit('msgToClient', { apelido: data.apelido, contentMensagem: data.contentMensagem });
    })
});