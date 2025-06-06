import './LoadingPage.css';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';

export const LoadingPage = () => {
  return (
    <>
      <Header />
      {/* <!--Loading - LOGO and GIF--> */}
      <div className="loading-container">
        <div className="logo-big">
          <img src="../assets/logo_big.png" alt="Logo" />
        </div>
        <div className="loading-shelf">
          <img src="assets/loading.gif" alt="Shelf" />
        </div>
      </div>
      <Footer />
    </>
  );
};
