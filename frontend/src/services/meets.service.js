import axios from './root.service';

export const getMeets = async () => {
    try {
        const response = await axios.get('/meet');
        if (response.status === 200) {
            return response.data.data;
        }
        return [];
    } catch (error) {
        console.error(error);
    }
}

export const getMeet = async (id) => {
    try {
        const response = await axios.get(`/meet/${id}`);
        if (response.status === 200) {
            return response.data.data;
        }
        return {};
    } catch (error) {
        console.error(error);
    }
}

export const createMeet = async (meet) => {
    try {
        const response = await axios.post('/meet', meet);
        if (response.status === 200) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        console.error(error);
    }
}

export const updateMeet = async (id, meet) => {
    try {
        const response = await axios.put(`/meet/${id}`, meet);
        if (response.status === 200) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        console.error(error);
    }
}

export const deleteMeet = async (id) => {
    try {
        const response = await axios.delete(`/meet/${id}`);
        if (response.status === 200) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        console.error(error);
    }
}