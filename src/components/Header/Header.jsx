import { Link, Navigate } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import { Menu } from '../Menu/Menu';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <header className="header">
        <nav className="nav-icons">
          <div className="nav-icon nav-icon--home" onClick={handleClick}>
            <img src="assets/icons/home.png" alt="Home" />
          </div>
        </nav>
        <Link to={'/'}>
          <img className="logo-header-small" src="assets/logo_small.png"></img>
        </Link>
        <div className="only-desktop">SHELFIE</div>
      </header>
      {menuOpened ? <Menu /> : null}
    </>
  );
};

//media header
// export const Header = () => {
//   return (
//     <>
//       {/* <!--Header--> /}
//       <header className="header-big">
//         {/ <!-- Navigation -->  /}
//         <div className="header-title">Shelfie</div>

//           {/ <!-- Home-Page -->

//           <div className="blabla">
//           <a href="index.html" className="nav-icon nav-icon--home">
//             <img src="assets/icons/home_icon.svg" alt="Home" />
//           </a>

//        </div>*/}
//       </header>
//     </>
//   );
// };
