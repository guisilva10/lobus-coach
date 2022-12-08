import { GiWolfHowl } from 'react-icons/gi'

import {
  Container,
  SubTitle,
  Title,
  Logo
} from './header.styles'

const Header = () => {
  return (
     <Container>
      <Logo>
         <GiWolfHowl size={40}/>
      </Logo>
     <Title>
     Lobus
      </Title>
      <SubTitle>
        Programação para Iniciantes
      </SubTitle>
     </Container>
  )
}

export default Header
