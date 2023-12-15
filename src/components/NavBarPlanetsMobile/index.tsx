import LinkPlanet from "../LinkPlanet";

type Props = {
    onClick: () => void
}

export default function NavBarPlanetsMobile({ onClick } : Props) {
    return (
        <div className="flex flex-col px-5">
            <LinkPlanet 
                content="Mercury"
                onClick={onClick}
                className="bg-[#DEF4FC]"
                border
                href="/"
            />
            <LinkPlanet 
                content="Venus"
                onClick={onClick}
                className="bg-[#F7CC7F]"
                border
                href="/venus"
            />
            <LinkPlanet 
                content="Earth" 
                onClick={onClick}
                className="bg-[#545BFE]"
                border
                href="/earth"
            />
            <LinkPlanet 
                content="Mars" 
                onClick={onClick}
                className="bg-[#FF6A45]"
                border
                href="/mars"
            />
            <LinkPlanet 
                content="Jupiter" 
                onClick={onClick}
                className="bg-[#ECAD7A]"
                border
                href="/jupiter"
            />
            <LinkPlanet 
                content="Saturn" 
                onClick={onClick}
                className="bg-[#FCCB6B]"
                border
                href="/saturn"
            />
            <LinkPlanet 
                content="Uranus" 
                onClick={onClick}
                className="bg-[#65F0D5]"
                border
                href="/uranus"
            />
            <LinkPlanet 
                content="Neptune" 
                onClick={onClick}
                className="bg-[#497EFA]"
                href="/neptune"
            />
        </div>
    )
}