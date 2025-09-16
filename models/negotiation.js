"use strict";
export const Negotiation = (sequelize, DataTypes) => {
  const Negotiation = sequelize.define("Negotiation", {
    clienteId: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, 
  {
    tableName: 'negociacionesrealizadas',
    timestamps: false
  }
);

 Negotiation.associate = (models) => {
    Negotiation.belongsTo(models.client, {
      foreignKey: 'cliente_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Negotiation;
};
