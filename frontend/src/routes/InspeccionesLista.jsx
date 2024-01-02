import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getInspectionsByInspectorId } from '../services/InspectorService';
import './InspeccionesLista.css';

const InspeccionesLista = () => {
  const [inspecciones, setInspecciones] = useState([]);
  const { inspectorId } = useParams();

  useEffect(() => {
    // Creamos una variable de referencia para rastrear la solicitud actual
    let isCancelled = false;

    const fetchInspecciones = async () => {
      try {
        const response = await getInspectionsByInspectorId(inspectorId);

        // Verificamos si la solicitud fue cancelada antes de actualizar el estado
        if (!isCancelled) {
          if (Array.isArray(response.data)) {
            // Si la respuesta es un array, lo asignamos directamente a inspecciones
            setInspecciones(response.data);
            console.log('Inspecciones obtenidas:', response.data);
          } else {
            console.error('Error al obtener las inspecciones. Datos de la respuesta:', response);
          }
        }
      } catch (error) {
        // Verificamos si la solicitud fue cancelada antes de manejar el error
        if (!isCancelled) {
          console.error('Error al obtener las inspecciones', error);
        }
      }
    };

    // Realizamos la solicitud cuando el componente se monta
    fetchInspecciones();

    // Función de limpieza que se ejecuta cuando el componente se desmonta o cuando inspectorId cambia
    return () => {
      // Marcamos la solicitud actual como cancelada al limpiar
      isCancelled = true;
    };
  }, [inspectorId]);

  return (
<div className="cuerpo">
  <h1 className="ti">Lista de Inspecciones para el Inspector ID: {inspectorId}</h1>
  <div className="cont">
    <div className="subcont">
      <h2 className="todo">Todas Las Inspecciones</h2>
      <div className="bloques">
        {inspecciones.map((inspeccion) => (
          <div key={inspeccion._id} className="bloque">
            <p className="lugar">Lugar: {inspeccion.lugar}</p>
            <p className='fecha'>Fecha: {inspeccion.fecha}</p>
          </div>
        ))}
      </div>
    </div>

    {inspecciones.length > 0 && (
      <div className="ins">
        <h2 className="ti2">Inspecciones Asignadas</h2>
        <div className="bloques2">
          {inspecciones.map((inspeccion) => (
            <div key={inspeccion._id} className="bloque2">
              <p className="lu">Lugar: {inspeccion.lugar}</p>
              <p className='fecha'>Fecha: {inspeccion.fecha}</p>
              <div className="de">
                <Link to={`/inspecciones/${inspeccion._id}`}>
                    <button className="op">
                    Modificar
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
</div>

  );
};

export default InspeccionesLista;
