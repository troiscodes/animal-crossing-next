import Image from "next/image";
import Link from "next/link"

export default function Games(){
    return (
        <section style={{ backgroundImage: "url('/background_section_games.png')" }} className="min-h-[1036.87px]">
            <h1 className="flex justify-center bg-white">Jeux principaux</h1>
             <div className="grid grid-cols-3 place-items-center" >
                <div>
                    <Image src="/animal_crossing.png" width={350} height={100}/>
                </div>
                <div>
                    <Image src="/animal-crossing-city-folk.png" width={350} height={100}/>
                </div>
                <div>
                    <Image src="/animal-crossing-wild-world.png" width={350} height={100}/>
                </div>
                <div>
                    <Image src="/animal_crossing_new_leaf.png" width={350} height={100} />
                </div>
                <div>
                    <Image src="/animal_crossing_new_horizons.png" width={350} height={100}/>
                </div>
            </div>
        </section>
    )
}