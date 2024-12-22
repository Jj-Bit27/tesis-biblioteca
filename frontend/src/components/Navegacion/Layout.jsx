import { Menus } from "../../assets/Menuitems.jsx";
import Logo from "../../assets/icon-biblioteca.png";
import DesktopMenu from "./Navbar.jsx";
import MobMenu from "./MobMenu.jsx";

export default function App() {
  return (
    <div>
      <header className="h-16 text-[18px] fixed inset-0 flex-center bg-[#FFFFFF] ">
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={Logo} alt="" className="size-8" />
            <h3 className="text-lg font-semibold text-[#34495E]">
              DB Biblioteca
            </h3>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
