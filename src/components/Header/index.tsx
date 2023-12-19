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
    const borderTopMercury = `${pathname === '/' ? 'md:border-b-4 md:border-b-[#419EBB] md:text-white lg:border-b-0 lg:border-t-4 lg:border-t-[#419EBB]' : 'md:text-white/75'}`

    const borderTopVenus = `${pathname === '/venus' ? 'md:border-b-4 md:border-b-[#EDA249] md:text-white lg:border-b-0 lg:border-t-4 lg:border-t-[#EDA249]' : 'md:text-white/75'}`

    const borderTopEartth = `${pathname === '/earth' ? 'md:border-b-4 md:border-b-[#6D2ED5] md:text-white lg:border-b-0 lg:border-t-4 lg:border-t-[#6D2ED5]' : 'md:text-white/75'}`

    const borderTopMars = `${pathname === '/mars' ? 'md:border-b-4 md:border-b-[#D14C32] md:text-white lg:border-b-0 lg:border-t-4 lg:border-t-[#D14C32]' : 'md:text-white/75'}`

    const borderTopMJupiter = `${pathname === '/jupiter' ? 'md:border-b-4 md:border-b-[#D83A34] md:text-white lg:border-b-0 lg:border-t-4 lg:border-t-[#D83A34]' : 'md:text-white/75'}`

    const borderTopSaturn = `${pathname === '/saturn' ? 'md:border-b-4 md:border-b-[#CD5120] md:text-white lg:border-b-0 lg:border-t-4 lg:border-t-[#CD5120]' : 'md:text-white/75'}`

    const borderTopUranus = `${pathname === '/uranus' ? 'md:border-b-4 md:border-b-[#1EC1A2] md:text-white lg:border-b-0 lg:border-t-4 lg:border-t-[#1EC1A2]' : 'md:text-white/75'}`

    const borderTopNeptune = `${pathname === '/neptune' ? 'md:border-b-4 md:border-b-[#2D68F0] md:text-white lg:border-b-0 lg:border-t-4 lg:border-t-[#2D68F0]' : 'md:text-white/75'}`

    return (
        <header className="
            relative
            md:border-b-gray-600 md:border-b
            ">
            <div className="
                flex justify-between items-center
                px-5 max-[767px]:pt-5
                md:px-10 md:flex-col md:gap-5
                lg:px-16 lg:flex-row lg:justify-between
                ">
                    <Link to={'/'} className="
                        uppercase tracking-[-1.05px] font-['Antonio'] text-3xl text-white font-bold pt-0
                        md:pt-10 lg:pt-0
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
                            lg:w-full lg:gap-3
                            ">
                            <LinkPlanet content="Mercury" href="/" borderColor={`${border} ${borderTopMercury}`} border />
                            <LinkPlanet content="Venus" href="/venus" borderColor={`${border} ${borderTopVenus}`} border />
                            <LinkPlanet content="Earth" href="/earth" borderColor={`${border} ${borderTopEartth}`} border />
                            <LinkPlanet content="Mars" href="/mars" borderColor={`${border} ${borderTopMars}`} border />
                            <LinkPlanet content="Jupiter" href="/jupiter" borderColor={`${border} ${borderTopMJupiter}`} border />
                            <LinkPlanet content="Saturn" href="/saturn" borderColor={`${border} ${borderTopSaturn}`} border />
                            <LinkPlanet content="Uranus" href="/uranus" borderColor={`${border} ${borderTopUranus}`} border />
                            <LinkPlanet content="Neptune" href="/neptune" borderColor={`${border} ${borderTopNeptune}`} border />
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