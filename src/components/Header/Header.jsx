import { Link, Navigate } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav-icons">
          <a href="/" className="nav-icon nav-icon--home">
            <img src="assets/icons/home.png" alt="Home" />
          </a>
        </nav>
        <Link to={'/'}>
          <img className="logo-header-small" src="assets/logo_small.png"></img>
        </Link>
        <Link to={'/'}>
          <button className="only-desktop">SHELFIE</button>
        </Link>
        
      </header>
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
