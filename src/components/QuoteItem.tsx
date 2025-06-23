import type { Service, QuoteItemProps } from "../types/types"

const QuoteItem: React.FC<QuoteItemProps> = ({ quote }) => {
  const { name, email, phone, selectedServices, totalPrice, date } = quote;

  const formatServices = (services: Service[]): string => {
    return services
      .map(service => {
        let serviceString = service.name;
        if (service.id === 'web' && service.pages && service.languages) {
          serviceString += ` (${service.pages} páginas, ${service.languages} lenguajes)`;
        }
        return serviceString;
      })
      .join(', ');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-row items-center justify-between">
      <div className="mb-0 text-sm">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-400">{email}</p>
        <p className="text-gray-400">{phone}</p>
        <p className="mt-1">
          <span className="font-medium">Servicios contratados:</span> {formatServices(selectedServices)}
        </p>
      </div>
      <div className="flex flex-row items-center space-x-4 mt-0 text-sm">
        <span className="text-gray-400">{date}</span>
        <span className="text-2xl font-bold">Total: {totalPrice}€</span>
      </div>
    </div>
  );
};

export default QuoteItem;