import { CardGrid } from "../../components/CardGrid";
import { CardItem } from "../../components/CardItem";
import { Container } from "../../components/Container";

export function Home() {
  return (
    <Container>
      <CardGrid>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </CardGrid>
    </Container>
  )
}