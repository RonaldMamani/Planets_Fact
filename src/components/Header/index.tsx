import NavBarMobile from "../NavBarMobile";

export default function Header() {
    return (
        <header className="
            flex justify-between items-center
            ">
                <span className="uppercase text-3xl text-white font-bold">The Planets</span>
                <NavBarMobile />
        </header>
    )
}