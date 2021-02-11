const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize);
db.users = require('./user.model.js')(sequelize, Sequelize);
db.info = require('./info.model.js')(sequelize, Sequelize);
db.skill = require('./skill.model.js')(sequelize, Sequelize);
db.exp = require('./exp.model.js')(sequelize, Sequelize);

db.info.belongsTo(db.users);
db.users.hasMany(db.info);
db.skill.belongsTo(db.users);
db.users.hasMany(db.skill);
db.exp.belongsTo(db.users);
db.users.hasMany(db.exp);

module.exports = db;
