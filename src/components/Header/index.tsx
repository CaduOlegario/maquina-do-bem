import { useState } from "react";
import { Container } from "../Container";
import { Content, ContainerGeolocation } from './style'

export function Header() {

  const [isActive, setIsActive] = useState<Boolean>(false)

  function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
    setIsActive(target.checked)
  }
  
  return (
    <Container>
      <Content>
        <h2>Oportunidades em destaque</h2>
        <ContainerGeolocation>
          <span>Geolocalização {isActive ? 'ativa' : 'inativa'}</span>
          <input type="checkbox" onChange={handleChange} />
        </ContainerGeolocation>
      </Content>
    </Container>
  )
}