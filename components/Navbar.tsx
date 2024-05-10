import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className='max-container padding-container flexBetween py-6 z-30 relative'>
        <h1>Hi<span className="">link</span></h1>

        <ul className='hidden h-full gap-12 lg:flex'>
            {
                NAV_LINKS.map((link) =>(
                    <Link
                    href={link.href}
                    key={link.key}
                    className='regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold'
                    
                    >{link.label}</Link>

                ))
            }
        </ul>

        <div className="hidden lg:flexCenter">
            <Button
            type="button"
            title="Login"
            icon="./user.svg"
            variant="btn_dark_green"
            
            />
        </div>
    
    </nav>
  )
}

export default Navbar
