import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { Logo } from "../Logo";
import { LogoDesktop } from "../LogoDesktop";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogoDesktop,
  BrandName,
} from "./NavbarElements";

const Navbar = ({ toggle, navOrigin }) => {
  const [navColor, setNavColor] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY > 1) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
  }, []);

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <Nav navOrigin={navColor ? !navOrigin : navOrigin}>
        <NavbarContainer>
          <NavLogoDesktop to="home" onClick={toggleHome}>
            <LogoDesktop
              firstFill={navColor ? "#003153" : "#e6e6e9"}
              thirdFill={navColor ? "#003153" : "#e6e6e9"}
            />
          </NavLogoDesktop>
          <NavLogo
            navOrigin={navColor ? !navOrigin : navOrigin}
            to="home"
            onClick={toggleHome}
          >
            <Logo firstFill={"#e6e6e9"} secondFill="#2c698c" />
          </NavLogo>
          <BrandName navOrigin={navColor ? !navOrigin : navOrigin}>
            Eldorado Automóveis
          </BrandName>
          <MobileIcon
            navOrigin={navColor ? !navOrigin : navOrigin}
            onClick={toggle}
          >
            <FaBars />
          </MobileIcon>
          <NavMenu navOrigin={navColor ? !navOrigin : navOrigin}>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-104}
                exact="true"
                opacity={navColor ? toString(!navColor) : toString(navColor)}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                exact="true"
              >
                Serviços
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="insurance"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                exact="true"
              >
                Seguradoras
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                exact="true"
              >
                Quem Somos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                exact="true"
              >
                Contato
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="gallery"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                exact="true"
              >
                Galeria
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
