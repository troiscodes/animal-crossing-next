import Image from "next/image";
import Link from "next/link";

export default function Home(){

    return (
        <main className="font-fink-heavy">
            <div style={{ backgroundImage: "url('/background_section_characters.jpeg')" }}>
            <section className="flex items-center">
                <div className="flex items-center">
                    <Image src="/jeu-gamecube.png" width={300} height={100} className="pt-12 pl-7 pb-6"/>
                    <span className=" text-2xl ml-16 pl-8 pt-8 pr-8 lex items-center w-[1100px] h-[357px] rounded-3xl bg-[#73EED4] opacity-30" > Dans ce jeu, le joueur emménage dans un village de campagne habité par des animaux aux caractères bien distincts. Il introduit un nouveau type de jeu dérivé du collect them up : le but est de rendre tous les habitants heureux, de créer des vêtements et des décorations et de collectionner des objets (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en temps réel, les minutes et les heures étant synchronisées avec la vie réelle (heure de la console), ainsi que les jours, les mois et les saisons. Il est également possible de fêter Noël et tous les autres événements avec les villageois.</span>
                </div>
            </section>

            <section> 
                <div className="pt-12 pl-7 pb-6">
                <Image src="/jeu-ds.png" width={300} height={100}/>
                </div>
            </section>
            <section> 
                <div className="pt-12 pl-7 pb-6">
                <Image src="/jeu-wii.png" width={300} height={100}/>
                </div>
            </section>
            <section> 
                <div className="pt-12 pl-7 pb-6">
                <Image src="/jeu-3ds.png" width={300} height={100}/>
                </div>
            </section>
            <section> 
                <div className="pt-12 pl-7 pb-6">
                <Image src="/jeu-switch.png" width={300} height={100}/>
                </div>
            </section>
            </div>
        </main>
    )
}