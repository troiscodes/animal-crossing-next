import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-fink-heavy bg-[url('/fond-games.png')] ">
      <div className="container">
        <section className="flex items-center md:pt-16" id="gamecube">
          <div className="md:flex items-center">
            <div>
              <img
                src="/jeu-gamecube.png"
                className="pt-20 pb-6 container flex justify-center"
              />
            </div>
            <div
              className="relative text-2xl py-4 px-6 flex md:w-full md:min-h-[357px] rounded-3xl"
              style={{ backgroundColor: "rgba(111, 238, 40, 0.3)" }}
            >
              <div className="grid md:grid-cols-7 gap-4">
                <div className="relative pb-4 md:col-span-5">
                  Dans ce jeu, le joueur emménage dans un village de campagne
                  habité par des animaux aux caractères bien distincts. Il
                  introduit un nouveau type de jeu dérivé du collect them up :
                  le but est de rendre tous les habitants heureux, de créer des
                  vêtements et des décorations et de collectionner des objets
                  (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en
                  temps réel, les minutes et les heures étant synchronisées avec
                  la vie réelle (heure de la console), ainsi que les jours, les
                  mois et les saisons. Il est également possible de fêter Noël
                  et tous les autres événements avec les villageois.
                </div>
                <div className="w-full h-full flex items-end md:col-span-2">
                  <div className="relative w-full h-[277px]">
                    <Image
                      src="/jeu-gamecube-image.png"
                      fill
                      className="bottom-0 right-0 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center md:pt-16" id="ds">
          <div className="md:flex items-center">
            <div>
              <img
                src="/jeu-ds.png"
                className="pt-20 pl-7 pb-6 container flex justify-center"
              ></img>
            </div>
            <div
              className="relative text-2xl ml-6 mr-6 pt-4 pl-6 pr-6 flex md:w-full md:min-h-[357px] rounded-3xl"
              style={{ backgroundColor: "rgba(111, 238, 40, 0.3)" }}
            >
              <div className="">
                <div className="relative flex items-center pb-4 md:pr-[340px]">
                  Dans ce jeu, le joueur emménage dans un village de campagne
                  habité par des animaux aux caractères bien distincts. Il
                  introduit un nouveau type de jeu dérivé du collect them up :
                  le but est de rendre tous les habitants heureux, de créer des
                  vêtements et des décorations et de collectionner des objets
                  (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en
                  temps réel, les minutes et les heures étant synchronisées avec
                  la vie réelle (heure de la console), ainsi que les jours, les
                  mois et les saisons. Il est également possible de fêter Noël
                  et tous les autres événements avec les villageois.
                </div>
                <div className="">
                  <Image
                    src="/jeu-ds-image.png"
                    width={350}
                    height={100}
                    className="md:absolute bottom-0 right-0 "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center md:pt-16" id="wii">
          <div className="md:flex items-center">
            <div>
              <img
                src="/jeu-wii.png"
                className="pt-20 pl-7 pb-6 container flex justify-center"
              ></img>
            </div>
            <div
              className="relative text-2xl ml-6 mr-6 pt-4 pl-6 pr-6 flex md:w-full md:min-h-[357px] rounded-3xl"
              style={{ backgroundColor: "rgba(111, 238, 40, 0.3)" }}
            >
              <div className="">
                <div className="relative flex items-center pb-4 md:pr-[330px]">
                  Dans ce jeu, le joueur emménage dans un village de campagne
                  habité par des animaux aux caractères bien distincts. Il
                  introduit un nouveau type de jeu dérivé du collect them up :
                  le but est de rendre tous les habitants heureux, de créer des
                  vêtements et des décorations et de collectionner des objets
                  (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en
                  temps réel, les minutes et les heures étant synchronisées avec
                  la vie réelle (heure de la console), ainsi que les jours, les
                  mois et les saisons. Il est également possible de fêter Noël
                  et tous les autres événements avec les villageois.
                </div>
                <div className=" ">
                  <Image
                    src="/jeu-wii-image.png"
                    width={350}
                    height={100}
                    className="md:absolute bottom-0 right-0 "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center md:pt-16" id="3ds">
          <div className="md:flex items-center">
            <div>
              <img
                src="/jeu-3ds.png"
                className="pt-20 pl-7 pb-6 container flex justify-center"
              ></img>
            </div>
            <div
              className="relative text-2xl ml-6 mr-6 pt-4 pl-6 pr-6 flex md:w-full md:min-h-[357px] rounded-3xl"
              style={{ backgroundColor: "rgba(111, 238, 40, 0.3)" }}
            >
              <div className="">
                <div className="relative flex items-center pb-4 md:pr-[330px]">
                  Dans ce jeu, le joueur emménage dans un village de campagne
                  habité par des animaux aux caractères bien distincts. Il
                  introduit un nouveau type de jeu dérivé du collect them up :
                  le but est de rendre tous les habitants heureux, de créer des
                  vêtements et des décorations et de collectionner des objets
                  (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en
                  temps réel, les minutes et les heures étant synchronisées avec
                  la vie réelle (heure de la console), ainsi que les jours, les
                  mois et les saisons. Il est également possible de fêter Noël
                  et tous les autres événements avec les villageois.
                </div>
                <div className=" ">
                  <Image
                    src="/jeu-3ds-image.png"
                    width={350}
                    height={100}
                    className="md:absolute bottom-0 right-0 "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center md:pt-16" id="switch">
          <div className="md:flex items-center">
            <div>
              <img
                src="/jeu-switch.png"
                className="pt-20 pl-7 pb-6 container flex justify-center"
              ></img>
            </div>
            <div
              className="relative text-2xl ml-6 mr-6 pt-4 pl-6 pr-6 flex md:w-full md:min-h-[357px] rounded-3xl"
              style={{ backgroundColor: "rgba(111, 238, 40, 0.3)" }}
            >
              <div className="">
                <div className="relative flex items-center pb-4 md:pr-80">
                  Dans ce jeu, le joueur emménage dans un village de campagne
                  habité par des animaux aux caractères bien distincts. Il
                  introduit un nouveau type de jeu dérivé du collect them up :
                  le but est de rendre tous les habitants heureux, de créer des
                  vêtements et des décorations et de collectionner des objets
                  (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en
                  temps réel, les minutes et les heures étant synchronisées avec
                  la vie réelle (heure de la console), ainsi que les jours, les
                  mois et les saisons. Il est également possible de fêter Noël
                  et tous les autres événements avec les villageois.
                </div>
                <div className="">
                  <Image
                    src="/jeu-switch-image.png"
                    width={350}
                    height={100}
                    className="md:absolute bottom-0 right-0 "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
