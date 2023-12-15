import { Link } from "react-router-dom";

import Chevron from "../../assets/icon-chevron.svg"

type Props = {
    content: string,
    className: string,
    border?: boolean,
    href: string,
    onClick: () => void
}

export default function LinkPlanet( { content,className,border,href,onClick } : Props ) {
    return (
        <Link 
            to={href}
            onClick={onClick}
            className={`flex justify-between items-center border-b-gray-500 py-5 ${border ? 'border-b' : ''}`}
        >
            <div className="flex gap-5">
                <div className={`${className} rounded-full p-5`}></div>
                <span className="text-white text-2xl font-semibold uppercase">{content}</span>
            </div>
            <img src={Chevron} alt="Icone de Chevron" />
        </Link>
    )
}