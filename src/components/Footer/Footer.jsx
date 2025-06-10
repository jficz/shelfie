import { Menu } from '../Menu/Menu';
import { useState } from 'react';
import './Footer.css';

export const Footer = () => {
  // const [menuOpened, setMenuOpened] = useState(false);

  // const handleClick = () => {
  //   setMenuOpened(!menuOpened);
  // };

  return (
    <footer className="footer">
      <h3 className="footer-title">© 2025 LuciJeVa & Ivik</h3>
      <span>
        <a href="mailto:lucie.vadkerti@gmail.com">shelfie@shelfie.cz</a>
      </span>
      {/*{menuOpened ? <Menu onLink={handleClick} /> : null}

       <button className="button-menu" onClick={handleClick}>
        MENU
      </button> */}
    </footer>
  );
};
