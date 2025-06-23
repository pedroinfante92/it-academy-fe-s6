import { useQuoteContext } from "../contexts/QuoteContext";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import SERVICES_DATA from "../data/SERVICES_DATA";
import type { Service } from "../types/types"

function ServiceSelection() {
const { selectedServices, setSelectedServices, totalPrice, setTotalPrice } = useQuoteContext()
  useEffect(() => {
    let calculatedPrice = selectedServices.reduce((accumulator, service) => {
      accumulator += service.basePrice;

      if (service.id === 'web' && service.pages && service.languages) {
        accumulator += (service.pages + service.languages) * 30;
      }

      return accumulator;
    }, 0);

    setTotalPrice(calculatedPrice);
  }, [selectedServices, setTotalPrice]);


  const handleToggleService = (service: Service) => {
    setSelectedServices( prev => {
      const selectedService = prev.find(({ id }) => id === service.id);
      if (selectedService) {
        return prev.filter(({ id }) => id !== service.id);
      }
      else {
        return prev.concat(service);
      }
    });
  };

  const handleNumChange = (
    id: string,
    optionType: "pages" | "languages",
    newValue: number
  ) => {
    const updatedSelectedServices = selectedServices.map(service => {
      if (service.id === id) {
        const value = newValue < 1 ? 1 : newValue;
        return { ...service, [optionType]: value };
      }
      return service;
    });

    setSelectedServices(updatedSelectedServices);
  };

  return (
    <section className="bg-white p-6 mb-8">
      <div className="flex flex-col gap-6 items-center">
        {SERVICES_DATA.map((service: Service) => {
          const selectedService = (selectedServices || []).find(({ id }) => id === service.id);
          return (
            <ServiceCard
              key={service.id}
              service={{
                ...service,
                pages: service.pages !== undefined ? (selectedService?.pages || 1) : undefined,
                languages: service.languages !== undefined ? (selectedService?.languages || 1) : undefined,
              }}
              isSelected={!!selectedService?.id}
              onToggle={handleToggleService}
              onNumChange={handleNumChange}
            />
          );
        })}
      </div>
      <div className="flex mt-8 text-right pr-32 gap-3 items-center justify-end">
        <span className="text-2xl font-semibold">Precio presupuesto: </span>
        <span className="text-4xl font-bold text-[#D852BD]" id="total-price">{totalPrice} €</span>
      </div>
    </section>
  );
}

export default ServiceSelection;