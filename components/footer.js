export default function Footer(){

    return (
        <footer>
           <div className="w-full h-2 bg-[#3FA367] drop-shadow"></div>
            <div className="flex bg-[#417C12] h-[200px] w-full p-[10px] items-center md:justify-center justify-start">
                <div className="flex justify-between w-full items-center md:mb-0 mb-4">
                <a href="/">
                <div className="md:h-[150px] md:w-[150px] h-[100px] w-[100px]"><img className="md:h-[150px] md:w-[150px] h-[100px] w-[100px] hover:opacity-80" src="logo-ac.png" alt="logo Animal Crossing feuille"/></div>
                </a>
                <div className="w-auto"><h1 className="text-white text-[40px] font-fink-heavy text-center">Animal Crossing</h1></div>
                <div className="md:h-[150px] md:w-[150px] h-[100px] w-[100px]"></div>
                </div>
                <div className="w-full h-[200px] absolute flex items-end justify-end md:pb-5 pb-3 md:pr-3 pr-7">
            <h2 className="text-white flex justify-end self-end w-[280px] font-fink-heavy absolute">créé par Clément SIMON et Ange TARDY</h2>
            </div>
            </div>
        </footer>
    )
}