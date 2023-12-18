import { useState } from "react";

import Hamburger from "../../assets/icon-hamburger.svg"
import Close from "../../assets/Close.svg"
import NavBarPlanetsMobile from "../NavBarPlanetsMobile";

export default function Header() {

    const [open, setOpen] = useState(false)

    return (
        <header className="
            relative
            ">
            <div className="
                flex justify-between items-center
                px-5 pt-5
                md:flex-col
                ">
                    <span className="uppercase text-3xl text-white font-bold">The Planets</span>
                    <nav className="md:hidden">
                        <button onClick={() => setOpen(!open)}>
                            {open ? 
                                (
                                    <img className="" src={Close} alt="" />
                                ) : (
                                    <img className="" src={Hamburger} alt="" />
                                )
                            }
                        </button>
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