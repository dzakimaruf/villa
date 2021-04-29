const villas = (sequelize, DataTypes) => {
  const Villas = sequelize.define('villas', {
    villa_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    villa_harga_sewa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    villa_title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    villa_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    villa_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    villa_tipe: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    villa_kamar_tidur: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    villa_kamar_mandi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    villa_lantai: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    villa_fasilitas: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    villa_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    villa_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'villas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "villas_pkey",
        unique: true,
        fields: [
          { name: "villa_id" },
        ]
      },
    ]
  });
  return Villas
};

export default villas;
