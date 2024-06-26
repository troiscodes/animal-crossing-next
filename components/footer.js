export default function Footer(){

    return (
        <footer>
           <div className="w-full h-2 bg-[#3FA367] drop-shadow"></div>
            <div className="flex bg-[#417C12] h-[200px] w-full p-[10px] items-center justify-between">
                <div className="w-[308px]"><img className="w-[160px] h-[160px] flex justify-self-start" src="logo-ac.png" alt="logo Animal Crossing feuille"/></div>
                <div className="w-auto"><h1 className="text-white text-[40px] font-fink-heavy">Animal Crossing</h1></div>
            <h2 className="text-white flex self-end justify-self-end w-[308px] font-fink-heavy">créé par Clément SIMON et Ange TARDY</h2>
            </div>
        </footer>
    )
}