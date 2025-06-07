import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './HomePage.css';
import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">{<Outlet />}</div>
      <Footer />
    </>
  );
};
