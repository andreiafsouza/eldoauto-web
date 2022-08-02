import React from "react";
import Maps from "../Maps/Maps";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  CompanyAddress,
  Title,
  Text,
  CompanyPhone,
  Column2,
  ContactFormWrapper,
  ContactLabel,
  ContactNameInput,
  ContactEmailInput,
  ContactPhoneInput,
  ContactMessage,
  ContactButton,
  MapWrapper,
  PhoneButton,
  TopLine,
  CompanyEmail,
} from "./ContactElements";

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactRow>
          <Column1>
            <TopLine>Contato</TopLine>
            <CompanyAddress>
              <Title>Endereço:</Title>
              <Text>
                Av. João César de Oliveira, 5555 - Beatriz, Contagem - MG.
              </Text>
            </CompanyAddress>
            <CompanyPhone>
              <Title>Telefone:</Title>
              <Text>(31)3351-2202</Text>
              <PhoneButton href="tel:+553133512202">Ligar</PhoneButton>
            </CompanyPhone>
            <CompanyEmail>
              <Title>Email:</Title>
              <Text>eldoauto@gmail.com</Text>
            </CompanyEmail>
            <MapWrapper>
              <Maps />
            </MapWrapper>
          </Column1>
          <Column2>
            <Title>Entre em contato</Title>
            <ContactFormWrapper>
              <ContactLabel>Nome:</ContactLabel>
              <ContactNameInput />
              <ContactLabel>Email:</ContactLabel>
              <ContactEmailInput />
              <ContactLabel>Telefone:</ContactLabel>
              <ContactPhoneInput />
              <ContactLabel>Mensagem:</ContactLabel>
              <ContactMessage />
              <ContactButton type="submit">Enviar</ContactButton>
            </ContactFormWrapper>
          </Column2>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactSection;
