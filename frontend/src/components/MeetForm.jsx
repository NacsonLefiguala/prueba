import { useForm } from "react-hook-form"
import {createMeet} from "../services/meets.service"
import "./MeetForm.css"

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const MostrarPorConsola = async (data) => {
    const user = JSON.parse(localStorage.getItem('user'));
    data.user = user.id;
    data.state = "Pendiente";
    console.log(data);
    const res = await createMeet(data);

    console.log(res);
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit(MostrarPorConsola)} className="meetForm">
      <div className="contentFrom">
        <div className="fondo">
          <h2 className="ag">Agenda Tu Cita</h2>
          <p className="sub">Rellena el formulario para coordinar con uno de nuestros inspectores.</p>

          <div className="nose">
            <div className="nose2">
              <div className="inicio">
                <p className="info">Información de Visita</p>
                <p>Por favor rellena todos los campos.</p>
              </div>

              <div className="miau">
                <div className="miau2">
                  <div className="motivo">
                    <label htmlFor="motive">Motivo</label>
                    <input
                      autoComplete="off"
                      {...register("motive", { required: true })}
                      type="text"
                      className="in-mot"
                    />
                  </div>

                  <div className="hora">
                    <label htmlFor="hour">Hora de Visita</label>
                    <input
                      autoComplete="off"
                      {...register("hour", { required: true })}
                      type="text"
                      pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
                      title="Formato válido: HH:MM"
                      className="in-hora"
                    />
                  </div>

                  <div className="fex">
                    <label htmlFor="date">Fecha</label>
                    <input
                      autoComplete="off"
                      {...register("date", { required: true })}
                      type="text"
                      pattern="^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}$"
                      title="Formato válido: DD/MM/AAAA"
                      className="in-fex"
                      placeholder="DD/MM/AAAA"
                    />
                  </div>
                  
                  {errors.exampleRequired && <span>This field is required</span>}
          
                  <div className="no">
                    <div className="ala">
                      <button
                        type="submit"
                        className="aceptar"
                      >
                        Aceptar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}