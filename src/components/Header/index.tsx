import { useState } from "react";

import Hamburger from "../../assets/icon-hamburger.svg"
import Close from "../../assets/Close.svg"
import NavBarPlanetsMobile from "../NavBarPlanetsMobile";
import LinkPlanet from "../LinkPlanet";
import { Link, useLocation } from "react-router-dom";


export default function Header() {

    const {pathname} = useLocation()
    const [open, setOpen] = useState(false)

    const border = `
        ${pathname === '/' && 'border-t-[#419EBB]'}
        ${pathname === '/venus' && 'border-t-[#EDA249]'}
        ${pathname === '/earth' && 'border-t-[#6D2ED5]'}
        ${pathname === '/mars' && 'border-t-[#D14C32]'}
        ${pathname === '/jupiter' && 'border-t-[#D83A34]'}
        ${pathname === '/saturn' && 'border-t-[#CD5120]'}
        ${pathname === '/uranus' && 'border-t-[#1EC1A2]'}
        ${pathname === '/neptune' && 'border-t-[#2D68F0]'}
        `

    return (
        <header className="
            relative
            md:border-b-gray-600 md:border-b
            ">
            <div className="
                flex justify-between items-center
                px-5 max-[767px]:pt-5
                md:px-10 md:flex-col md:gap-5
                lg:flex-row lg:justify-between
                ">
                    <Link to={'/'} className="
                        uppercase text-3xl text-white font-bold
                        ">The Planets
                    </Link>
                    <nav className="">
                        <button className="md:hidden" onClick={() => setOpen(!open)}>
                            {open ? 
                                (
                                    <img className="" src={Close} alt="" />
                                ) : (
                                    <img className="" src={Hamburger} alt="" />
                                )
                            }
                        </button>
                        <div className="hidden md:flex md:justify-between md:w-[calc(100vw-80px)]
                            lg:w-full lg:gap-5
                            ">
                            <LinkPlanet content="Mercury" href="/" borderColor={`${border}`} border />
                            <LinkPlanet content="Venus" href="/venus" borderColor={`${border}`} border />
                            <LinkPlanet content="Earth" href="/earth" borderColor={`${border}`} border />
                            <LinkPlanet content="Mars" href="/mars" borderColor={`${border}`} border />
                            <LinkPlanet content="Jupiter" href="/jupiter" borderColor={`${border}`} border />
                            <LinkPlanet content="Saturn" href="/saturn" borderColor={`${border}`} border />
                            <LinkPlanet content="Uranus" href="/uranus" borderColor={`${border}`} border />
                            <LinkPlanet content="Neptune" href="/neptune" borderColor={`${border}`} border />
                        </div>
                    </nav>
            </div>
            {open && 
                <div className="absolute bg-[#070724] w-full h-[calc(100vh-56px)] z-10 border-y-gray-600 border-y-2 mt-8 ">
                    <NavBarPlanetsMobile onClick={() => setOpen(false)} />
                </div>
            }
        </header>
    )
}