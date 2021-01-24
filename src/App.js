import React, { memo, createContext, useState } from 'react'

import { GlobalWrapper } from './pages/global/style'
import Header from './pages/header'

export const ThemeContext = createContext();
export default memo(function App() {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <GlobalWrapper theme={theme}></GlobalWrapper>
        <Header theme={theme}></Header>
      </ThemeContext.Provider>
    </>
  );
}
)
