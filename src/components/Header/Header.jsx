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
