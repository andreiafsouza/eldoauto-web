import styled from "styled-components";
import { Link } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #003153;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  z-index: 1500;
`;

export const Icon = styled.div`
  position: absolute;
  transform: translate(-100%, 70%);
  top: 1.8rem;
  right: 3rem;
  background: transparent;
  font-size: 2.4rem;
  cursor: pointer;
  color: #e6e6e9;
`;

export const SidebarWrapper = styled.div`
  color: #e6e6e9;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: 600;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #e6e6e9;
  opacity: 100%;
  cursor: pointer;

  &:hover {
    opacity: 60%;
    transition: 0.2s ease-in-out;
  }
`;
