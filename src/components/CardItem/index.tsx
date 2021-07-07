import { 
  ContainerCardItem, 
  HeaderCardItem, 
  MainCardItem, 
  FooterCardItem, 
  DescriptionAndImage, 
  ServiceInfo, 
  Description, 
  ImgContainer, 
  Information, 
  Button 
} from './style'

interface GetPropsCard {
  id: string;
  title: string;
  description: string;
  image: string;
  cta: string;
  city: string;
  serviceInfo: {
    qtde: string;
    information: string;
  }
}

export function CardItem(props: GetPropsCard) {
  return (
    <ContainerCardItem key={props.id}>
      <HeaderCardItem>
        <p>{props.title}</p>
      </HeaderCardItem>
      <MainCardItem>
        <DescriptionAndImage>
          <Description>
            <p>{props.description}</p>
            <span>SP Invisível</span>
          </Description>
          <ImgContainer>
            <img src={props.image} alt={props.title} />
          </ImgContainer>
        </DescriptionAndImage>
        <ServiceInfo>
          <Information>
            <p>{props.serviceInfo.qtde}</p>
            <span>{props.serviceInfo.information}</span>
          </Information>
          <Button>
            {props.cta}
          </Button>
        </ServiceInfo>
      </MainCardItem>
      <FooterCardItem>
        {props.city}
      </FooterCardItem>
    </ContainerCardItem>
  )
}