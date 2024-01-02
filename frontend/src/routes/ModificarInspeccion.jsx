import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { getInspectionInfo } from '../services/InspectorService';
import './ModificarInspeccion.css';

const ModificarInspeccion = () => {
  const { inspectionId } = useParams();
  const [inspection, setInspection] = useState({
    lugar: '',
    fecha: '',
    observaciones: '',
    estado: '',
  });
  const [observacionesNuevas, setObservacionesNuevas] = useState('');
  const [nuevoEstado, setNuevoEstado] = useState('');
  const [archivoJPG, setArchivoJPG] = useState('');

  useEffect(() => {
    const fetchInspectionDetails = async () => {
      try {
        if (!inspectionId) {
          console.error('ID de inspección no disponible.');
          return;
        }

        const response = await getInspectionInfo(inspectionId);

        if (response) {
          console.log('Detalles de la inspección:', response);
          setInspection(response);
        } else {
          console.error('Error al obtener detalles de la inspección.');
        }
      } catch (error) {
        console.error('Error al obtener detalles de la inspección:', error);
      }
    };

    if (inspectionId) {
      fetchInspectionDetails();
    }
  }, [inspectionId]);

  const handleObservationsChange = (event) => {
    setObservacionesNuevas(event.target.value);
  };

  const handleStatusChange = (event) => {
    setNuevoEstado(event.target.value);
  };

  const handleFileChange = (event) => {
    setArchivoJPG(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!inspectionId) {
        console.error('ID de inspección no disponible.');
        return;
      }

      // Envía las observaciones y el nuevo estado al backend
      await axios.put(`/inspections/${inspectionId}/observations`, {
        observaciones: observacionesNuevas,
      });
      await axios.put(`/inspections/${inspectionId}/status`, { nuevoEstado });

      // Si hay un archivo JPG seleccionado, lo sube
      if (archivoJPG) {
        const formData = new FormData();
        formData.append('fileName', archivoJPG);
        await axios.post(`/inspections/${inspectionId}/uploadjpg`, formData);
      }

      // Puedes redirigir al usuario o realizar otras acciones después de la actualización exitosa
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="aa">
    <h2 className="b">Detalles de la Inspección</h2>
    <p className="c">
      <span className="d">Lugar:</span> {inspection.lugar}
    </p>
    <p className="e">
      <span className="f">Fecha:</span> {inspection.fecha}
    </p>
    <p className="g">
      <span className="h">Observaciones:</span> {inspection.observaciones}
    </p>

    <form onSubmit={handleSubmit} className="i">
      <label htmlFor="observacionesNuevas" className="j">
        Agregar Observaciones:
      </label>
      <textarea
        id="observacionesNuevas"
        value={observacionesNuevas}
        onChange={handleObservationsChange}
        className="k"
      />

      <label htmlFor="nuevoEstado" className="l">
        Cambiar Estado:
      </label>
      <select
        id="nuevoEstado"
        value={nuevoEstado}
        onChange={handleStatusChange}
        className="m"
      >
        <option value="en espera">En Espera</option>
        <option value="aprobado">Aprobado</option>
        <option value="rechazado">Rechazado</option>
      </select>

      <label htmlFor="archivoJPG" className="n">
        Subir Archivo JPG:
      </label>
      <input type="file" id="archivoJPG" onChange={handleFileChange} className="o" />

      <div className="p">
        <button
          type="submit"
          className="q"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
  );
};

export default ModificarInspeccion;

