import Image from "next/image";
import { NavbarItem } from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="w-full fixed z-40">
        <div className="px-4 md:px-16 py-4 flex transition duration-500 flex-row items-center bg-zinc-900 bg-opacity-90">
            <Image className="h-4 lg:h-7" src="/images/logo.png" alt="logo" width={100} height={75} />
            <div className="flex-row ml-8 gap-7 hidden lg:flex">
                <NavbarItem label={"Home"}/>
                <NavbarItem label={"Series"}/>
                <NavbarItem label={"Flims"}/>
                <NavbarItem label={"New & Popular"}/>
                <NavbarItem label={"My List"}/>
                <NavbarItem label={"Browse by Langauges"}/>
            </div>
            <div className="lg:hidden flex items-center flex-row gap-2 ml-8 cursor-pointer relative">
                <p className="text-white text-sm">Browse</p>
            </div>
        </div>
    </nav>
  );
};


export default Navbar