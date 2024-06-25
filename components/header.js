import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <section className="bg-lime-700 flex justify-between relative h-40">
        <div>
          <Image src="/logo-ac.png" alt="Animal Crossing Logo 2" width={150} height={100} className="object-scale-down absolute items-center h-30" />
        </div>
        <div className="text-white flex space-x-4 items-center text-xl pr-9">
          <Link href="/">Accueil</Link>
          <Link href="/personnages">Personnages</Link>
          <Link href="/jeux">Jeux</Link>
        </div>
      </section>
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-28 ">
        <Image src="/ac.png" alt="Animal Crossing logo" width={300} height={10}/>
      </div>
      <div class="border-4 border-[#16a34a] "></div>
    </header>
  );
}
