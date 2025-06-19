import banner from "../assets/banner.svg";
import logo from "../assets/logo.svg";

// D852BD

function Header() {
  return (
    <>
      <nav>
        <img src={logo} alt="Logo" className="h-16" />
      </nav>

      <header className="relative h-80 bg-neutral-50 rounded-lg shadow-sm mb-10">
        <div className="absolute inset-0 flex">
          <h2 className="m-auto text-5xl font-bold text-[#D852BD]">
            Consigue la mejor calidad
          </h2>
          <img src={banner} alt="Banner" className="h-full" />
        </div>
      </header>
    </>
  );
}

export default Header;
