import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav-icons">
          <a href="index.html" className="nav-icon nav-icon--home">
            <img src="assets/icons/home.png" alt="Home" />
          </a>
        </nav>
      </header>
    </>
  );
};
