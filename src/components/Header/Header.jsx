import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useState, useEffect, useRef } from 'react';
import { Menu } from '../Menu/Menu';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    setMenuOpened(false);
  }, [location.pathname]);

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) && // mimo menu
        iconRef.current &&
        !iconRef.current.contains(e.target) // a mimo ikonu
      ) {
        setMenuOpened(false);
      }
    };

    if (menuOpened) {
      window.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpened]);

  return (
    <>
      <header className="header">
        <nav className="nav-icons">
          <div className="nav-icon nav-icon--home" onClick={handleClick} ref={iconRef}>
            <img src="/assets/icons/home.png" alt="Home" />
          </div>
        </nav>
        <Link to={'/'}>
          <img className="logo-header-small" src="/assets/logo_small.png"></img>
        </Link>
        <div className="header-title">SHELFIE</div>
        <div className="header-shelf"></div>
      </header>
      {menuOpened ? (
        <div ref={menuRef}>
          <Menu />
        </div>
      ) : null}
    </>
  );
};
