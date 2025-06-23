import { ReactNode } from "react";

export type Service = {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  pages?: number;
  languages?: number;
};

export type SelectedService = Service

export type ServiceCardProps = {
  service: Service;
  isSelected: boolean;
  onToggle: (service: Service) => void;
  onNumChange: (id: string, field: "pages" | "languages", value: number) => void;
};

export type Quote = {
  name: string;
  email: string;
  phone: string;
  selectedServices: Service[];
  totalPrice: number;
  date: string;
};

export type QuoteItemProps = {
  quote: Quote;
};

export type QuoteContextType = {
  totalPrice: number;
  setTotalPrice: (price: number) => void;
  selectedServices: Service[];
  setSelectedServices: (services: Service[]) => void;
  quotes: Quote[];
  addQuote: (quote: Quote) => void;
};

export type QuoteProviderProps = {
  children: ReactNode;
};