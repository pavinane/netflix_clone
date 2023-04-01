import React from 'react';

interface NavbarItemProps{
    label:string
}

export const NavbarItem:React.FC<NavbarItemProps> = ({label}) => {
    return(
        <div className='text-white hover:text-gray-300 transition cursor-pointer'>
            {label}
        </div>
    )
}