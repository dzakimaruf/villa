import { sequelize } from '../../config/config-db';

// findAll = select * from regions
const findAll = async (req, res) => {
    const orders = await req.context.models.Orders.findAll({
        include: [{
            model: req.context.models.Villas
        }]
    });
    return res.send(orders);
}
// findone = select * from regions where region_id=:id
const findOne = async (req, res) => {
    const orders = await req.context.models.Orders.findOne({
        where: { order_id: req.params.id }
    });
    return res.send(orders);
}

// create new region
const create = async (req, res) => {
    const orders = await req.context.models.Orders.create({
        order_created_on: req.body.order_created_on
    });
    return res.send(orders);
}

// update regions set region_name=:2,region_desc=:4 where region_id=:3
const update = async (req, res) => {
    const { order_created_on } = req.body;
    const orders = await req.context.models.Orders.update(
        { order_created_on: order_created_on },// nama attribute yg akan di update
        { returning: true, where: { order_id: req.params.id } }
    );
    return res.send(orders);
}

// delete 
const remove = async (req, res) => {
    await req.context.models.Orders.destroy({
          where: { order_id: req.params.id }
    }).then(result =>{
        console.log(result);
        return res.send("delete "+result+" rows.");
    });
    
}

const rawSQL = async (req, res) => {
    await sequelize.query('SELECT * FROM regions where order_id = :orderId',
        { replacements: { orderId: parseInt(req.params.id) }, type: sequelize.QueryTypes.SELECT } 
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