import { DataTypes } from "sequelize";
import { sequelize } from '../../config/postgres.connection.js';

export const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10000,
  },
}, {
  tableName: "users",
  timestamps: false,
});

export default User;
