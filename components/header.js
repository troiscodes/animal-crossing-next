import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <section className="bg-lime-700 flex justify-between relative h-40">
        <div>
          <a href="/">
          <Image src="/logo-ac.png" alt="Animal Crossing Logo 2" width={150} height={100} className="object-scale-down absolute items-center h-30 hover:opacity-80" />
          </a>
        </div>
        <div className="text-white flex space-x-4 items-center text-xl pr-9 font-fink-heavy">
          <Link href="/" className="hover:underline">Accueil</Link>
          <Link href="/personnages" className="hover:underline" >Personnages</Link>
          <Link href="/jeux" className="hover:underline">Jeux</Link>
        </div>
      </section>
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-28 ">
        <Image src="/ac.png" alt="Animal Crossing logo" width={300} height={10}/>
      </div>
      <div className="border-4 border-[#16a34a]"></div>
    </header>
  );
}
