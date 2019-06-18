module.exports.get_chat = function(aplication, req, resp) {
    var user = req.body;
    // io é uma var global criada no app.js
    aplication.get('io')
    .emit('msgToClient',
    user.apelido);
    
    resp.render('chat');
}