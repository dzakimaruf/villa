import { sequelize } from '../../config/config-db';

// findAll = select * from regions
const findAll = async (req, res) => {
    const users = await req.context.models.Users.findAll(
        {
            include: [{
                model: req.context.models.Villas
            }]
        } 
    );
    return res.send(users);
}
// findone = select * from regions where region_id=:id
const findOne = async (req, res) => {
    const users = await req.context.models.Users.findOne({
        where: { user_id: req.params.id }
    });
    return res.send(users);
}

// create new region
const create = async (req, res) => {
    const users = await req.context.models.Users.create({
        user_name: req.body.user_name
    });
    return res.send(users);
}

// update regions set region_name=:2,region_desc=:4 where region_id=:3
const update = async (req, res) => {
    const { user_name } = req.body;
    const users = await req.context.models.Users.update(
        { user_name: user_name,
        
         },// nama attribute yg akan di update
        { returning: true, where: { user_id: req.params.id } }
    );
    return res.send(users);
}

// delete 
const remove = async (req, res) => {
    await req.context.models.Users.destroy({
          where: { user_id: req.params.id }
    }).then(result =>{
        console.log(result);
        return res.send("delete "+result+" rows.");
    });
    
}

const rawSQL = async (req, res) => {
    await sequelize.query('SELECT * FROM regions where user_id = :userId',
        { replacements: { userId: parseInt(req.params.id) }, type: sequelize.QueryTypes.SELECT } 
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