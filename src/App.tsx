import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import BudgetCalculator from './pages/BudgetCalculator';

/**
 * Componente principal de la aplicación
 * Organiza todos los demás componentes y los envuelve con QuoteProvider.
 * Esto hace que el estado global esté disponible para todos los componentes anidados.
 */
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/calculator" element={<BudgetCalculator />} />
      </Routes>
    </Router>
  );
};

export default App;