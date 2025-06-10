import './LoadingPage.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const LoadingPage = () => {
  return (
    <>
      <Header />
      {/* <!--Loading - LOGO and GIF--> */}
      <div className="loading-container">
        <div className="logo-big">
          <img src="/assets/logo_big.png" alt="Logo" />
        </div>
        <div className="loading-shelf">
          <img src="/assets/loading.gif" alt="Shelf" />
        </div>
      </div>
      <Footer />
    </>
  );
};
