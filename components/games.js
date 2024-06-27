import Image from "next/image";
import Link from "next/link"

export default function Games(){
    return (
        <section style={{ backgroundImage: "url('/background_section_games.png') " }} className="md:min-h-[1036.87px] min-h-[1900px]">
                <div className="h-[114.51px] w-full flex flex-col justify-start items-center pt-14">
                <div className="md:h-[114.51px] md:w-[398.75px] h-[100px] w-[330px] bg-[#F5FFE4] drop-shadow-xl -rotate-3">
                    <h1 className="flex justify-center items-center md:h-[114px] md:w-[398px] h-[100px] w-[330px] text-3xl font-fink-heavy">Jeux principaux</h1>
                    </div>

            <div className="container w-full grid md:grid-cols-3 grid-cols-1 place-items-center pt-14 px-10 md:mt-10 md:gap-14 gap-10 md:m-5">
                <div>
                <a href="/jeux">
                    <img src="/animal_crossing.png" className="transition-transform ease-in-out hover:scale-110 rounded-full md:h-[350px] md:w-[350px] h-[300px] w-[300px]"/>
                    </a>
                </div>
                <div>
                <a href="/jeux">
                    <img src="/animal-crossing-city-folk.png" className="transition-transform ease-in-out hover:scale-110 rounded-full md:h-[350px] md:w-[350px] h-[300px] w-[300px]"/>
                    </a>
                </div>
                <div>
                <a href="/jeux">
                    <img src="/animal-crossing-wild-world.png" className="transition-transform ease-in-out hover:scale-110 rounded-full md:h-[350px] md:w-[350px] h-[300px] w-[300px]"/>
                    </a>
                </div>
                </div>

                <div className="container place-items-center grid md:grid-cols-2 grid-cols-1 w-full md:px-48 pt-10 px-10 md:gap-5 gap-10 md:m-10">
                    <div>
                        <a href="/jeux">
                        <img src="/animal_crossing_new_leaf.png" className="transition-transform ease-in-out hover:scale-110 rounded-full md:h-[350px] md:w-[350px] h-[300px] w-[300px]"/>
                        </a>
                    </div>
                    <div>
                        <a href="/jeux">
                        <img src="/animal_crossing_new_horizons.png" className="transition-transform ease-in-out hover:scale-110 rounded-full md:h-[350px] md:w-[350px] h-[300px] w-[300px]"/>
                        </a>
                        </div>
                    </div>
                    </div>
        </section>
    )
}