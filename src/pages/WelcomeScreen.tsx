import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#D852BD] ">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center w-[50%]">
        <h1 className="text-4xl font-extrabold py-5">
          Bienvenido/a a la Calculadora de Presupuestos Web
        </h1>
        <p className="text-lg mb-8 leading-relaxed">
          Esta aplicación te ayudará a agilizar los cálculos para el presupuesto de tu sitio web,
          permitiéndote seleccionar servicios y personalizar opciones de manera interactiva.
          El precio total se ajustará automáticamente.
        </p>
        <Link
          to="/calculator"
          className="inline-block bg-[#D852BD] hover:bg-[#e881d3] text-white font-bold py-3 px-8 rounded-full shadow-lg"
        >
          ¡Comenzar!
        </Link>
      </div>
    </div>
  );
}
  export default WelcomeScreen;