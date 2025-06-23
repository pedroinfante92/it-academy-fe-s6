import type { ServiceCardProps } from "../types/types"

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isSelected,
  onToggle,
  onNumChange,
}) => {
  const { id, name, description, basePrice, pages, languages } = service;

  return (
    <>
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-[80%]  ${
          isSelected ? "border-2 border-[#D852BD]" : "border border-gray-200"
        }`}
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
        {isSelected && (pages || languages) && (
          <div className="flex flex-col mainContainer items-end pt-10 self-end">
            <div className="container1 flex items-center content-end pb-5 gap-5">
              <label htmlFor={`${id}-pages`} className="">
                Número de páginas
              </label>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => onNumChange(id, "pages", (pages ?? 1) - 1)}
                  className="px-2 border-[#D852BD] border-3 rounded-full text-[#D852BD] hover:bg-[#D852BD] hover:text-white"
                >
                  -
                </button>
                <input
                  type="number"
                  id={`${id}-pages`}
                  value={pages}
                  min={1}
                  onChange={(e) =>
                    onNumChange(id, "pages", parseInt(e.target.value) || 1)
                  }
                  className="w-full max-w-[80px] text-center border border-gray-300 rounded-md p-1 focus:ring-green-500 focus:border-green-500 text-lg"
                />
                <button
                  type="button"
                  onClick={() => onNumChange(id, "pages", (pages ?? 1) + 1)}
                  className="px-2 border-[#D852BD] border-3 rounded-full text-[#D852BD] hover:bg-[#D852BD] hover:text-white"
                >
                  +
                </button>
              </div>
            </div>
            <div className="container2 flex items-center content-end pb-5 gap-5">
              <label htmlFor={`${id}-languages`} className="">
                Número de lenguajes
              </label>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => onNumChange(id, "languages", (languages ?? 1) - 1)}
                  className="px-2 border-[#D852BD] border-3 rounded-full text-[#D852BD] hover:bg-[#D852BD] hover:text-white"
                >
                  -
                </button>
                <input
                  type="number"
                  id={`${id}-languages`}
                  value={languages}
                  min={1}
                  onChange={(e) =>
                    onNumChange(
                      id,
                      "languages",
                      parseInt(e.target.value) || 1
                    )
                  }
                  className="w-full max-w-[80px] text-center border border-gray-300 rounded-md p-1 focus:ring-green-500 focus:border-green-500 text-lg"
                />
                <button
                  type="button"
                  onClick={() => onNumChange(id, "languages", (languages ?? 1) + 1)}
                  className="px-2 border-[#D852BD] border-3 rounded-full text-[#D852BD] hover:bg-[#D852BD] hover:text-white"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceCard