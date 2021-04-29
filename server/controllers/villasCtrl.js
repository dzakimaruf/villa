import { sequelize } from '../../config/config-db';

// findAll = select * from regions
const findAll = async (req, res) => {
    const villas = await req.context.models.Villas.findAll({
        include: [{
            model: req.context.models.Countries
        }]
    });
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
        villa_title: req.body.villa_title
    });
    return res.send(villas);
}

// update regions set region_name=:2,region_desc=:4 where region_id=:3
const update = async (req, res) => {
    const { villa_title } = req.body;
    const villas = await req.context.models.Villas.update(
        { villa_title: villa_title },// nama attribute yg akan di update
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