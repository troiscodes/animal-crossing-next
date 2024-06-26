import Image from "next/image";
import Link from "next/link"

export default function Games(){
    return (
        <section style={{ backgroundImage: "url('/background_section_games.png') " }} className="min-h-[1036.87px] relative">
                <div className="h-[114.51px] w-full flex justify-center pt-14">
                <div className="h-[114.51px] w-[335.75px] bg-[#F5FFE4] drop-shadow-xl -rotate-3">
                    <h1 className="flex justify-center items-center h-[114px] w-[335] text-3xl font-fink-heavy">Jeux principaux</h1>
                    </div>
                </div>

            <div className="grid grid-cols-3 place-items-center pt-24 pr-20 pl-20">
                <div>
                <a href="/jeux">
                    <Image src="/animal_crossing.png" width={350} height={100} className="transition-transform ease-in-out hover:scale-110 rounded-full"/>
                    </a>
                </div>
                <div>
                <a href="/jeux">
                    <Image src="/animal-crossing-city-folk.png" width={350} height={100} className="transition-transform ease-in-out hover:scale-110 rounded-full"/>
                    </a>
                </div>
                <div>
                <a href="/jeux">
                    <Image src="/animal-crossing-wild-world.png" width={350} height={100} className="transition-transform ease-in-out hover:scale-110 rounded-full"/>
                    </a>
                </div>
                <div className="col-span-3 flex justify-between gap-24 pt-8">
                    <div>
                        <a href="/jeux">
                        <Image src="/animal_crossing_new_leaf.png" width={350} height={100} className="transition-transform ease-in-out hover:scale-110 rounded-full"/>
                        </a>
                    </div>
                    <div>
                        <a href="/jeux">
                        <Image src="/animal_crossing_new_horizons.png" width={350} height={100} className="transition-transform ease-in-out hover:scale-110 rounded-full"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}