import React from "react";
import { animateScroll } from "react-scroll";
import { LogoDesktop } from "../LogoDesktop";
import { Logo } from "../Logo";
import {
  FooterContainer,
  FooterWrap,
  FooterLogoDesktop,
  FooterLogo,
  FooterInfoContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  LogoWrapper,
  CopyrightWrapper,
  CompanyAddress,
  Title,
  Text,
  CopyrightText,
} from "./FooterElements";

const toggleHome = () => {
  animateScroll.scrollToTop();
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterInfoContainer>
          <CompanyAddress>
            <Title>Endereço:</Title>
            <Text>
              Av. João César de Oliveira, 5555 - Beatriz, Contagem - MG.
            </Text>
            <Title>Telefone:</Title>
            <Text>(31)3351-2202</Text>
            <Title>Email:</Title>
            <Text>eldoauto@gmail.com</Text>
          </CompanyAddress>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Acesse:</FooterLinkTitle>
              <FooterLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-104}
              >
                Home
              </FooterLink>
              <FooterLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                exact="true"
              >
                Serviços
              </FooterLink>
              <FooterLink
                to="insurance"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                exact="true"
              >
                Seguradoras
              </FooterLink>
              <FooterLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                exact="true"
              >
                Quem Somos
              </FooterLink>
              <FooterLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                exact="true"
              >
                Contato
              </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterInfoContainer>
        <CopyrightWrapper>
          <LogoWrapper>
            <FooterLogoDesktop to="home" onClick={toggleHome}>
              <LogoDesktop
                smallW="195"
                smallH="24"
                firstFill="#e6e6e9"
                secondFill="#e6e6e9"
                thirdFill="#e6e6e9"
              />
            </FooterLogoDesktop>
            <FooterLogo to="home" onClick={toggleHome}>
              <Logo
                smallW="39"
                smallH="24"
                firstFill="#e6e6e9"
                secondFill="#e6e6e9"
              />
            </FooterLogo>
          </LogoWrapper>
          <CopyrightText>
            © {new Date().getFullYear()} Todos os direitos reservados
          </CopyrightText>
        </CopyrightWrapper>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
