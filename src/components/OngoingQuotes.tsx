import { useQuoteContext } from "../contexts/QuoteContext";
import { useState, useEffect, ChangeEvent } from "react";
import QuoteItem from "./QuoteItem";
import type { Quote } from "../types/types"

function OngoingQuotes() {
  const { quotes } = useQuoteContext();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>(quotes);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = quotes.filter(quote =>
      quote.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      quote.email.toLowerCase().includes(lowerCaseSearchTerm) ||
      quote.phone.toLowerCase().includes(lowerCaseSearchTerm) ||
      quote.selectedServices.some(service => service.name.toLowerCase().includes(lowerCaseSearchTerm))
    );
    setFilteredQuotes(results);
  }, [searchTerm, quotes]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <section className="bg-white p-6 flex flex-col w-[80%]">
        <div className="flex flex-row justify-between items-start sm:items-center mb-6 ">
          <h2 className="text-2xl font-bold">Presupuestos en curso:</h2>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Cercar por nombre, servicio..."
              value={searchTerm}
              onChange={handleInputChange}
              className="p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e881d3] w-full"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredQuotes.length > 0 ? (
            filteredQuotes.map((quote, index) => (
              <QuoteItem key={index} quote={quote} />
            ))
          ) : (
            <p className="text-center py-8">No hay presupuestos en curso que coincidan con la búsqueda.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default OngoingQuotes;