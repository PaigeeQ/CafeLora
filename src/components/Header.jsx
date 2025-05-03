import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content container">
        <div className="site-logo"></div>
        <button className="nav-btn nav-btn--menu" aria-label="menu"></button>
        <nav className="navigation rollout-nav nav-closed">
          <a href="#home">Domů</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Galerie</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>
    </header>
  );
};