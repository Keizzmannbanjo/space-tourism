import appLogo from "../assets/shared/logo.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Nav>
      <img className="app-logo" src={appLogo} alt="app-logo" />
      <NavBarHorizontal></NavBarHorizontal>
      <NavLinksWrapper>
        <NavLinkList>
          <li>
            <Navlink to={'/'}>
              <LinkNum>00</LinkNum> HOME
            </Navlink>
          </li>
          <li>
            <Navlink to={"/destination"}>
              <LinkNum>01</LinkNum> DESTINATION
            </Navlink>
          </li>
          <li>
            <Navlink href="#">
              <LinkNum>02</LinkNum> CREW
            </Navlink>
          </li>
          <li>
            <Navlink href="#">
              <LinkNum>03</LinkNum> TECHNOLOGY
            </Navlink>
          </li>
        </NavLinkList>
      </NavLinksWrapper>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 55px;
  background-color: transparent;

  img.app-logo {
    width: 40px;
    height: 40px;
  }
`;

const NavBarHorizontal = styled.span`
  width: 473px;
  height: 1px;
  background-color: white;
  position: relative;
  left: 64px;
  z-index: 10;
`;

const NavLinksWrapper = styled.div`
  width: 830px;
  height: 96px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    to right,
    rgb(11, 13, 23),
    rgba(208, 214, 249, 0.4),
    rgba(11, 13, 23, 0.5)
  );
`;

const NavLinkList = styled.ul`
  list-style: none;
  width: 542px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 123px;
  height: 100%;

  & li {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Navlink = styled(NavLink)`
  text-decoration: none;
  color: rgb(208, 214, 249);
  font-family: Barlow Condensed;
  font-size: 16px;
  letter-spacing: 2.7px;
  display: flex;
  height: 100%;
  align-items: center;
  border: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid rgb(255, 255, 255);
  }
`;

const LinkNum = styled.span`
  color: rgb(255, 255, 255);
  font-weight: bold;
  margin-right: 5px;
`;

export default Navbar;
