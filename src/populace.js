const db = require('./config/database');

const UsuarioDAO = require('./models/dao/UsuarioDAO');


// Sincronize os modelos com o banco de dados
db.sequelize.sync({ force: true }).then(async () => {

  process.exit(0);
});
