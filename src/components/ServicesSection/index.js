import {
  CarAlign,
  CarBalance,
  HammerIcon,
  PaintIcon,
  WrenchIcon,
} from "./servicesIcon";
import {
  ServicesContainer,
  ServicesH1,
  ServicesText,
  ServicesWrapper,
  ServicesCard,
  CardTitle,
  CardDescription,
  CardIcon,
} from "./ServicesElements";

const ServicesSection = (bodyRepairCard) => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Serviços</ServicesH1>
      <ServicesText>Conheça mais sobre os serviços que oferecemos</ServicesText>
      <ServicesWrapper>
        <ServicesCard>
          <CardIcon>
            <HammerIcon />
          </CardIcon>
          <CardTitle>Lanternagem</CardTitle>
          <CardDescription>
            A lanternagem consiste em desamassar uma parte da lataria que esteja
            afetada por danos ou impactos.
          </CardDescription>
        </ServicesCard>
        <ServicesCard>
          <CardIcon>
            <PaintIcon />
          </CardIcon>
          <CardTitle>Pintura</CardTitle>
          <CardDescription>
            A lanternagem consiste em desamassar uma parte da lataria que esteja
            afetada por danos ou impactos.
          </CardDescription>
        </ServicesCard>
        <ServicesCard>
          <CardIcon>
            <WrenchIcon />
          </CardIcon>
          <CardTitle>Mecânica Leve</CardTitle>
          <CardDescription>
            A lanternagem consiste em desamassar uma parte da lataria que esteja
            afetada por danos ou impactos.
          </CardDescription>
        </ServicesCard>
        <ServicesCard>
          <CardIcon>
            <CarAlign />
          </CardIcon>
          <CardTitle>Alinhamento</CardTitle>
          <CardDescription>
            A lanternagem consiste em desamassar uma parte da lataria que esteja
            afetada por danos ou impactos.
          </CardDescription>
        </ServicesCard>
        <ServicesCard>
          <CardIcon>
            <CarBalance />
          </CardIcon>
          <CardTitle>Balanceamento</CardTitle>
          <CardDescription>
            A lanternagem consiste em desamassar uma parte da lataria que esteja
            afetada por danos ou impactos.
          </CardDescription>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesSection;
