import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Café Lóra</h1>
        <nav className="nav">
          <a href="#menu">Menu</a>
          <a href="#gallery">Galerie</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>
    </header>
  );
};