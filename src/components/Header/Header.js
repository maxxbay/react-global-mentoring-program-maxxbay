import NetflixLogo from 'common/Logo/NetflixLogo';
import './Header.scss';
import SearchForm from 'components/SearchForm';

const Header = ({ setSearchValue }) => {
  return (
    <div className="header">
      <div className="header-container container">
        <NetflixLogo />
        <div className="add-button">
          <button className="add">+ Add movie</button>
        </div>
      </div>
      <SearchForm setSearchValue={setSearchValue} />
    </div>
  );
};

export default Header;
