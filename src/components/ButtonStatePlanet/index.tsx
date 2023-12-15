type Props= {
    content: string,
    className: string,
    onClick?: () => void
}

export default function ButtonStatePlanet({ content,className,onClick } : Props) {
    return (
        <button 
            className={`${className} uppercase font-semibold py-5`}
            onClick={onClick}
            >{content}
        </button>
    )
}