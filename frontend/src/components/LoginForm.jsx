// LoginForm.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../services/auth.service';
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data).then(() => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="login-form">
        <h1>Iniciar sesión</h1>
        <div className="">
          <input
            name="email"
            type="email"
            {...register('email', { required: true })}
            className=""
            placeholder="Correo electrónico"
          />
        </div>
        <div className="">
          <input
            type="password"
            name="password"
            {...register('password', { required: true })}
            className=""
            placeholder="Contraseña"
          />
        </div>
        {errors.exampleRequired && (
          <span>Este campo es obligatorio</span>
        )}
        <button type="submit">Iniciar sesión</button>
      </div>
    </form>
  );
}

export default LoginForm;
