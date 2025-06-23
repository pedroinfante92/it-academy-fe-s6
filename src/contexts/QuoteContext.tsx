import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Service, Quote, QuoteContextType, QuoteProviderProps } from "../types/types"

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuoteContext = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuoteContext must be used within a QuoteProvider");
  }
  return context;
};

export function QuoteProvider({ children }: QuoteProviderProps) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const [quotes, setQuotes] = useState<Quote[]>(() => {
    try {
      const savedQuotes = localStorage.getItem('quotes');
      return savedQuotes ? JSON.parse(savedQuotes) : [];
    } catch (error) {
      console.error("No se pudieron analizar los presupuestos de localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('quotes', JSON.stringify(quotes));
    } catch (error) {
      console.error("No se pudieron guardar los presupuestos en localStorage:", error);
    }
  }, [quotes]);

  const addQuote = useCallback((newQuote: Quote) => {
    setQuotes(prevQuotes => [...prevQuotes, newQuote]);
    setSelectedServices([]);
    setTotalPrice(0);
  }, []);

  const contextValue: QuoteContextType = {
    totalPrice,
    setTotalPrice,
    selectedServices,
    setSelectedServices,
    quotes,
    addQuote,
  };

  return (
    <QuoteContext.Provider value={contextValue}>
      {children}
    </QuoteContext.Provider>
  );
}