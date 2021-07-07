import { useEffect, useState } from "react";
import { CardGrid } from "../../components/CardGrid";
import { CardItem } from "../../components/CardItem";
import { Container } from "../../components/Container";
import { api } from "../../services/api";

interface GetPropsData {
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

export function Home() {
  const [data, setData] = useState<GetPropsData[]>()

  useEffect(() => {
    api.get('/data').then(response => setData(response.data)).catch(err => console.log('Error' + err))
  }, [])

  return (
    <Container>
      <CardGrid>
        {data?.map(item => (
          <CardItem id={item.id} title={item.title} city={item.city} cta={item.cta} description={item.description} image={item.image} serviceInfo={item.serviceInfo} />
        ))}
      </CardGrid>
    </Container>
  )
}