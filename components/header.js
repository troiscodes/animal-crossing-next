export default function Header() {
    return (
      <header className="container flex justify-between bg-lime-700">

            <img src="/logo-ac.png" alt="Animal Crossing Logo 2" className="object-contain h-20 w-20"/>
            <img src="/ac.png" alt="Animal Crossing logo" className="object-contain h-20 w-100"/>
            
        <div className="flex items-center justify-center">
            <p className="text-sm" href="./app/page.js"> Accueil Personnages Jeux </p>
        </div>
      </header>
    )
}
