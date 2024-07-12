import Image from "next/image";

export default function GamesSection(
  props
) {

  const game = props.game

  const gameId = game.Id
  const jaquetteJeu = (game.jeu && game.jeu.jaquetteJeu.node) && game.jeu.jaquetteJeu.node
  const gameFeaturedImage = jaquetteJeu ? jaquetteJeu.sourceUrl : null
  const releaseYear = game.jeu.releaseYear;
  const console = game.jeu.console;
  const description = game.jeu.description;
  const dansLeJeu = game.jeu.dansLeJeu.node.sourceUrl;
  const imageHeight = game.jeu.imageHeight;
  const imageWidth = game.jeu.imageWidth;


  return (
    <main className="font-fink-heavy bg-[url('/fond-games.png')] ">
      <section
        className={"flex items-center justify-center md:flex-row flex-col md:pt-16 md:pr-5 container"}
        id={gameId}
      >
        <div className="md:flex items-center justify-center my-10 pb-2 pr-2">
          <div>
            <img
              className={"flex justify-center h-[357px] pr-3 object-contain"}
              src={gameFeaturedImage}
            />
          </div>
          <div
            className="relative text-2xl md:min-h-[357px] rounded-[50px] drop-shadow-xl pl-5 pt-5 flex justify-center"
            style={{ backgroundColor: "rgba(111, 238, 40, 0.3)" }}
          >
            <div className="rounded-3xl flex flex-row gap-5">
              <div className="flex-col flex justify-center items-start text-start text-[20px] w-full">
                <div className="relative flex flex-row gap-2"><div className="underline">Console : </div><div>{console}</div></div>

                <div className="relative flex flex-row gap-2"><div className="underline">Année de sortie : </div><div>{releaseYear}</div></div>
                <div className="relative underline">Description : </div>
                <div>{description}</div>
              </div>
              <div className="relative min-w-[368px] flex items-end self-end" style={{ height: `${imageHeight}px` }}>
                <Image
                  src={dansLeJeu}
                  fill
                  className={"relative min-w-[368px] self-end"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}
