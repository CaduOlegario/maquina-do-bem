import { ContainerCardGrid } from "./style";

interface GetPropsChildren {
  children: React.ReactNode;
}

export function CardGrid({ children }: GetPropsChildren) {
  return (
    <ContainerCardGrid>
      {children}
    </ContainerCardGrid>
  )
}