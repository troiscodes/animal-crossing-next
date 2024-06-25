export default function Header() {
  return (
    <header className="container flex justify-between bg-lime-700">
  
  <img src="/logo-ac.png" alt="Animal Crossing Logo 2" class="image-header-1" />
          <img src="/ac.png" alt="Animal Crossing logo" class="image-header-2" />
  
          <div style={{ display: 'flex', gap: 10, color: "white", paddingRight: "20px" }}>
            <a href="">Accueil</a>
            <a href="">Personnages</a>
            <a href="">Jeux</a>
          </div>
        </header>
    );
  }