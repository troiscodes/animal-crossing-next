// import CharacterSection from "@/components/character-section";
import Image from "next/image";

export default async function Home() {

	const response = await fetch("https://animalcrossing.dev.3codes.io/graphql", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			query: `query {
			characters(first: 10) {
				edges {
				node {
					title
					id
					personnage {
					fond {
						node {
						sourceUrl
						}
					}
					realisateur {
						node {
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

	console.log(data.characters.edges, '999999999');

	const characters = data.characters.edges;

	return (
		<main className="min-h-full w-full">

			{characters && characters.map((character) => {

				const backgroundURL = character.node.personnage.fond.node.sourceUrl;


				return (
					<>
						<div className="relative">
							{/* <Image src={backgroundURL} alt="background" fill className="object-cover absolute h-full" /> */}
							<div className="py-2 px-6 bg-red-500 my-4">titre : {character.node.title}</div>
						</div>
					</>
				)
			})}



			{/* <CharacterSection
				backgroundImage={"/background_leaf.png"}
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
			/> */}
		</main>
	);
}
