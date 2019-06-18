module.exports = function(aplication) {
    aplication.get('/chat', (req, resp) => aplication.app.controllers.chat.get_chat(aplication, req, resp));

    aplication.post('/chat', (req, resp) => aplication.app.controllers.chat.get_chat(aplication, req, resp));
}