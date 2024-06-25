import Image from "next/image";

import Hero from "../components/hero";
import Characters from "../components/characters";
import Games from "../components/games";

export default function Home() {
  return (
    <main className="flex flex-col !bg-red-500 py-24">
      
      <Hero></Hero>

      <Characters></Characters>

      <Games></Games>
      
    </main>
  );
}