import './Header.css';

export const Header = () => {
  return (
    <>
      {/* <!--Header--> */}
      <header className="header">
        {/* <!-- Navigation -->  */}
        <nav className="nav-icons">
          {/* <!-- Home-Page --> */}
          <a href="index.html" className="nav-icon nav-icon--home">
            <img src="assets/icons/home_icon.svg" alt="Home" />
          </a>
        </nav>
      </header>
    </>
  );
};
