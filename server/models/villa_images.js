import { DataTypes } from "sequelize/types"

const villa_images = (sequelize, DataTypes)=>{
  const Villa_images = sequelize.define("villa_images",{
    viim_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    viim_filename: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    viim_filepath: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    viim_utama: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    viim_villa_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'villas',
        key: 'villa_id'
      }
    }
  }, {
    sequelize,
    tableName: 'villa_images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "villa_images_pkey",
        unique: true,
        fields: [
          { name: "viim_id" },
        ]
      },
    ]
  });
  return Villa_images
};

export default villa_images;
