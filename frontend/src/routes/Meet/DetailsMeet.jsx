import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeet } from "../../services/meets.service";
import { Link } from 'react-router-dom';
import "./DetailsMeet.css";

const DetailsMeet = () => {
    const { meetId } = useParams();
    const [meet, setMeet] = useState([]);

    useEffect(() => {
        getMeet(meetId).then((response) => {
            setMeet(response);
        });
        console.log(meet);
    }, [])

    return (
        <div className="max-w-md mx-auto my-8">
        <div className="bg-slate-200 rounded-lg p-6 shadow-md">
            <h1 className="text-slate-600 text-2xl font-bold font-mono">
            {meet.motive}:
            </h1>
            <p className="text-slate-700 mb-2">Hora: {meet.hour}</p>
            <p className="text-slate-700 mb-2">Fecha: {meet.date}</p>
            <p className="text-slate-700 mb-4">Estado: {meet.state}</p>
            
            <div className="flex space-x-4">
            <div className="flex-1">
                <div className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 text-center">
                <Link to={`/meets/delete/${meet._id}`}>DELETE</Link>
                </div>
            </div>
            <div className="flex-1">
                <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center">
                <Link to={`/meets/update/${meet._id}`}>UPDATE</Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default DetailsMeet;