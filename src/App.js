import React, { memo, createContext, useState } from 'react'

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import { GlobalWrapper } from './pages/global/style'
import Header from './pages/header'
import { MainWrapper } from './pages/main/style'
import { ContentWrapper } from './pages/content/style'
import Sidebar from './pages/sidebar'

import routes from './router'


export const ThemeContext = createContext();
export default memo(function App() {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <GlobalWrapper theme={theme}></GlobalWrapper>
        <Header theme={theme} />
        <MainWrapper>
          <HashRouter>
            <Sidebar />
            <ContentWrapper>
              {renderRoutes(routes)}
            </ContentWrapper>
          </HashRouter>
        </MainWrapper>
      </ThemeContext.Provider>
    </>
  );
}
)
