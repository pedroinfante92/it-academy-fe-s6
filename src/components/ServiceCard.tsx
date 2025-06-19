type Service = {
  id?: string;
  name: string;
  description: string;
  basePrice: number;
  pages?: number;
  languages?: number;
};

type ServiceCardProps = {
  service: Service;
  isSelected: boolean;
  onToggle: (service: Service) => void;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isSelected,
  onToggle,
}) => {
  const { name, description, basePrice } = service;

  return (
    <>
      <div
        className={` bg-white p-6 rounded-lg shadow-lg w-[80%]  ${isSelected ? "border-2 border-[#D852BD]" : "border border-gray-200"}`}
      >
        <div className="flex items-center">
          <div className="flex-1 pl-5">
            <h2 className="text-3xl font-bold text-black mb-1">{name}</h2>
            <p className="font-medium">{description}</p>
          </div>
          <div className="flex flex-1 justify-center">
            <span className="text-3xl font-bold">{basePrice} €</span>
          </div>
          <div className="flex flex-1 justify-end pr-5">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onToggle(service)}
              className="form-checkbox h-5 w-5 rounded-md"
            />
            <span className="pl-3">Añadir</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
