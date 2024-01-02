import ReguForm from '../components/ReguForm';
import DomicilioForm from '../components/DomicilioForm';
import './FormRegu.css';

const FormRegu = () => {
    return (
        <div className="Cuestionario">
            <div className="cc">
                <ReguForm />
                <DomicilioForm />
            </div>
        </div>
    );
};

export default FormRegu;