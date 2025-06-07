import './Menu.css';

export const Menu = () => {
  const handleClick = () => {
    console.log('Tohle přesměruje na stránku přidat knihu');
  };

  return (
    <nav className="expanded-menu">
      <ul>
        <li className="list-item">
          <button className="list-button" onClick={handleClick}>
            <img src="../assets/icons/plus.png" alt="Přidat knihu" />
            Přidat knihu
          </button>
        </li>
        <li className="list-item">
          <button className="list-button">
            <img src="../assets/icons/scan.png" alt="sken isbn" /> Scan ISBN
          </button>
        </li>
        <li className="list-item">
          <button className="list-button">
            <img src="../assets/icons/search.png" alt="vyhledat v antikvariátu" />
            Antikvariát
          </button>
        </li>
        <li className="list-item">
          <button className="list-button">
            <img src="../assets/icons/filter.png" alt="filtrovat" />
            Filtrovat
          </button>
        </li>
        <li className="list-item">
          <button className="list-button">
            <img src="../assets/icons/statistic.png" alt="statistiky" />
            Statistiky
          </button>
        </li>
        <li className="list-item">
          <button className="list-button">
            <img src="../assets/icons/settings.png" alt="nastavení" />
            Nastavení
          </button>
        </li>
      </ul>
    </nav>
  );
};
