import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #003153;
  z-index: 10;

  padding: 16px 50px;
  padding-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px -2px 3px rgba(36, 33, 36, 0.3);

  @media screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  gap: 16px;
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 6px;
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const FooterLogoDesktop = styled.div`
  display: flex;
  cursor: pointer;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const FooterLogo = styled.div`
  display: none;

  @media screen and (max-width: 1080px) {
    display: flex;
    cursor: pointer;
  }
`;

export const CopyrightText = styled.p`
  color: #e6e6e9;
  display: flex;
  align-items: flex-end;
  margin-bottom: -4px;
  font-size: 1.2rem;

  @media screen and (max-width: 320px) {
    display: flex;
    font-size: 1rem;
  }
`;

export const CompanyAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Title = styled.h1`
  color: #e6e6e9;
  font-size: 1.4rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Text = styled.h2`
  color: #e6e6e9;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const FooterInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`;

export const FooterLinkWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
export const FooterLinkItems = styled.div`
  list-style: none;
  padding: 8px;
  text-decoration: none;

  :first-child {
    padding: 0;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
  color: #e6e6e9;
  margin-bottom: 2px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const FooterLink = styled(Link)`
  color: #e6e6e9;
  font-size: 1.4rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 4px 0;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #8bd8f8;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
