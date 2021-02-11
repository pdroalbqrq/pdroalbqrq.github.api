module.exports = (sequelize, Sequelize) => {
  const Exp = sequelize.define('exp', {
    startDate: {
      type: Sequelize.STRING,
    },
    endDate: {
      type: Sequelize.STRING,
    },
    charge: {
      type: Sequelize.STRING,
    },
    company: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    type: {
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: sequelize.models.user,
        key: 'id',
      },
    },
  });
  return Exp;
};
