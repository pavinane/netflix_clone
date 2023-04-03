import Image from "next/image";
import { NavbarItem } from "./NavbarItem";
import { MobileMenu } from "./MobileMenu";
import {BsChevronDown,BsBell,BsSearch} from 'react-icons/bs'
import { useCallback, useState } from "react";

const Navbar = () => {
  const [mobileMenu,SetMobileMenu] = useState<boolean>();

  const toggleMobileMenu = useCallback(() => {
    SetMobileMenu((current) => !current)

  },[])

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
            <div onClick={toggleMobileMenu} className="lg:hidden flex items-center flex-row gap-2 ml-8 cursor-pointer relative">
                <p className="text-white text-sm">Browse</p>
                <BsChevronDown className="text-white text-xl" />
                <MobileMenu visible={mobileMenu}/>
            </div>
            <div className="flex flex-row gap-7 ml-auto items-center">
              <div className="text-white hover:text-gray-400 cursor-pointer">
                <BsSearch/>
              </div>
              <div className="text-white hover:text-gray-400 cursor-pointer">
                <BsBell/>
              </div>
              <div className="flex flex-row item-center relative gap-2 cursor-pointer">
                <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                  <Image src="/images/default-blue.png" alt="logo" width={50} height={50} />
                </div>
                <BsChevronDown className="text-white text-xl" />
              </div>
            </div>
        </div>
    </nav>
  );
};


export default Navbar