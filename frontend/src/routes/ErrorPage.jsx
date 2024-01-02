import { useRouteError } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  const error = useRouteError();

  /**
   * Este mensaje de error, está pensado para los desarrolladores.
   * En un entorno de producción, no se debería mostrar este mensaje o almenos
   * no de esta forma.
   */
  console.error({
    status: error.status,
    statusText: error.statusText,
    message: error.message ? error.message : 'No message',
  });

  return (
    <div className="div_error">
    <div className="div-conten">
        <p className="errorr">404</p>
        <p className="-text">Pagina No Encontrada</p>
        <p className="losiento">Lo sentimos, no se pudo encontrar la página que estás buscando.</p>
    </div>
  </div>
  );
};

export default ErrorPage;
