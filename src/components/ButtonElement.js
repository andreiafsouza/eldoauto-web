import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#e6e6e9" : "rgba(0,0,0,0.1)")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#242124" : "#e6e6e9")};
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${({ primary }) =>
        primary ? "#e6e6e9" : "rgba(139, 216, 248, 0.3)"};
    }
  }
`;
