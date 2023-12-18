type Props= {
    content: string,
    number?: string,
    className: string,
    onClick?: () => void
}

export default function ButtonStatePlanet({ content,number,className,onClick } : Props) {
    return (
        <button 
            className={`${className} 
                uppercase font-semibold py-5
                md:border-gray-500 md:border md:p-3 md:text-start md:flex md:gap-5 md:w-[300px]
                `}
            onClick={onClick}
            >
                <span className="max-[767px]:hidden text-gray-500">{number}</span>
                <span>{content}</span>
        </button>
    )
}