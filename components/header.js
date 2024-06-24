import "../app/globals.css";

export default function Header() {
    return (
      <header className="container">

        <img src="/logo-ac.png" alt="Animal Crossing Logo 2" className="object-contain h-20 w-20" />
        <img src="/ac.png" alt="Animal Crossing logo" className="object-contain h-60 w-100" />

        <div className="flex justify-center">
          <a className="text-sm" href="">Accueil</a>
          <span className="mx-1" />
          <a className="text-sm" href="">Personnages</a>
          <span className="mx-1" />
          <a className="text-sm" href="">Jeux</a>
        </div>
      </header>
    );
  }