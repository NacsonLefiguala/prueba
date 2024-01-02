import { deleteMeet } from "../../services/meets.service";
import { useParams } from "react-router-dom";
import "./DeleteMeet.css";

const DeleteMeet = () => {
    const { meetId } = useParams();
    console.log(meetId);

    const handleDeleteClick = () => {
        deleteMeet(meetId).then(() => {
            window.location.href = "/meets";
        });
    };

    const handleCancelClick = () => {
        window.location.href = "/meets";
    };

    return (
        <div className="max-w-md mx-auto my-8">
        <div className="bg-slate-200 rounded-lg p-8 shadow-md text-center">
          <h1 className="text-slate-600 text-2xl font-bold mb-4">
            ¿Confirma Eliminación?
          </h1>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleDeleteClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-300"
            >
              Eliminar
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-gray-300"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
}

export default DeleteMeet;