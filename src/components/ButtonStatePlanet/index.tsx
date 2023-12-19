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
                uppercase font-semibold py-5 transition-colors font-['Spartan']
                md:border-gray-500 md:border md:p-3 md:text-start md:flex md:gap-4 md:w-[290px]
                lg:w-[400px] lg:px-7 lg:gap-6 lg:text-lg
                `}
            onClick={onClick}
            >
                <span className={`max-[767px]:hidden text-gray-500 ${className}`}>{number}</span>
                <span>{content}</span>
        </button>
    )
}