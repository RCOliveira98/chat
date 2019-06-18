module.exports.get_chat = function(aplication, req, resp) {
    var dataForm = req.body;
    // io é uma var global criada no app.js
    aplication.get('io')
        .emit('msgToClient', { apelido: dataForm.apelido, contentMensagem: ' entrou no chat' });

    resp.render('chat', { data_form: dataForm });
}