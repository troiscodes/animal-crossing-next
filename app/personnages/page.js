import CharacterSection from "@/components/character-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-full w-full">
      {/* <div
        className="bg-cover bg-center md:min-h-[465px] min-w-[1280px] h-full md:w-full md:rotate-[360] rotate-90"
        style={{ backgroundImage: "url('/background_leaf.png')" }}>
        <div className="md:h-[465px] w-[1280px]] flex justify-center items-center container">
          <div className="h-[400px] flex flex-row justify-start gap-10">
            <div className="flex items-center">
              <div className="h-[365px] w-[260px] md:rotate-[360] -rotate-90"><img src="Tom_Nook_card.png" alt="Tom Nook card" className="h-[365px] w-[260px] rounded-2xl drop-shadow-xl"></img></div>
            </div>
            <div className="flex items-center">
              <div className="backdrop-blur-sm w-[703px] h-[329px] rounded-3xl drop-shadow-3xl">
                <div className="flex items-center w-[703px] h-[329px] rounded-3xl bg-[#73EED4] bg-opacity-30">
                  <div className="p-5 w-[703px] h-[329px] rounded-3xl flex items-start flex-col justify-center text-start text-[20px] drop-shadow-xl md:rotate-[360] -rotate-90">
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Description :</div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Fonction : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Ce qu’il nous apprend : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <div className="flex items-end h-[180px] w-[180px] drop-shadow-xl md:rotate-[360] -rotate-90"><img src="maison.png" alt="maison" className="h-[180px] w-[180px] rounded-full"></img></div>
            </div>
          </div>
        </div>
      </div>


      <div
        className="bg-cover bg-center md:min-h-[465px] min-w-[1280px] min-h-[465px] md:w-full md:rotate-[360] rotate-90"
        style={{ backgroundImage: "url('/background_green.png')" }}>
        <div className="md:h-[465px] w-screen  flex justify-center items-center container">
          <div className="h-[400px] flex flex-row justify-start gap-10">
            <div className="flex items-center">
              <div className="h-[365px] w-[260px] md:rotate-[360] -rotate-90"><img src="Freres_Nook_card.png" alt="Freres Nook card" className="h-[365px] w-[260px] rounded-2xl drop-shadow-xl"></img></div>
            </div>
            <div className="flex items-center">
              <div className="backdrop-blur-sm w-[703px] h-[329px] rounded-3xl drop-shadow-3xl">
                <div className="flex items-center w-[703px] h-[329px] rounded-3xl bg-[#9AB536] bg-opacity-30">
                  <div className="p-5 w-[703px] h-[329px] rounded-3xl flex items-start flex-col justify-center text-start text-[20px] drop-shadow-xl md:rotate-[360] -rotate-90">
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Description :</div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Fonction : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Ce qu’il nous apprend : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <div className="flex items-end h-[180px] w-[180px] drop-shadow-xl md:rotate-[360] -rotate-90"><img src="boutique_nook.png" alt="maison" className="h-[180px] w-[180px] rounded-full"></img></div>
            </div>
          </div>
        </div>
      </div>


      <div
        className="bg-cover bg-center md:min-h-[465px] min-w-[1280px] min-h-[465px] md:w-full md:rotate-[360] rotate-90"
        style={{ backgroundImage: "url('/background_orange.png')" }}>
        <div className="md:h-[465px] w-screen  flex justify-center items-center container">
          <div className="h-[400px] flex flex-row justify-start gap-10">
            <div className="flex items-center">
              <div className="h-[365px] w-[260px] md:rotate-[360] -rotate-90"><img src="Thibou_card.png" alt="Thibou card" className="h-[365px] w-[260px] rounded-2xl drop-shadow-xl"></img></div>
            </div>
            <div className="flex items-center">
              <div className="backdrop-blur-sm w-[703px] h-[329px] rounded-3xl drop-shadow-3xl">
                <div className="flex items-center w-[703px] h-[329px] rounded-3xl bg-[#FDB30F] bg-opacity-30">
                  <div className="p-5 w-[703px] h-[329px] rounded-3xl flex items-start flex-col justify-center text-start text-[20px] drop-shadow-xl md:rotate-[360] -rotate-90">
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Description :</div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Fonction : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Ce qu’il nous apprend : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <div className="flex items-end h-[180px] w-[180px] drop-shadow-xl md:rotate-[360] -rotate-90"><img src="musée.png" alt="musee" className="h-[180px] w-[180px] rounded-full"></img></div>
            </div>
          </div>
        </div>
      </div>


      <div
        className="bg-cover bg-center md:min-h-[465px] min-w-[1280px] min-h-[465px] md:w-full md:rotate-[360] rotate-90"
        style={{ backgroundImage: "url('/background_magenta.png')" }}>
        <div className="md:h-[465px] w-screen  flex justify-center items-center container">
          <div className="h-[400px] flex flex-row justify-start gap-10">
            <div className="flex items-center">
              <div className="h-[365px] w-[260px] md:rotate-[360] -rotate-90"><img src="Rounard_card.png" alt="Rounard card" className="h-[365px] w-[260px] rounded-2xl drop-shadow-xl"></img></div>
            </div>
            <div className="flex items-center">
              <div className="backdrop-blur-sm w-[703px] h-[329px] rounded-3xl drop-shadow-3xl">
                <div className="flex items-center w-[703px] h-[329px] rounded-3xl bg-[#B4447C] bg-opacity-30">
                  <div className="p-5 w-[703px] h-[329px] rounded-3xl flex items-start flex-col justify-center text-start text-[20px] drop-shadow-xl md:rotate-[360] -rotate-90">
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Description :</div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Fonction : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Ce qu’il nous apprend : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <div className="flex items-end h-[180px] w-[180px] drop-shadow-xl md:rotate-[360] -rotate-90"><img src="bateau_rounard.png" alt="bateau Rounard" className="h-[180px] w-[180px] rounded-full"></img></div>
            </div>
          </div>
        </div>
      </div>



      <div
        className="bg-cover bg-center md:min-h-[465px] min-w-[1280px] min-h-[465px] md:w-full md:rotate-[360] rotate-90"
        style={{ backgroundImage: "url('/background_leaf.png')" }}>
        <div className="md:h-[465px] w-screen  flex justify-center items-center container">
          <div className="h-[400px] flex flex-row justify-start gap-10">
            <div className="flex items-center">
              <div className="h-[365px] w-[260px] md:rotate-[360] -rotate-90"><img src="Layette_card.png" alt="Layette card" className="h-[365px] w-[260px] rounded-2xl drop-shadow-xl"></img></div>
            </div>
            <div className="flex items-center">
              <div className="backdrop-blur-sm w-[703px] h-[329px] rounded-3xl drop-shadow-3xl">
                <div className="flex items-center w-[703px] h-[329px] rounded-3xl bg-[#73EED4] bg-opacity-30">
                  <div className="p-5 w-[703px] h-[329px] rounded-3xl flex items-start flex-col justify-center text-start text-[20px] drop-shadow-xl md:rotate-[360] -rotate-90">
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Description :</div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Fonction : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Ce qu’il nous apprend : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <div className="flex items-end h-[180px] w-[180px] drop-shadow-xl md:rotate-[360] -rotate-90"><img src="boutique.png" alt="boutique doigts de fées" className="h-[180px] w-[180px] rounded-full"></img></div>
            </div>
          </div>
        </div>
      </div>


      <div
        className="bg-cover bg-center md:min-h-[465px] min-w-[1280px] min-h-[465px] md:w-full md:rotate-[360] rotate-90"
        style={{ backgroundImage: "url('/background_green.png')" }}>
        <div className="md:h-[465px] w-screen  flex justify-center items-center container">
          <div className="h-[400px] flex flex-row justify-start gap-10">
            <div className="flex items-center">
              <div className="h-[365px] w-[260px] md:rotate-[360] -rotate-90"><img src="Porcelette_card.jpg" alt="Porcelette card" className="h-[365px] w-[260px] rounded-2xl drop-shadow-xl"></img></div>
            </div>
            <div className="flex items-center">
              <div className="backdrop-blur-sm w-[703px] h-[329px] rounded-3xl drop-shadow-3xl">
                <div className="flex items-center w-[703px] h-[329px] rounded-3xl bg-[#9AB536] bg-opacity-30">
                  <div className="p-5 w-[703px] h-[329px] rounded-3xl flex items-start flex-col justify-center text-start text-[20px] drop-shadow-xl md:rotate-[360] -rotate-90">
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Description :</div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Fonction : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Ce qu’il nous apprend : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <div className="flex items-end h-[180px] w-[180px] drop-shadow-xl md:rotate-[360] -rotate-90"><img src="navet.png" alt="champ de navet" className="h-[180px] w-[180px] rounded-full"></img></div>
            </div>
          </div>
        </div>
      </div>


      <div
        className="bg-cover bg-center md:min-h-[465px] min-w-[1280px] min-h-[465px] md:w-full md:rotate-[360] rotate-90"
        style={{ backgroundImage: "url('/background_orange.png')" }}>
        <div className="md:h-[465px] w-screen  flex justify-center items-center container">
          <div className="h-[400px] flex flex-row justify-start gap-10">
            <div className="flex items-center">
              <div className="h-[365px] w-[260px] md:rotate-[360] -rotate-90"><img src="KK_card.jpg" alt="KK card" className="h-[365px] w-[260px] rounded-2xl drop-shadow-xl"></img></div>
            </div>
            <div className="flex items-center">
              <div className="backdrop-blur-sm w-[703px] h-[329px] rounded-3xl drop-shadow-3xl">
                <div className="flex items-center w-[703px] h-[329px] rounded-3xl bg-[#FDB30F] bg-opacity-30">
                  <div className="p-5 w-[703px] h-[329px] rounded-3xl flex items-start flex-col justify-center text-start text-[20px] drop-shadow-xl md:rotate-[360] -rotate-90">
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Description :</div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Fonction : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                    <div className="opacity-100 text-black font-fink-heavy underline decoration-solid">Ce qu’il nous apprend : </div>
                    <div className="opacity-100 text-black font-fink-heavy">Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <div className="flex items-end h-[180px] w-[180px] drop-shadow-xl md:rotate-[360] -rotate-90"><img src="KK.png" alt="KK" className="h-[180px] w-[180px] rounded-full"></img></div>
            </div>
          </div>
        </div>
      </div> */}

      <CharacterSection
        backgroundImage={"/background_leaf.png"}
        backgroundImageH={"/background_leaf_h.png"}
        characterCard={"/Tom_Nook_card.png"}
        text_D={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_F={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_C={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        Illustration={"/maison.png"}
        backgroundColor={"#73EED4"}
      />
      <CharacterSection
        backgroundImage={"/background_green.png"}
        backgroundImageH={"/background_green_h.png"}
        characterCard={"/Freres_Nook_card.png"}
        text_D={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_F={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_C={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        Illustration={"/boutique_nook.png"}
        backgroundColor={"#9AB536"}
      />

      <CharacterSection
        backgroundImage={"/background_orange.png"}
        backgroundImageH={"/background_orange_h.png"}
        characterCard={"/Thibou_card.png"}
        text_D={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_F={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_C={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        Illustration={"/musée.png"}
        backgroundColor={"#FDB30F"}
      />
      <CharacterSection
        backgroundImage={"/background_magenta.png"}
        backgroundImageH={"/background_magenta_h.png"}
        characterCard={"/Rounard_card.png"}
        text_D={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_F={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_C={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        Illustration={"/bateau_rounard.png"}
        backgroundColor={"#B4447C"}
      />

      <CharacterSection
        backgroundImage={"/background_leaf.png"}
        backgroundImageH={"/background_leaf_h.png"}
        characterCard={"/Layette_card.png"}
        text_D={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_F={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_C={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        Illustration={"/boutique.png"}
        backgroundColor={"#73EED4"}
      />

      <CharacterSection
        backgroundImage={"/background_green.png"}
        backgroundImageH={"/background_green_h.png"}
        characterCard={"/Porcelette_card.jpg"}
        text_D={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_F={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_C={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        Illustration={"/navet.png"}
        backgroundColor={"#9AB536"}
      />

      <CharacterSection
        backgroundImage={"/background_orange.png"}
        backgroundImageH={"/background_orange_h.png"}
        characterCard={"/KK_card.jpg"}
        text_D={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_F={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_C={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        Illustration={"/KK.png"}
        backgroundColor={"#FDB30F"}
      />

      <CharacterSection
        backgroundImage={"/background_magenta.png"}
        backgroundImageH={"/background_magenta_h.png"}
        characterCard={"/Marie_card.png"}
        text_D={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_F={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        text_C={
          "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi."
        }
        Illustration={"/bureau_maire.png"}
        backgroundColor={"#B4447C"}
      />
    </main>
  );
}
