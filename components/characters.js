export default async function Characters() {


  const response = await fetch("https://animalcrossing.dev.3codes.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query Query {
    optionPage {
      siteSettings {
        gridCharacters(first: 15) {
          nodes {
            id
            sourceUrl
            title
          }
        }
      }
    }
  }`,
    }),
  });

  const { data } = await response.json();

  const characters = data.optionPage.siteSettings.gridCharacters.nodes;
  console.log("characters", characters);

  return (
    <main className="min-h-full w-full">
      <section>
        <div
          className="bg-cover bg-center md:min-h-[1579px] min-h-[4050px] w-full"
          style={{
            backgroundImage: "url('/background_section_characters.jpeg')",
          }}
        >
          <div className="container w-full h-[1625px] p-14 flex flex-col">
            <div className="h-[114.51px] w-full flex justify-center">
              <div className="md:h-[114.51px] md:w-[398.75px] h-[100px] w-[330px] bg-[#F5FFE4] drop-shadow-xl -rotate-3">
                <a
                  className="flex justify-center items-center md:h-[114px] md:w-[398px] h-[100px] w-[330px] md:text-3xl text-2xl font-fink-heavy"
                  href="/personnages"
                >
                  Personnages principaux
                </a>
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 pt-14 md:pt-8 px-10 md:gap-14 gap-10 md:m-5 place-items-center">

              {characters && characters.map((character, index) => {

                // console.log("character", character);
                const cards = character.sourceUrl;
                const title = character.title;
                const id = character.id;

                // console.log("cards", cards);

                return (
                  <>
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center md:flex-row  transition-transform ease-in-out hover:scale-125">
                      <a href={"/personnages#" + title}>
                        <img
                          src={cards}
                          alt={title}
                          className="h-[365px] w-[260px] rounded-2xl" />
                      </a>
                    </div>
                    {/* <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125">
                    <a href={"/personnages#" + title}>
                      <img
                        src={cards}
                        alt={title}
                        className="h-[365px] w-[260px] rounded-2xl" />
                    </a>
                  </div> */}
                    {/* <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125">
                      <a href={"/personnages#" + title}>
                        <img
                          src={cards}
                          alt={title}
                          className="h-[365px] w-[260px] rounded-2xl" />
                      </a>
                    </div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125">
                      <a href={"/personnages#" + title}>
                        <img
                          src={cards}
                          alt={title}
                          className="h-[365px] w-[260px] rounded-2xl" />
                      </a>
                    </div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125">
                      <a href={"/personnages#" + title}>
                        <img
                          src={cards}
                          alt={title}
                          className="h-[365px] w-[260px] rounded-2xl" />
                      </a>
                    </div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125">
                      <a href={"/personnages#" + title}>
                        <img
                          src={cards}
                          alt={title}
                          className="h-[365px] w-[260px] rounded-2xl" />
                      </a>
                    </div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125">
                      <a href={"/personnages#" + title}>
                        <img
                          src={cards}
                          alt={title}
                          className="h-[365px] w-[260px] rounded-2xl" />
                      </a>
                    </div>
                    <div className="rounded-2xl h-[400px] w-[300px] self-start place-self-center drop-shadow-xl flex items-center justify-center transition-transform ease-in-out hover:scale-125">
                      <a href={"/personnages#" + title}>
                        <img
                          src={cards}
                          alt={title}
                          className="h-[365px] w-[260px] rounded-2xl" />
                      </a>
                    </div>*/}
                  </>
                );
              })}

              <div className="h-[365px] w-[260px] flex self-end place-items-start justify-center drop-shadow-xl relative mb-5 hover:rotate-[+10deg]">
                <img
                  src="card_2.jpg"
                  alt="card_2"
                  className="h-[365px] w-[260px] rounded-2xl blur-[2px] absolute hover:rotate-[26deg] flex self-end" />
                <img
                  src="card_3.jpeg"
                  alt="card_3"
                  className="h-[365px] w-[260px] rounded-2xl blur-[2px] absolute hover:rotate-12 flex self-end" />
                <img
                  src="card_1.png"
                  alt="card_1"
                  className="h-[365px] w-[260px] rounded-2xl blur-[2px] absolute flex self-end hover:rotate-0" />
                <img
                  src="Cousette_card.png"
                  alt="Cousette"
                  className="h-[365px] w-[260px] rounded-2xl absolute hover:-rotate-12 flex self-end" />
                <a
                  className="text-[300px] absolute drop-shadow text-white font-fink-heavy h-[100px] w-[100px] flex items-center justify-center self-center"
                  href="https://animalcrossing.fandom.com/fr/wiki/Personnages_spéciaux"
                  title="Personnages spéciaux"
                  target="_blank"
                >
                  +
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2 w-full bg-[#3FA367] flex place-self-end drop-shadow"></div>
      </section >
    </main >
  );
}
