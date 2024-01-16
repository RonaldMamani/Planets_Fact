import { Link } from "react-router-dom";

import Chevron from "../../assets/icon-chevron.svg"

type Props = {
    content: string,
    className?: string,
    border?: boolean,
    borderColor?: string,
    href: string,
    onClick?: () => void
}

export default function LinkPlanet( { content,className,border,borderColor,href,onClick } : Props ) {
    return (
        <Link 
            to={href}
            onClick={onClick}
            className={`
                flex justify-between items-center max-[767px]:border-b-gray-500 py-5 font-['Spartan']
                md:py-8 md:px-[10px]
                lg:py-10
                group
                ${borderColor} 
                ${border ? `
                    max-[767px]:border-b
                    lg:hover:border-t-4` : ''} `}
        >
            <div className="flex gap-5">
                <div className={`${className} 
                    rounded-full p-5
                    md:hidden
                    `}></div>
                <span className="
                    max-md:text-white text-2xl font-semibold uppercase
                    md:text-lg
                    lg:text-base
                    lg:group-hover:text-white
                    ">{content}</span>
            </div>
            <img className="md:hidden" src={Chevron} alt="Icone de Chevron" />
        </Link>
    )
}