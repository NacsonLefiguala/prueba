import axios from './root.service';
import { useParams } from 'react-router-dom';

// Obtener inspecciones por ID de inspector
export const getInspectionInfo = async (inspectionId) => {
  try {
    const url = `inspections/inspections/${inspectionId}`;
    console.log('URL:', url);

    const response = await axios.get(url);

    // Verifica si la solicitud fue exitosa (código de estado 200)
    if (response.status === 200) {
      const inspectionDetails = response.data;

      // Ajusta esto según la estructura real de tu respuesta
      if (inspectionDetails) {
        console.log('Detalles de la inspección obtenidos:', inspectionDetails);
        return inspectionDetails; // Retorna los detalles de la inspección obtenidos
      } else {
        console.error('No se obtuvieron detalles de la inspección o la estructura de la respuesta no es la esperada.');
        return null; // Retorna null o un valor por defecto si no se obtuvieron detalles
      }
    } else {
      console.error('Error al obtener detalles de la inspección. Datos de la respuesta:', response);
      return null; // Retorna null en caso de un código de estado no exitoso
    }
  } catch (error) {
    console.error('Error al obtener detalles de la inspección:', error);
    return null; // Retorna null en caso de error
  }
};



export const getInspectionsByInspectorId = async () => {
  try {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);

    if (user && user.id) {
      const url = `inspections/rol/${user.id}`;
      console.log('URL:', url);

      const response = await axios.get(url);
      const inspections = response.data;

      // Ajusta esto según la estructura real de tu respuesta
      if (inspections) {
        console.log('Inspecciones obtenidas:', inspections);
        return inspections; // Retorna las inspecciones obtenidas
      } else {
        console.error('No se obtuvieron inspecciones o la estructura de la respuesta no es la esperada.');
        return []; // Retorna un array vacío o un valor por defecto si no hay inspecciones
      }
    } else {
      console.error('No se pudo obtener el ID del usuario desde el local storage.');
      return []; // Retorna un array vacío o un valor por defecto si no hay ID de usuario
    }
  } catch (error) {
    console.error('Error al obtener inspecciones:', error);
    return []; // Retorna un array vacío o un valor por defecto en caso de error
  }
};



/*
export const getInspeccion = async () => {
  try {
    const response = await axios.get('/inspeccion');
    if (response.status === 200) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getInspeccionId = async (id) => {
  try {
    const response = await axios.get(`/inspeccion/${id}`);
    if (response.status === 200) {
      return response.data.data;
    }
    return {};
  } catch (error) {
    console.error(error);
  }
};*/
