import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from 'react';

interface AccountMenuProps{
    visible?:boolean
}


const AccountMenu:React.FC<AccountMenuProps> = ({visible}) => {
    const {data} = useCurrentUser();
    if(!visible){
        return null;
    }

   
    return(
        <div className="bg-black absolute top-10 right-0 w-56 py-5 flex-col flex border-2 border-gray-800">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
               
                  <Image className="w-8 rounded-md" src="/images/default-blue.png" alt="logo" width={50} height={50} />
                <p className="text-white text-sm group-hover/item:underline">{data?.name}</p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4"/>
                <div onClick={() =>signOut()} className="hover:underline px-3 text-center text-sm text-white">Sign out of Netflix</div>
            </div>
        </div>
    )
}

export default AccountMenu;