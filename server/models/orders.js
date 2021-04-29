const orders = (sequelize, DataTypes) =>{
    const Orders = sequelize.define('orders', {
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_created_on: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    order_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    order_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    order_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    order_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    order_villa_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'villas',
        key: 'villa_id'
      }
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
  return Orders
};
export default orders;