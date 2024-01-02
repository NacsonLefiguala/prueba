import { useForm } from "react-hook-form";
import { createFormulario, getUser } from "../services/user.service";
import "./ReguForm.css";

export default function ReguForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const userId = getUser(data);
            await createFormulario(userId, data);
            console.log("Formulario enviado con éxito");
        } catch (error) {
            console.error("Error al enviar el formulario", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="Rform">
            <label htmlFor="nombres" className="nombres">Nombres:</label>
            <input
                type="text"
                id="nombres"
                name="nombres"
                {...register("nombres", {
                    required: "Este campo es obligatorio",
                    maxLength: {
                        value: 50,
                        message: "El nombre no puede tener más de 50 caracteres",
                    },
                })}
                className="in-nombres"
            />
            {errors.nombres && <p className="er-nombres">{errors.nombres.message}</p>}

            <label htmlFor="apellidos" className="apellidos">Apellidos:</label>
            <input
                type="text"
                id="apellidos"
                name="apellidos"
                {...register("apellidos", {
                    required: "Este campo es obligatorio",
                    maxLength: {
                        value: 50,
                        message: "Los apellidos no pueden tener más de 50 caracteres",
                    },
                })}
                className="in-apellidos"
            />
            {errors.apellidos && <p className="er-apellidos">{errors.apellidos.message}</p>}

            <label htmlFor="fechaNacimiento" className="fechan">Fecha de Nacimiento:</label>
            <input
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                {...register("fechaNacimiento", {
                    required: "Este campo es obligatorio",
                })}
                className="in-fechan"
            />
            {errors.fechaNacimiento && <p className="er-fechan">{errors.fechaNacimiento.message}</p>}

            <button type="submit" className="enviar">Enviar</button>
        </form>
    );
}
