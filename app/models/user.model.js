const db = require('.');
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    birthdate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    nationality: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    freelance: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    languages: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return User;
};
