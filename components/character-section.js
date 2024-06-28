import Image from "next/image";

export default function CharacterSection({
  backgroundImage,
  backgroundImageH,
  characterCard,
  idCard,
  textD,
  textF,
  textC,
  Illustration,
  backgroundColor,
}) {
  console.log("backgroundImage", backgroundImage);
  console.log("backgroundImageH", backgroundImageH);
  console.log("characterCard", characterCard);
  console.log("idCard", idCard);
  console.log("text_D", textD);
  console.log("text_F", textF);
  console.log("text_C", textC);
  console.log("Illustration", Illustration);
  console.log("backgroundColor", backgroundColor);
  return (
    <div className="bg-cover bg-center min-h-[465px] w-full relative ">
      <Image
        src={backgroundImage}
        alt="background"
        fill
        className="object-cover md:block hidden"
      />
      <Image
        src={backgroundImageH}
        alt="background_h"
        fill
        className="object-cover md:hidden block"
      />

      <div className="md:min-h-[465px] w-full flex md:flex-row flex-col justify-center items-center container p-14 md:p-0">
        <div className="flex items-center justify-center md:pr-5 pb-14 md:pb-0">
          <div className="h-[365px] w-full" id={idCard}>
            <img
              src={characterCard}
              alt="character card"
              fill
              className="h-[365px] w-[260px] rounded-2xl drop-shadow-xl"
            ></img>
          </div>
        </div>
        <div className="flex items-end md:flex-row flex-col gap-5 pb-10 md:pb-0">
          <div className="backdrop-blur-sm md:min-w-[703px] w-full md:h-[329px] h-[500px] rounded-3xl drop-shadow-3xl">
            <div
              className={
                "flex items-center  md:min-w-[703px] md:h-[329px] h-[500px] rounded-3xl bg-opacity-30 " +
                backgroundColor
              }
            >
              <div className="p-5 md:min-w-[703px] h-[329px] rounded-3xl flex items-start flex-col justify-center text-start text-[20px] drop-shadow-xl">
                <div
                  className="opacity-100 text-black font-fink-heavy underline decoration-solid"
                  fill
                >
                  Description :
                </div>
                <div className="opacity-100 text-black font-fink-heavy">
                  {textD}
                </div>
                <div
                  className="opacity-100 text-black font-fink-heavy underline decoration-solid"
                  fill
                >
                  Fonction :
                </div>
                <div className="opacity-100 text-black font-fink-heavy">
                  {textF}
                </div>
                <div
                  className="opacity-100 text-black font-fink-heavy underline decoration-solid"
                  fill
                >
                  Ce qu’il nous apprend :
                </div>
                <div className="opacity-100 text-black font-fink-heavy">
                  {textC}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:self-end md:pb-12">
          <div className="flex items-end h-[180px] w-[180px] drop-shadow-xl md:ml-5">
            <img
              src={Illustration}
              alt="illustration"
              className="h-[180px] w-[180px] rounded-full"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
