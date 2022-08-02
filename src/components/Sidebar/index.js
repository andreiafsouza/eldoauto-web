import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <FaTimes />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" offset={-104} onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="services" offset={-80} exact="true" onClick={toggle}>
            Serviços
          </SidebarLink>
          <SidebarLink
            to="insurance"
            offset={-80}
            exact="true"
            onClick={toggle}
          >
            Seguradoras
          </SidebarLink>
          <SidebarLink to="about" offset={-80} exact="true" onClick={toggle}>
            Quem Somos
          </SidebarLink>
          <SidebarLink to="contact" offset={-80} exact="true" onClick={toggle}>
            Contato
          </SidebarLink>
          <SidebarLink to="gallery" offset={-80} exact="true" onClick={toggle}>
            Galeria
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
