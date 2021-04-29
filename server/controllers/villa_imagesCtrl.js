const create = async (req, res,next) => {
    // jika gunakan spread operator
    const dataVilla = req.dataVilla;


    for (const  data of dataVilla) {
        await createImage(req,res,data);
    }

    // using middleware
    next();


}

 const createImage = async (req, res,data) => {
    const{vimId,utama,fileName,filePath} = data;
    await req.context.models.Villa_images.create({
        viim_filename: fileName,
        viim_filepath : filePath,
        viim_utama : utama,
        viim_villa_id : vimId
    }).catch(error=>{
        console.log(error);
    });
    
} 

const findAll = async (req, res) => {
    const result = await req.context.models.esImages.findAll();
    return res.send(result);
}


export default {
    create,
    findAll
}
