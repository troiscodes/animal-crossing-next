import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container flex justify-between bg-lime-700">
  <div className="h-[400px] border border-red-500 w-full relative">
          <Image src="/logo-ac.png" alt="Animal Crossing Logo 2" className="image-header-1" fill/>
  </div>
          <img src="/ac.png" alt="Animal Crossing logo" className="image-header-2 " />
  
          <div className="text-red-500 " >
            <a href="">Accueil</a>
            <a href="">Personnages</a>
            <a href="">Jeux</a>
            <Link href="/" target="_blank"><span className="text-blue-500">Acc</span>ueil</Link>
          </div>
        </header>
    );
  }