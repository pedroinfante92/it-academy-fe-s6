import banner from "../assets/banner.svg";
import logo from "../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <>
    <nav>
      <img src={logo} alt="Logo" className="h-16" />
    </nav>
    <header className="relative h-80 bg-[#DFE6EE] rounded-lg shadow-lg mb-10">
      <div className="absolute inset-0 flex items-start">
        <h2 className="pl-10 m-auto text-5xl font-bold text-[#D852BD]">
          Consigue la mejor calidad
        </h2>
      <img src={banner} alt="Banner" className="h-full object-cover"/>
      </div>
    </header>
    </>
  );
}

export default Header;