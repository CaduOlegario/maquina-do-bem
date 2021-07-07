import { ReactChild, ReactChildren } from 'react'

import {Content} from './style'

interface GetPropsChildren {
  children: ReactChild | ReactChildren;
}

export function Container({ children }: GetPropsChildren) {
  return (
    <Content>{ children } </Content>
  )
}