import CharacterSection from "/components/character-section";
import Image from "next/image";

export default async function Home() {

	const response = await fetch("https://animalcrossing.dev.3codes.io/graphql", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			query: `query {
        characters {
    edges {
      node {
      title
        characterId
        personnage {
          apprendreIRL
          description
          fieldGroupName
          fonction
          cartePersonnage {
            node {
              sourceUrl
              id
            }
          }
          dansLeJeu {
            node {
              sourceUrl
              id
            }
          }
          fondH {
            node {
              sourceUrl
              id
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
}`,
		}),
	});
	const { data } = await response.json();

	// console.log(data.characters.edges, '999999999');

	const characters = data.characters.edges;
	// console.log("characters", characters);

	return (
		<main className="min-h-full w-full flex-col-reverse">

			{characters && characters.map((character) => {

				// console.log("character", character);
				const backgroundWURL = character.node.personnage.fondW?.node?.sourceUrl;
				const backgroundHURL = character.node.personnage.fondH?.node?.sourceUrl;

				console.log("backgroundWURL", backgroundWURL);
				console.log("backgroundHURL", backgroundHURL);

				return (
					<>
						<div key={character.node.characterId}>
							<div className="bg-cover bg-center min-h-[465px] w-full relative">
								<Image
									src={backgroundWURL}
									alt="background"
									fill
									className="object-cover md:block hidden"
								/>
								<Image
									src={backgroundHURL}
									alt="background_h"
									fill
									className="object-cover md:hidden block"
								/>

							</div>
						</div>
						<div className="py-2 px-6" > titre : {character.node.title}</div>
					</>
				)

			})}

		</main>
	);
}
