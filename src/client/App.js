import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { fetchCurrentUser } from './actions'
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: center;
`;

const AppContent = styled.div`
  background-color: tan;
  width: 100%;
  margin: 0 auto;
  padding-top: 5em;
  padding-bottom: 2em;
`;

const App = ({route}) => {
  return(
    <AppContainer>
      <Banner/>
      <Header/>
      <AppContent>
        {renderRoutes(route.routes)}
      </AppContent>
      <Footer/>
    </AppContainer>
  )
}

export default {
  component: App,
  loadData: ({dispatch}) => dispatch(fetchCurrentUser())
}
