import React from "react";

interface MobileMenuProps{
    visible?:boolean
}

export const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if(!visible){
        return null
    }
    return (
      <div className="bg-black w-56 absolute left-0 top-8 py-5 flex-col border-2 border-gray-400">
        <div className="flex flex-col gap-4">
          <div className="text-white px-3 text-center hover:underline">
            Home
          </div>
          <div className="text-white px-3 text-center hover:underline">
            Series
          </div>
          <div className="text-white px-3 text-center hover:underline">
            Flims
          </div>
          <div className="text-white px-3 text-center hover:underline">
            New & Popular
          </div>
          <div className="text-white px-3 text-center hover:underline">
            My List
          </div>
          <div className="text-white px-3 text-center hover:underline">
            Browse by Langauges
          </div>
        </div>
      </div>
    );
}