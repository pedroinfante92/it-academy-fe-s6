import { useQuoteContext } from "../contexts/QuoteContext";
import { useState, ChangeEvent, FormEvent } from "react";
import type { Quote } from "../types/types"

function RequestQuoteForm() {
  const { totalPrice, selectedServices, addQuote } = useQuoteContext()

  const [formData, setFormData] = useState<{ name: string; phone: string; email: string }>({
    name: '',
    phone: '',
    email: '',
  });
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || totalPrice <= 0) {
      setConfirmationMessage('Por favor, rellene todos los campos obligatorios.');
      setShowConfirmation(true);
      return;
    }

    const quoteData: Quote = {
      ...formData,
      totalPrice,
      selectedServices,
      date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    };

    addQuote(quoteData);
    setFormData({ name: '', phone: '', email: '' });
    setConfirmationMessage('Presupuesto enviado correctamente!');
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    setConfirmationMessage('');
  };

  return (
    <div className="flex justify-center">
      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-6">Pedir presupuesto</h2>
          <form onSubmit={handleSubmit} className="flex gap-4 justify-center">
            <input
              type="text"
              id="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D852BD] w-1/4"
              required
            />
            <input
              type="tel"
              id="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D852BD] w-1/4"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D852BD] w-1/4"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-[#D852BD] text-white font-semibold rounded-md hover:bg-[#e881d3] shadow-lg"
            >
              Solicitar presupuesto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </form>
        </div>
        {/* Modal de confirmación personalizado */}
        {showConfirmation && (
          <div className="fixed inset-0 flex justify-center items-center p-4 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <h3 className="text-lg font-semibold mb-4">Notificación</h3>
              <p className="mb-6">{confirmationMessage}</p>
              <button
                onClick={closeConfirmation}
                className="px-6 py-2 bg-[#D852BD] text-white rounded-md hover:bg-[#e881d3] transition-colors"
              >
                De acuerdo
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default RequestQuoteForm;