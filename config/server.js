// importar o módulo do framework express
let my_express = require('express');

// importar o módulo do consign para melhorar a importação de módulos
let my_consign = require('consign');

// importar o módulo body-parser: captura dos dados trafegados
let my_body_parser = require('body-parser');

// iniciar express
let my_app = my_express();

my_app.set('view engine', 'ejs');
my_app.set('views', './app/views');
// middlware
my_app.use(my_body_parser.urlencoded({extended: true}));
my_app.use(my_express.static('./public'));

// automatizando os requires
my_consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(my_app);

// exportar
module.exports = my_app;