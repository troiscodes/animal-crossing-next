import CharacterSection from "/components/character-section";
import Image from "next/image";

export default async function Home({
  backgroundColor,
}) {

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
  //const optionPage = data.optionPage.siteSettings.characters.nodes;
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
        // console.log('title', title);

        console.log("backgroundWURL", backgroundWURL);
        console.log("backgroundHURL", backgroundHURL);
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
          // <div>{character.title}</div>
        )

      })}


      {/* <CharacterSection
        backgroundColor={'bg-[#73EED4]'}
      />
      <CharacterSection
        backgroundColor={'bg-[#9AB536]'}
      />
      <CharacterSection
        backgroundColor={'bg-[#FDB30F]'}
      />
      <CharacterSection
        backgroundColor={'bg-[#B4447C]'}
      />
      <CharacterSection
        backgroundColor={'bg-[#73EED4]'}
      />
      <CharacterSection
        backgroundColor={'bg-[#9AB536]'}
      />
      <CharacterSection
        backgroundColor={'bg-[#FDB30F]'}
      />
      <CharacterSection
        backgroundColor={'bg-[#B4447C]'}
      /> */}

    </main>
  )
}

//         return (
//           <>
//             <div key={character.node.characterId}>
//               <div className="bg-cover bg-center min-h-[465px] w-full absolute">
//                 <Image
//                   src={backgroundWURL}
//                   alt="background"
//                   fill
//                   className="object-cover md:block hidden"
//                 />
//                 <Image
//                   src={backgroundHURL}
//                   alt="background_h"
//                   fill
//                   className="object-cover md:hidden block"
//                 />
//               </div>
//             </div>
//             <div className="md:min-h-[465px] w-full flex md:flex-row flex-col justify-center items-center container p-14 md:p-0">
//               <div className="flex items-center justify-center md:pr-5 pb-14 md:pb-0">
//                 <div className="h-[365px] w-full" id={characterId}>
//                   <img
//                     src={characterCard}
//                     alt="character card"
//                     fill
//                     className="h-[365px] w-[260px] rounded-2xl drop-shadow-xl"
//                   ></img>
//                 </div>
//               </div>
//               <div className="flex items-end md:flex-row flex-col gap-5 pb-10 md:pb-0">
//                 <div className="backdrop-blur-sm md:min-w-[703px] w-full md:h-[329px] h-[500px] rounded-3xl drop-shadow-3xl">
//                   <div
//                     className={
//                       "flex items-center  md:min-w-[703px] md:h-[329px] h-[500px] rounded-3xl bg-opacity-30 " +
//                       backgroundColor
//                     }
//                   >
//                     <div className="p-5 md:min-w-[703px] h-[329px] rounded-3xl flex items-start flex-col justify-center text-start text-[20px] drop-shadow-xl">
//                       <div
//                         className="opacity-100 text-black font-fink-heavy underline decoration-solid"
//                         fill
//                       >
//                         Description :
//                       </div>
//                       <div className="opacity-100 text-black font-fink-heavy">
//                         {description}
//                       </div>
//                       <div
//                         className="opacity-100 text-black font-fink-heavy underline decoration-solid"
//                         fill
//                       >
//                         Fonction :
//                       </div>
//                       <div className="opacity-100 text-black font-fink-heavy">
//                         {fonction}
//                       </div>
//                       <div
//                         className="opacity-100 text-black font-fink-heavy underline decoration-solid"
//                         fill
//                       >
//                         Ce qu’il nous apprend :
//                       </div>
//                       <div className="opacity-100 text-black font-fink-heavy">
//                         {fieldGroupName}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex md:self-end md:pb-12">
//                 <div className="flex items-end h-[180px] w-[180px] drop-shadow-xl md:ml-5">
//                   <img
//                     src={dansLeJeu}
//                     alt="illustration"
//                     className="h-[180px] w-[180px] rounded-full"
//                   ></img>
//                 </div>
//               </div>
//             </div>
//           </>
//         )

//       })}

//     </main >
//   );
// }
