module.exports = function(aplication) {
    aplication.get('/', function(req, resp) { 
        aplication.app.controllers.index.get_index(aplication, req, resp)}
        );
}