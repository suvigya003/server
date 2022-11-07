module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      targetYear: {
        type: Sequelize.STRING,
      },
      emailId: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      contactNumber: {
          type: Sequelize.STRING,
      },
      optionalSubject: {
          type: Sequelize.STRING,
      },
      batch: {
          type: Sequelize.STRING,
      },
    });
    return Student;
  };