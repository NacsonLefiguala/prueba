import { updateMeet } from "../../services/meets.service";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./EditMeet.css";

const EditMeet = () => {
    const { meetId } = useParams();
    console.log(meetId);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        updateMeet(meetId, data).then(() => {
            window.location.href = "/meets";
        });
    };

    return (
        <div className="max-w-md mx-auto my-8">
        <div className="bg-gray-200 rounded-lg p-8 shadow-md text-center">
            <h1 className="text-gray-600 text-2xl font-bold mb-4">
            ¿Confirma Actualización?
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
                name="motive"
                type="text"
                {...register("motive", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Motivo"
            />
            <input
                type="text"
                name="hour"
                {...register("hour", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Hora"
            />
            <input
                type="text"
                name="date"
                {...register("date", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Fecha"
            />
            <input
                type="text"
                name="state"
                {...register("state", { required: true })}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Estado"
            />
            {errors.exampleRequired && (
                <span className="text-red-500">Este campo es obligatorio</span>
            )}
            <div className="flex space-x-4">
                <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                Enviar
                </button>
                <button
                type="button"
                onClick={() => window.location.href = '/meets'}
                className="w-full bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
                >
                Cancelar
                </button>
            </div>
            </form>
        </div>
        </div>
    );
}

export default EditMeet;