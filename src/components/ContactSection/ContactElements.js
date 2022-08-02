import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 50px;
  background: #c1c1c1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-inline: 24px;
  }
`;

export const ContactWrapper = styled.div`
  padding-top: 16px;
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1024px;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
  gap: 32px;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
    gap: 16px;
  }
`;

export const TopLine = styled.h1`
  color: #003153;
  font-size: 3.4rem;
  font-weight: 700;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
  border-top: 3px solid rgba(36, 33, 36, 0.2);
  width: fit-content;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const Column1 = styled.div`
  display: flex;
  padding: 0px 24px 0 24px;
  flex-direction: column;
  justify-content: space-between;
  grid-area: col1;
  gap: 16px;

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-bottom: 32px;
    border-bottom: 2px solid rgba(36, 33, 36, 0.2);
  }
`;

export const CompanyAddress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CompanyPhone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CompanyEmail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #003153;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Text = styled.h2`
  color: #003153;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const PhoneButton = styled.a`
  width: 100px;
  height: 30px;
  padding: 8px;
  background: rgba(0, 49, 83, 0.2);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  font-size: 1.6rem;
  font-weight: 600;
  color: #003153;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: all 0.2s ease-in-out;
      background: rgba(44, 105, 140, 0.8);
      color: #e6e6e9;
    }
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  z-index: 999;
  opacity: 70%;
  box-shadow: 2px 5px 5px rgba(36, 33, 36, 0.25);
`;

export const Column2 = styled.div`
  grid-area: col2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 24px 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const ContactTitle = styled.h1`
  color: #003153;
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
  margin: 8px 0;

  @media screen and (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  width: 100%;
  gap: 4px;
  box-shadow: 2px 5px 5px rgba(36, 33, 36, 0.25);
  border: 0.1rem solid rgba(36, 33, 36, 0.25);
  border-radius: 16px;

  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`;

export const ContactLabel = styled.label`
  color: #003153;
  font-size: 1.4rem;
  font-weight: 700;
`;

export const ContactNameInput = styled.input`
  border-radius: 50px;
  margin-bottom: 16px;
  outline: none;
  border: 2px solid rgba(36, 33, 36, 0.3);
  background: rgba(0, 49, 83, 0.1);
  padding: 4px;
  width: 100%;
`;

export const ContactEmailInput = styled.input`
  border-radius: 50px;
  margin-bottom: 16px;
  outline: none;
  border: 2px solid rgba(36, 33, 36, 0.3);
  background: rgba(0, 49, 83, 0.1);
  padding: 4px;
  width: 100%;
`;

export const ContactPhoneInput = styled.input`
  border-radius: 50px;
  margin-bottom: 16px;
  outline: none;
  border: 2px solid rgba(36, 33, 36, 0.3);
  background: rgba(0, 49, 83, 0.1);
  padding: 4px;
  width: 100%;
`;

export const ContactMessage = styled.textarea`
  border-radius: 8px;
  min-width: 100%;
  max-width: 435px;
  height: 100px;
  max-height: 200px;
  margin-bottom: 16px;
  outline: none;
  border: 2px solid rgba(36, 33, 36, 0.3);
  background: rgba(0, 49, 83, 0.1);
  padding: 4px;
`;

export const ContactButton = styled.button`
  width: 100px;
  height: 30px;
  padding: 8px;
  background: rgba(0, 49, 83, 0.2);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  font-size: 1.6rem;
  font-weight: 600;
  color: #003153;
  text-decoration: none;
  border: none;
  align-self: center;
  transition: all 0.2s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: all 0.2s ease-in-out;
      background: rgba(44, 105, 140, 0.8);
      color: #e6e6e9;
    }
  }
`;
