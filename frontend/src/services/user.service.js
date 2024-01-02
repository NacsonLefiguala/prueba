import axios from './root.service';

export const getUsers = async () => {
    try {
        const response = await axios.get('/');
        if (response.status === 200) {
            return response.data.data;
        }
        return [];
    } catch (error) {
        console.error(error);
    }
}

export const getUser = async (id) => {
    try {
        const response = await axios.get(`/${id}`);
        if (response.status === 200) {
            return response.data.data;
        }
        return {};
    } catch (error) {
        console.error(error);
    }
}

export const createUser = async (user) => {
    try {
        const response = await axios.post('/', user);
        if (response.status === 200) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        console.error(error);
    }
}

export const createFormulario = async (id, user) => {
    try {
        const responseData = user.data;
            console.log(responseData);
        const response = await axios.post(`/${id}/form`, user);
        if (response.status === 200) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        console.error(error);
    }
}

export const updateUser = async (id, user) => {
    try {
        const response = await axios.put(`/${id}`, user);
        if (response.status === 200) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        console.error(error);
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`/${id}`);
        if (response.status === 200) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        console.error(error);
    }
}