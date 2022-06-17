import appLogo from "../assets/shared/logo.svg";
import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <img className="app-logo" src={appLogo} alt="app-logo" />
      <NavBarHorizontal></NavBarHorizontal>
      <NavLinksWrapper>
        <NavLinkList>
          <li>
            <Navlink href="#">
              <LinkNum>00</LinkNum> HOME
            </Navlink>
          </li>
          <li>
            <Navlink href="#">
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
    rgba(11, 13, 23, .5)
  );
`;

const NavLinkList = styled.ul`
  list-style: none;
  width: 542px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 123px;
`;

const Navlink = styled.a`
  text-decoration: none;
  color: rgb(208, 214, 249);
  font-family: Barlow Condensed;
  font-size: 16px;
  text-align: center;
  letter-spacing: 2.7px;
`;

const LinkNum = styled.span`
  color: rgb(255, 255, 255);
  font-weight: bold;
`;



export default Navbar;
