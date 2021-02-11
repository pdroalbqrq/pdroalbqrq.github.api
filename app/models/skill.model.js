module.exports = (sequelize, Sequelize) => {
  const Skill = sequelize.define('skill', {
    percentage: {
      type: Sequelize.STRING,
    },
    name: {
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
  return Skill;
};
