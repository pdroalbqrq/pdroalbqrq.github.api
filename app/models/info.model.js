module.exports = (sequelize, Sequelize) => {
  const Info = sequelize.define('info', {
    total: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
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
  return Info;
};
