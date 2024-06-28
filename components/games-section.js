import Image from "next/image";

export default function GamesSection({
  boiteJeux,
  imageJeux,
  texteJeux,
  idJeux,
  hImage,
  padding,
}) {
  console.log("boiteJeux", boiteJeux);
  console.log("imageJeux", imageJeux);
  console.log("texteJeux", texteJeux);
  console.log("idJeux", idJeux);
  console.log("hImage", hImage);
  return (
    <main className="font-fink-heavy bg-[url('/fond-games.png')] ">
      <section
        className={"flex items-center md:pt-16 md:pr-5 container"}
        id={idJeux}
      >
        <div className="md:flex items-center pb-6">
          <div>
            <img
              src={boiteJeux}
              className="pt-20 pb-6 container flex justify-center"
            />
          </div>
          <div
            className="relative text-2xl py-4 px-6 flex md:w-full md:min-h-[357px] rounded-3xl"
            style={{ backgroundColor: "rgba(111, 238, 40, 0.3)" }}
          >
            <div className="grid md:grid-cols-7 gap-4">
              <div className="relative pb-4 md:col-span-5">{texteJeux}</div>
              <div className="w-full h-full flex items-end md:col-span-2">
                <div className={"relative w-full " + hImage}>
                  <Image
                    src={imageJeux}
                    fill
                    className={"bottom-0 right-0 object-contain"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
