import { Outlet, useNavigate } from 'react-router-dom';
import { logout } from '../services/auth.service';
import { AuthProvider } from '../context/AuthContext';
import './Root.css';
function Root() {
  return (
    <AuthProvider>
      <PageRoot />
    </AuthProvider>
  );
}

function PageRoot() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };


  return (
    <div>
      <div>
      <nav className="nav">
        <div className="ContentNav">
            <a href="/" className="Logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Logotipo_oficial_del_Gobierno_de_Chile.png" className="img" />
              <span className="span">Municipalidad</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="nose" aria-controls="navbar-default" aria-expanded="false">
              <svg className="url" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          <div className="elemento" id="navbar-default">
            <ul className="a">
              <li>
                <a href="/formulario" className="cre">Crear Formulario</a>
              </li>
              <li>
                <a href="/meets/create" className="meet">Agendar Reunión</a>
              </li>
              <li>
                <a href="/meets" className="meets">Lista Reuniones</a>
              </li>
              <li>
                <a href="/inspector/6527498476058358e9d7b2b4" className="meets">Interfaz Inspector</a>
              </li>
              <li>
                <a onClick={handleLogout} className="click">Cerrar Sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
              
      </div>
      <Outlet />
    </div>
  );
}

export default Root;