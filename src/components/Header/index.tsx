import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo}/>
      <aside>
        <div>
          <MapPin size={22} weight="fill" color="#8047F8"/>
          <span>Vila Velha</span>,<span>ES</span>
        </div>

        <NavLink to='/cart'>
          <ShoppingCart size={22} weight="fill" color="#C47F17"/>
          {/* <span>0</span> */}
        </NavLink>
      </aside>
    </HeaderContainer>
  );
}
