import { Menu } from '../Menu/Menu';
import { useState } from 'react';
import './Footer.css';

export const Footer = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = () => {
    console.log('menu open works');
    setMenuOpened(!menuOpened);
  };
  console.log(menuOpened);
  return (
    <footer className="footer">
      <h3 className="footer-title">© 2025 Shelfie</h3>
      {menuOpened ? <Menu /> : null}

      <button className="button-menu" onClick={handleClick}>
        MENU
      </button>
    </footer>
  );
};
