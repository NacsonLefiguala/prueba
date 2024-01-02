import { useForm } from 'react-hook-form';
import { createDomicilio, uploadPDF } from '../services/domicilio.service';
import './DomicilioForm.css';

const DomicilioForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            await createDomicilio(data);
            console.log('Domicilio creado con éxito');
        } catch (error) {
            console.error('Error al crear el domicilio', error);
        }
    };

    const handleUploadPDF = async () => {
        try {
            await uploadPDF();
            console.log('PDF subido con éxito');
        } catch (error) {
            console.error('Error al subir el PDF', error);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="ciudad" className="ciudad">
                Ciudad:
            </label>
            <input
                type="text"
                id="ciudad"
                {...register('ciudad', {
                    required: 'Este campo es obligatorio',
                    maxLength: {
                        value: 50,
                        message: 'La ciudad no puede tener más de 50 caracteres',
                    },
                })}
                className="c-input"
            />
            {errors.ciudad && <p className="e-ciudad">{errors.ciudad.message}</p>}

            <label htmlFor="calle" className="calle">
                Calle:
            </label>
            <input
                type="text"
                id="calle"
                {...register('calle', {
                    required: 'Este campo es obligatorio',
                    maxLength: {
                        value: 50,
                        message: 'La calle no puede tener más de 50 caracteres',
                    },
                })}
                className="ca-input"
            />
            {errors.calle && <p className="ca-er">{errors.calle.message}</p>}

            <div className="div-button">
                <button
                    type="button"
                    className="button"
                    onClick={handleUploadPDF}
                >
                    Subir PDF
                </button>

                <button type="submit" className="registrar">
                    Registrar
                </button>
            </div>
        </form>
    );
};

export default DomicilioForm;