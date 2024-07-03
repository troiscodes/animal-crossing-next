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
      <>
        {characters && characters.map((character) => {

          // console.log("character", character);
          const backgroundWURL = character.node.personnage.fondW?.node.sourceUrl;
          const backgroundHURL = character.node.personnage.fondH?.node.sourceUrl;

          console.log("backgroundWURL", backgroundWURL);
          console.log("backgroundHURL", backgroundHURL);

          return (
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

              </div >
            </div>
          )
            < div className = "py-2 px-6" > titre : {character.node.title}</div>
      })}




      {/*<CharacterSection
        backgroundImage={{ backgroundURL }}
        backgroundImageH={"/background_leaf_h.png"}
        characterCard={"/Tom_Nook_card.png"}
        idCard={"Tom_Nook"}
        textD={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        textF={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        textC={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        Illustration={"/maison.png"}
        backgroundColor={"bg-[#73EED4]"}
      />
			<CharacterSection
				backgroundImage={"/background_green.png"}
				backgroundImageH={"/background_green_h.png"}
				characterCard={"/Freres_Nook_card.png"}
				idCard={"Freres_Nook"}
				textD={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textF={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textC={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				Illustration={"/boutique_nook.png"}
				backgroundColor={"bg-[#9AB536]"}
			/>

			<CharacterSection
				backgroundImage={"/background_orange.png"}
				backgroundImageH={"/background_orange_h.png"}
				characterCard={"/Thibou_card.png"}
				idCard={"Thibou"}
				textD={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textF={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textC={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				Illustration={"/musée.png"}
				backgroundColor={"bg-[#FDB30F]"}
			/>
			<CharacterSection
				backgroundImage={"/background_magenta.png"}
				backgroundImageH={"/background_magenta_h.png"}
				characterCard={"/Rounard_card.png"}
				idCard={"Rounard"}
				textD={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textF={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textC={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				Illustration={"/bateau_rounard.png"}
				backgroundColor={"bg-[#B4447C]"}
			/>

			<CharacterSection
				backgroundImage={"/background_leaf.png"}
				backgroundImageH={"/background_leaf_h.png"}
				characterCard={"/Layette_card.png"}
				idCard={"Layette"}
				textD={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textF={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textC={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				Illustration={"/boutique.png"}
				backgroundColor={"bg-[#73EED4]"}
			/>

			<CharacterSection
				backgroundImage={"/background_green.png"}
				backgroundImageH={"/background_green_h.png"}
				characterCard={"/Porcelette_card.jpg"}
				idCard={"Porcelette"}
				textD={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textF={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textC={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				Illustration={"/navet.png"}
				backgroundColor={"bg-[#9AB536]"}
			/>

			<CharacterSection
				backgroundImage={"/background_orange.png"}
				backgroundImageH={"/background_orange_h.png"}
				characterCard={"/KK_card.jpg"}
				idCard={"KK"}
				textD={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textF={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textC={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				Illustration={"/KK.jpg"}
				backgroundColor={"bg-[#FDB30F]"}
			/>

			<CharacterSection
				backgroundImage={"/background_magenta.png"}
				backgroundImageH={"/background_magenta_h.png"}
				characterCard={"/Marie_card.png"}
				idCard={"Marie"}
				textD={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textF={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				textC={
					"Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
				}
				Illustration={"/bureau_maire.png"}
				backgroundColor={"bg-[#B4447C]"}
			/>*/ }
      );
}
