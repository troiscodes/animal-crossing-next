import Image from "next/image";
import GamesSection from "/components/games-section";

export default async function Home() {

  const response = await fetch("https://animalcrossing.dev.3codes.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query NewQuery {
  optionPage {
    siteSettings {
      games {
        nodes {
          ... on Game {
            gameId
            jeu {
              console
              description
              imageHeight
              imageWidth
              releaseYear
              jaquetteJeu {
                node {
                  id
                  sourceUrl
                }
              }
              dansLeJeu {
                node {
                  id
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
}`,
    }),
  });

  const { data } = await response.json();
  console.log('data', data);

  const games = data.optionPage.siteSettings.games.nodes;

  console.log("games", games);

  return (
    <main className=" md: min-h-full w-full font-fink-heavy bg-[url('/fond-games.png')] ">

      {games && games.map((game, index) => {

        const jaquetteJeu = (game.jeu && game.jeu.jaquetteJeu.node) && game.jeu.jaquetteJeu.node
        const gameFeaturedImage = jaquetteJeu ? jaquetteJeu.sourceUrl : null


        // console.log("gameId", gameId);
        // console.log("jaquetteJeu", jaquetteJeu);
        // console.log("anneeSortie", anneeSortie);
        // console.log("console", console);
        // console.log("description", description);
        // console.log("dansLeJeu", dansLeJeu);

        return (
          <>

            <GamesSection
              key={games.id}
              game={game}
            />

            {/* <div key={games.node.gameId}></div>
            <section
              className={"flex items-center md:pt-16 md:pr-5 container"}
              id={gameId}
            >
              <div className="md:flex items-center pb-6">
                <div>
                  <img
                    src={jaquetteJeu}
                    className="pt-20 pb-6 container flex justify-center"
                  />
                </div>
                <div
                  className="relative text-2xl py-4 px-6 flex md:w-full md:min-h-[357px] rounded-3xl"
                  style={{ backgroundColor: "rgba(111, 238, 40, 0.3)" }}
                >
                  <div className="grid md:grid-cols-7 gap-4">
                    <div className="relative pb-4 md:col-span-5">{description}</div>
                    <div className="w-full h-full flex items-end md:col-span-2">
                      <div className={"relative w-full " + hImage}>
                        <Image
                          src={dansLeJeu}
                          fill
                          className={"bottom-0 right-0 object-contain"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          </>
        )

      })}

    </main >
  );
}









{/* <GamesSection
  boiteJeux={"/jeu-gamecube.png"}
  texteJeux={
    "Dans ce jeu, le joueur emménage dans un village de campagne habité par des animaux aux caractères bien distincts. Il introduit un nouveau type de jeu dérivé du collect them up : le but est de rendre tous les habitants heureux, de créer des vêtements et des décorations et de collectionner des objets (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en temps réel, les minutes et les heures étant synchronisées avec la vie réelle (heure de la console), ainsi que les jours, les mois et les saisons. Il est également possible de fêter Noël et tous les autres événements avec les villageois. "
  }
  imageJeux={"/jeu-gamecube-image.png"}
  idJeux={"gamecube"}
  hImage={"h-[277px]"}
></GamesSection>

<GamesSection
  boiteJeux={"/jeu-ds.png"}
  texteJeux={
    "Dans ce jeu, le joueur emménage dans un village de campagne habité par des animaux aux caractères bien distincts. Il introduit un nouveau type de jeu dérivé du collect them up : le but est de rendre tous les habitants heureux, de créer des vêtements et des décorations et de collectionner des objets (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en temps réel, les minutes et les heures étant synchronisées avec la vie réelle (heure de la console), ainsi que les jours, les mois et les saisons. Il est également possible de fêter Noël et tous les autres événements avec les villageois. "
  }
  imageJeux={"/jeu-ds-image.png"}
  idJeux={"ds"}
  hImage={"h-[275.01px]"}
></GamesSection>

<GamesSection
  boiteJeux={"/jeu-wii.png"}
  texteJeux={
    "Dans ce jeu, le joueur emménage dans un village de campagne habité par des animaux aux caractères bien distincts. Il introduit un nouveau type de jeu dérivé du collect them up : le but est de rendre tous les habitants heureux, de créer des vêtements et des décorations et de collectionner des objets (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en temps réel, les minutes et les heures étant synchronisées avec la vie réelle (heure de la console), ainsi que les jours, les mois et les saisons. Il est également possible de fêter Noël et tous les autres événements avec les villageois. "
  }
  imageJeux={"/jeu-wii-image.png"}
  idJeux={"wii"}
  hImage={"h-[195.45px]"}
></GamesSection>

<GamesSection
  boiteJeux={"/jeu-3ds.png"}
  texteJeux={
    "Dans ce jeu, le joueur emménage dans un village de campagne habité par des animaux aux caractères bien distincts. Il introduit un nouveau type de jeu dérivé du collect them up : le but est de rendre tous les habitants heureux, de créer des vêtements et des décorations et de collectionner des objets (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en temps réel, les minutes et les heures étant synchronisées avec la vie réelle (heure de la console), ainsi que les jours, les mois et les saisons. Il est également possible de fêter Noël et tous les autres événements avec les villageois. "
  }
  imageJeux={"/jeu-3ds-image.png"}
  idJeux={"3ds"}
  hImage={"h-[221px]"}
></GamesSection>

<GamesSection
  boiteJeux={"/jeu-switch.png"}
  texteJeux={
    "Dans ce jeu, le joueur emménage dans un village de campagne habité par des animaux aux caractères bien distincts. Il introduit un nouveau type de jeu dérivé du collect them up : le but est de rendre tous les habitants heureux, de créer des vêtements et des décorations et de collectionner des objets (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en temps réel, les minutes et les heures étant synchronisées avec la vie réelle (heure de la console), ainsi que les jours, les mois et les saisons. Il est également possible de fêter Noël et tous les autres événements avec les villageois. "
  }
  imageJeux={"/jeu-switch-image.png"}
  idJeux={"switch"}
  hImage={"h-[206.83px]"}
></GamesSection>}
    </main >
  );
} */}