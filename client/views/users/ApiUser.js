import axios from 'axios';

const list = async () => {
    try {
        let response = await axios.get(`/api/user`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}


const create = async (user) => {
    await axios.post(`/api/user`, user).then(response => { return response })
        .catch(error => { return error.message })
}

const findOne = async (data) => {
    const user_id = parseInt(data);
    try {
        let response = await axios.get(`/api/user/${user_id}`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

const update = async (region) => {
    const user_id = parseInt(user.user_id);
    try {
        let response = await axios.put(`/api/user/${user_id}`,
        user)
      return await response.data
    } catch(err) {
        return await err.message
    } 
  }

const remove = async (data) => {
    const user_id = parseInt(data);
    try {
        let response = await axios.delete(`/api/user/${user_id}`)
        return await response.data
    } catch (err) {
        return await err.message
    }
}

export default { list, create,remove,findOne,update}