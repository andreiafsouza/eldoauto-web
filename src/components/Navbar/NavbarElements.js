import styled from "styled-components";
import { Link } from "react-scroll";
import { LogoDesktop } from "../LogoDesktop";

export const Nav = styled.nav`
  background: ${({ navOrigin }) => (navOrigin ? "transparent" : "#e6e6e9")};
  height: ${({ navOrigin }) => (navOrigin ? "104px" : "80px")};
  margin-top: ${({ navOrigin }) => (navOrigin ? "-104px" : "-80px")};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.6rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: ${({ navOrigin }) =>
    navOrigin
      ? "0px 0px 0px rgba(0, 0, 0, 0)"
      : "0px 2px 3px rgba(36, 33, 36, 0.25) "};
  opacity: ${({ navOrigin }) => (navOrigin ? "100%" : "97%")};
  transition: height 0.3s ease-in-out, color 0.1s, margin-top 0.3s ease-in-out,
    background-color 0.1s;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 104px;
  z-index: 1;
  width: calc(100% - 100px);
  max-width: 1340px;

  @media screen and (max-width: 480px) {
    width: calc(100% - 48px);
  }
`;

export const NavLogoDesktop = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: ${({ navOrigin }) => (navOrigin ? "2.4rem" : "1.6rem")};
  cursor: pointer;
  transition: All 0s;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLogo = styled.div`
  display: none;

  transition: all 0.2s ease-in;

  @media screen and (max-width: 768px) {
    display: ${({ navOrigin }) => (navOrigin ? "flex" : "none")};
    padding-bottom: ${({ navOrigin }) => (navOrigin ? "2.4rem" : "1.6rem")};
    cursor: pointer;
  }
`;

export const BrandName = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ navOrigin }) => (navOrigin ? "#e6e6e9" : "#003153")};
  display: none;
  padding-bottom: 2.1rem;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    display: ${({ navOrigin }) => (navOrigin ? "none" : "flex")};
    transition: all 0.3s ease-in-out;
  }
`;

/* Mobile icon (hamburger menu) */
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    transform: ${({ navOrigin }) =>
      navOrigin ? "translateY(-85%)" : "translateY(-75%)"};
    display: flex;
    font-size: 3.2rem;
    cursor: pointer;
    color: ${({ navOrigin }) => (navOrigin ? "#e6e6e9" : "#003153")};
  }
`;

/* Main nav menu */
export const NavMenu = styled.ul`
  color: ${({ navOrigin }) => (navOrigin ? "#e6e6e9" : "#003153")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  width: 100%;
  height: 100%;
  max-width: 554px;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100%;
  padding-top: ${({ navOrigin }) => (navOrigin ? "4rem" : "5.6rem")};
`;

export const NavLinks = styled(Link)`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &.active {
    ::before {
      content: "";
      position: absolute;
      opacity: ${({ opacity }) => (opacity ? "0%" : "100%")};
      top: 74px;
      width: 50px;
      border-radius: 10px;
      height: 6px;
      z-index: 800;
      background: linear-gradient(
        0.25turn,
        rgba(139, 216, 248, 0.3),
        rgba(44, 104, 156, 0.5)
      );
    }
  }

  &:hover {
    transition: 0.2s all ease-in-out;
    opacity: 80%;
  }
`;

export const NewLogo = styled(LogoDesktop).attrs({})``;
