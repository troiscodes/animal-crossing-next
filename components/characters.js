export default function Characters(){

    return (
        <section>
            <div
      className="bg-cover bg-center md:min-h-[1579px] min-h-[4050px] w-full"
      style={{ backgroundImage: "url('/background_section_characters.jpeg')" }}>
                <div className="container w-full h-[1625px] p-14 flex flex-col">
                <div className="h-[114.51px] w-full flex justify-center">
                <div className="md:h-[114.51px] md:w-[398.75px] h-[100px] w-[330px] bg-[#F5FFE4] drop-shadow-xl -rotate-3">
                    <h1 className="flex justify-center items-center md:h-[114px] md:w-[398px] h-[100px] w-[330px] md:text-3xl text-2xl font-fink-heavy">Personnages principaux</h1>
                </div>
                </div>
                <div className="md:h-[1579px] h-[4000px] w-full grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 gap-5 my-14">
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125"><a href="/personnages#tom-nook"><img src="Tom_Nook_card.png" alt="Tom Nook" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125"><a href="/personnages#frères-nook"><img src="Freres_Nook_card.png" alt="Freres Nook" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125"><a href="/personnages#thibou"><img src="Thibou_card.png" alt="Thibou" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-center place-self-center drop-shadow-xl flex items-center justify-center md:mb-5 transition-transform ease-in-out hover:scale-125"><a href="/personnages#rounard"><img src="Rounard_card.png" alt="Rounard" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-center place-self-center drop-shadow-xl flex items-center justify-center md:mb-5 transition-transform ease-in-out hover:scale-125"><a href="/personnages#layette"><img src="Layette_card.png" alt="Layette" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-center place-self-center drop-shadow-xl flex items-center justify-center md:mb-5 transition-transform ease-in-out hover:scale-125"><a href="/personnages#porcelette"><img src="Porcelette_card.jpg" alt="Porcelette" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-end place-self-center drop-shadow-xl flex items-center justify-center md:m-5 transition-transform ease-in-out hover:scale-125"><a href="/personnages#kéké"><img src="KK_card.jpg" alt="KK" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-end place-self-center drop-shadow-xl flex items-center justify-center md:m-5 transition-transform ease-in-out hover:scale-125"><a href="/personnages#marie"><img src="Marie_card.png" alt="Marie" className="h-[365px] w-[260px] rounded-2xl"/></a></div>
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
                </div>
                <div className="h-2 w-full bg-[#3FA367] flex place-self-end drop-shadow"></div>
        </section>
    )
}