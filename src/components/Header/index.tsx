import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo}/>
      <div className="wrapper">
        <div>
          <MapPin size={22} weight="fill" color="#8047F8"/>
          <span>Vila Velha</span>,<span>ES</span>
        </div>
        <Link to='/checkout'>
          <ShoppingCartSimple size={22} weight="fill" color="#C47F17"/>
          {/* <span>0</span> */}
        </Link>
      </div>
    </HeaderContainer>
  );
}
