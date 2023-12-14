type Props = {
    className: string,
    onClickOverview?: () => void,
    onClickStructure?: () => void,
    onClickSurface?: () => void
}

export default function NavStatePlanet({ className,onClickOverview,onClickStructure,onClickSurface } : Props) {
    return (
        <nav className="border-white/25 border-y-2 p-5 mt-6 flex justify-between">
            <button 
                className={`${className} text-sm uppercase `}
                onClick={onClickOverview}
                >
                Overview
            </button>
            <button 
                className={`${className} text-sm uppercase `}
                onClick={onClickStructure}
                >
                Structure
            </button>
            <button 
                className={`${className} text-sm uppercase `}
                onClick={onClickSurface}
                >
                Surface
            </button>
        </nav>
    )
}