import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Login from './routes/Login.jsx';
import Meet from './routes/Meet/Meet.jsx';
import './index.css';
import CreateMeet from './routes/Meet/CreateMeet.jsx';
import DetailsMeet from './routes/Meet/DetailsMeet.jsx';
import DeleteMeet from './routes/Meet/DeleteMeet.jsx';
import EditMeet from './routes/Meet/EditMeet.jsx';
import InspeccionesLista from './routes/InspeccionesLista.jsx';
import ModificarInspeccion from './routes/ModificarInspeccion.jsx';
import FormRegu from './routes/FormRegu.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/meets',
        element: <Meet />,
      },
      {
        path: '/meets/:meetId',
        element: <DetailsMeet />,
      },
      {
        path: '/meets/create',
        element: <CreateMeet />,
      },
      {
        path: '/meets/delete/:meetId',
        element: <DeleteMeet />,
      },
      {
        path: '/meets/update/:meetId',
        element: <EditMeet />,
      },
      {
        path: '/inspector/:inspectorId',
        element: <InspeccionesLista />,
      },
      {
        path: '/inspecciones/:inspectionId',
        element: <ModificarInspeccion />
      },
      {
        path: '/formulario',
        element: <FormRegu />
      },
    ],
  },
  {
    path: '/auth',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
