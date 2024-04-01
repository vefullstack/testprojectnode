module.exports = (sequelize, Sequelize) => {
  const serviceModal = sequelize.define("Use_Case_User_Scenario_Importance_Master", {
    Use_Case_Importance: {
      type: Sequelize.STRING
    },
    Base_Use_Case: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  });

  return serviceModal;
};
