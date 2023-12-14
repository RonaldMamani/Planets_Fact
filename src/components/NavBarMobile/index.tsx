import { useState } from "react"
import Hamburger from "../../assets/icon-hamburger.svg"
import Close from "../../assets/Close.svg"

export default function NavBarMobile() {

    const [open, setOpen] = useState(false)



    return (
        <nav className="">
            <button onClick={() => setOpen(!open)}>
                {open ? 
                    (
                        <img src={Hamburger} alt="" />
                    ) : (
                        <img className="fill-slate-500" src={Close} alt="" />
                    )
                }
            </button>
        </nav>
    )
}