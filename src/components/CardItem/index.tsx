import { ContainerCardItem, HeaderCardItem, MainCardItem, FooterCardItem } from './style'

export function CardItem() {
  return (
    <ContainerCardItem>
      <HeaderCardItem>
        <p>Campanha de arrecadação</p>
      </HeaderCardItem>
      <MainCardItem>
        <div className="descriptionAndImage">
          <div className="description">
            <p>Arrecadação de alimentos para moradores de rua</p>
            <span>SP Invisível</span>
          </div>
          <div className="imgContainer">
            <img src="https://user-images.githubusercontent.com/69859248/124744749-74a11680-def5-11eb-96a7-08a9391416a4.png" alt="Amém" />
          </div>
        </div>
        <div className="serviceInfo">
          <div className="information">
            <p>2-6</p>
            <span>Horas semana</span>
          </div>
          <div className="buttonCta">
            <button type="button">Participar</button>
          </div>
        </div>
      </MainCardItem>
      <FooterCardItem>
        Natal, RN
      </FooterCardItem>
    </ContainerCardItem>
    // https://user-images.githubusercontent.com/69859248/124744749-74a11680-def5-11eb-96a7-08a9391416a4.png
    // https://user-images.githubusercontent.com/69859248/124744756-77037080-def5-11eb-865c-283c7acd0abc.png
    // https://user-images.githubusercontent.com/69859248/124744766-78cd3400-def5-11eb-9367-2683c8587d5a.png
  )
}