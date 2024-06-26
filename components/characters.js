export default function Characters(){

    return (
        <section>
            <div
      className="bg-cover bg-center min-h-[1579px] w-full"
      style={{ backgroundImage: "url('/background_section_characters.jpeg')" }}>
                <div className="container w-full h-[1625px] p-14 flex flex-col">
                <div className="h-[114.51px] w-full flex justify-center">
                <div className="h-[114.51px] w-[398.75px] bg-[#F5FFE4] drop-shadow-xl -rotate-3">
                    <h1 className="flex justify-center items-center h-[114px] w-[398px] text-3xl font-fink-heavy">Personnages principaux</h1>
                </div>
                </div>
                <div className="h-[1579px] w-full grid grid-cols-3 grid-rows-3 my-20">
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125"><a href="/personnages"><img src="Tom_Nook_card.png" alt="Tom Nook" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125"><a href="/personnages"><img src="Freres_Nook_card.png" alt="Freres Nook" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125"><a href="/personnages"><img src="Thibou_card.png" alt="Thibou" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-center place-self-center drop-shadow-xl flex items-center justify-center mb-5 transition-transform ease-in-out hover:scale-125"><a href="/personnages"><img src="Rounard_card.png" alt="Rounard" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-center place-self-center drop-shadow-xl flex items-center justify-center mb-5 transition-transform ease-in-out hover:scale-125"><a href="/personnages"><img src="Layette_card.png" alt="Layette" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-center place-self-center drop-shadow-xl flex items-center justify-center mb-5 transition-transform ease-in-out hover:scale-125"><a href="/personnages"><img src="Porcelette_card.jpg" alt="Porcelette" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-end place-self-center drop-shadow-xl flex items-center justify-center m-5 transition-transform ease-in-out hover:scale-125"><a href="/personnages"><img src="KK_card.jpg" alt="KK" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-end place-self-center drop-shadow-xl flex items-center justify-center m-5 transition-transform ease-in-out hover:scale-125"><a href="/personnages"><img src="Marie_card.png" alt="Marie" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="h-[400px] w-[350px] flex self-end place-self-center justify-center drop-shadow-xl items-center m-5" >
                        <img src="card_2.jpg" alt="card_2" className="h-[365px] w-[260px] rounded-2xl blur-[2px] absolute rotate-[26deg]"/>
                        <img src="card_1.png" alt="card_1" className="h-[365px] w-[260px] rounded-2xl blur-[2px] absolute rotate-12"/>
                        <img src="card_3.jpeg" alt="card_3" className="h-[365px] w-[260px] rounded-2xl blur-[2px] relative"/>
                        <img src="Cousette_card.png" alt="Cousette_card" className="h-[365px] w-[260px] rounded-2xl absolute -rotate-12"/>
                        <a className="text-[300px] text-center absolute drop-shadow text-white self-center font-fink-heavy" href="https://animalcrossing.fandom.com/fr/wiki/Personnages_spéciaux" title="Personnages spéciaux" target="_blank">+
                        </a>
                        </div>
                </div>
                </div>
                <div className="h-2 w-full bg-[#3FA367] items-center drop-shadow"></div>
                </div>
        </section>
    )
}