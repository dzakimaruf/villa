import { sequelize } from '../../config/config-db';

// findAll = select * from regions
const findAll = async (req, res) => {
    const villas = await req.context.models.Villas.findAll();
    return res.send(villas);
}
// findone = select * from regions where region_id=:id
const findOne = async (req, res) => {
    const villas = await req.context.models.Villas.findOne({
        where: { villa_id: req.params.id }
    });
    return res.send(villas);
}

// create new region
const create = async (req, res) => {
    const villas = await req.context.models.Villas.create({
        villa_id: req.body.villa_id,
        villa_title: req.body.villa_title,
        villa_harga_sewa: req.body.villa_harga_sewa,
        villa_description: req.body.villa_description,
        villa_address: req.body.villa_address,
        villa_kamar_tidur: req.body.villa_kamar_tidur,
        villa_kamar_mandi: req.body.villa_kamar_mandi,
        villa_tipe: req.body.villa_tipe,
        villa_lantai: req.body.villa_lantai,
        villa_fasilitas: req.body.villa_fasilitas,
        villa_status: req.body.villa_status,
        villa_user_id: req.body.villa_user_id

    });
    return res.send(villas);
}

// update regions set region_name=:2,region_desc=:4 where region_id=:3
const update = async (req, res) => {
    const villas = await req.context.models.Villas.update(
        {  
            villa_title: req.body.villa_title,
            villa_harga_sewa: req.body.villa_harga_sewa,
            villa_description: req.body.villa_description,
            villa_address: req.body.villa_address,
            villa_kamar_tidur: req.body.villa_kamar_tidur,
            villa_kamar_mandi: req.body.villa_kamar_mandi,
            villa_tipe: req.body.villa_tipe,
            villa_lantai: req.body.villa_lantai,
            villa_fasilitas: req.body.villa_fasilitas,
            villa_status: req.body.villa_status,
            villa_user_id: req.body.villa_user_id
            

         },// nama attribute yg akan di update
        { returning: true, where: { villa_id: req.params.id } }
    );
    return res.send(villas);
}

// delete 
const remove = async (req, res) => {
    await req.context.models.Villas.destroy({
          where: { villa_id: req.params.id }
    }).then(result =>{
        console.log(result);
        return res.send("delete "+result+" rows.");
    });
    
}

const rawSQL = async (req, res) => {
    await sequelize.query('SELECT * FROM regions where villa_id = :villaId',
        { replacements: { villaId: parseInt(req.params.id) }, type: sequelize.QueryTypes.SELECT } 
    ).then(result => {
        return res.send(result);
    })
}


export default {
    findAll,
    findOne,
    create,
    update,
    remove,
    rawSQL
}