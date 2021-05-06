import axios from 'axios';

const list = async () => {
     try {
        let response = await axios.get(`/api/villas`)
        return await response.data
    } catch (err) {
        return await err.message
    } 

}

const create = async (villa) => {
    try {
        let response = await axios.post(`/api/villas/`,villa)
        return await response.data
    } catch (err) {
        return await err.response.data
    } 
}

const findOne = async (id) => {
    try {
        let response = await axios.get(`/api/villas/${id}`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

const update = async (data) => {
    const id = data.villa_id;
    try {
        let response = await axios.put(`/api/villas/${id}`,
            data)
        return await response.data
    } catch (err) {
        return await err.response.data
    }
}

const remove = async (id) => {
    try {
        let response = await axios.delete(`/api/villas/${id}`)
        return await response.data
    } catch (err) {
        return res.status(400).json({error : "error when delete row"})
    }
}

export default { list, create, remove, findOne, update }