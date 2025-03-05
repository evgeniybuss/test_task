import { DataTypes } from 'sequelize';

export const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  await queryInterface.sequelize.query(
    'INSERT INTO users (balance) VALUES (10000);'
  );};

export const down = async ({ context: queryInterface }) => {
  await queryInterface.dropTable("users");
};