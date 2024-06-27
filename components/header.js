import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <section className="bg-lime-700 flex justify-between relative h-40 w-full items-center  pl-3">
        <div>
          <a href="/">
          <img src="/logo-ac.png" alt="Animal Crossing Logo 2" className="relative md:h-[150px] md:w-[150px] h-[100px] w-[100px] hover:opacity-80" />
          </a>
        </div>
        <div className="text-white flex flex-col md:flex-row space-x-4 items-end md:text-xl text-lg md:pr-9 pr-5 font-fink-heavy">
          <Link href="/" className="hover:underline">Accueil</Link>
          <Link href="/personnages" className="hover:underline" >Personnages</Link>
          <Link href="/jeux" className="hover:underline">Jeux</Link>
        </div>
      </section>
      <div className="border-4 border-[#16a34a] drop-shadow"></div>
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-28 top-[140px]">
        <Image src="/ac.png" alt="Animal Crossing logo" width={300} height={10}/>
      </div>
    </header>
  );
}
