import CharacterSection from "/components/character-section";
import Image from "next/image";

export default async function Home() {

  const response = await fetch("https://animalcrossing.dev.3codes.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query {
  optionPage {
    siteSettings {
      characters(first: 10) {
        nodes {
          ... on Character {
            id
            title
            characterId
            personnage {
              apprendreIRL
              description
              fonction
              backgroundcolor
              cartePersonnage {
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
              fondH {
                node {
                  id
                  sourceUrl
                }
              }
              fondW {
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

  // console.log(data.characters.edges, '999999999');

  const characters = data.optionPage.siteSettings.characters.nodes;
  console.log("characters", characters);

  return (
    <main className="min-h-full w-full">
      {characters && characters.map((character, index) => {

        // console.log("character", character);
        const backgroundWURL = character.personnage.fondW?.node?.sourceUrl;
        const backgroundHURL = character.personnage.fondH?.node?.sourceUrl;
        const title = character.title
        const characterId = character.characterId;
        const characterCard = character.personnage.cartePersonnage.node.sourceUrl;
        const description = character.personnage.description;
        const apprendreIRL = character.personnage.apprendreIRL;
        const fonction = character.personnage.fonction;
        const dansLeJeu = character.personnage.dansLeJeu.node.sourceUrl;
        const backgroundColor = character.personnage.backgroundcolor;

        // console.log("backgroundWURL", backgroundWURL);
        // console.log("backgroundHURL", backgroundHURL);
        // console.log("characterId", characterId);
        // console.log("charactercard", characterCard);
        // console.log("description", description);
        // console.log("apprendreIRL", apprendreIRL);
        // console.log("fonction", fonction);
        // console.log("dansLeJeu", dansLeJeu);
        // console.log("backgroundColor", backgroundColor);
        return (
          <CharacterSection
            key={character.id}
            character={character}
          />
        )

      })}
    </main>
  )
}

