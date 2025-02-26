import { JSX } from 'react';
import HeaderNav from '../header-nav/header-nav.tsx';
import { Link } from 'react-router-dom';

type HeaderProps = {
  isLoginPage?: boolean;
}

function Header({ isLoginPage }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src={'img/logo.svg'} alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {isLoginPage ? null : <HeaderNav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
