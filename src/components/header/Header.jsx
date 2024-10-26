import Logo from "../../assets/img/logo/logo.png";
import SearchIcon from "../icons/SearchIcon";
import style from "./header.module.css";
import Cart from "../icons/Cart.jsx";


function Header() {
  return (
    <>
      <header>
        <div className={style.logo}>
          <img className={style.logoImg} src={Logo} alt="" />
        </div>

          <div className={style.search}>
            <input
              className={style.inputSearch}
              type="text"
              name="search"
              id="search"
              placeholder="Pesquisar produto..."
            />
            <i className={style.iconSearch}>
              <SearchIcon/>
            </i>
          </div>

          <div className={style.storeLinks}>
            <a className="sign-up" href="">
              Cadastre-se
            </a>
            <a className={style.btnLogin} href="">
              Entrar
            </a>
            <div className={style.cart}>
              <Cart/>
              <span>12</span>
            </div>
        </div>
      </header>
    </>
  );
}

export default Header;
