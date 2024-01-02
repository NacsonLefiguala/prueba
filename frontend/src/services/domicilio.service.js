import axios from './root.service';

export const getDomicilios = async () => {
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

export const createDomicilio = async (domicilio) => {
    try {
        const response = await axios.post('/', domicilio);
        if (response.status === 200) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        console.error(error);
    }
}

export const updateDomicilio = async (id, domicilio) => {
    try {
        const response = await axios.put(`/${id}`, domicilio);
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

export const uploadPDF = async (id, file) => {
    try {
        const response = await axios.post(`/${id}/upload`, file);
        if (response.status === 200) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        console.error(error);
    }
}