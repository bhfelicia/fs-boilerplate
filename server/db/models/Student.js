const { Sequelize, DataTypes, Model } = require("sequelize");

const db = require("../db");

class Student extends Model {}

Student.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:
        "https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/EDUCMS/tz7n-7vqceaq86dprdnzag.jpg",
    },
    gpa: {
      type: DataTypes.DECIMAL(3, 2),
      defaultValue: 3.5,
    },
  },
  { sequelize: db, modelName: "students" }
);

// Student.beforeValidate = function (instance) {
//   console.log("this runs");
//   if (!instance.email.length) {
//     instance.email = `${instance.firstName}.${instance.lastName}@gmail.com`;
//   }
// };

module.exports = Student;
