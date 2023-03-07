import styled from 'styled-components'
import Cards from './components/Cards'
import { Header } from './components/Header'
import { Container } from './components/UI/Container'

const AppWrapper = styled.div`
  min-height: 100vh;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

function App() {
  return (
    <Container>
      <AppWrapper>
        <Header />
        <Cards />
      </AppWrapper>
    </Container>
  )
}

export default App
