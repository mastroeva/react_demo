import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import CardList from './Components/CardList';
import Authorization from './pages/Authorization';
import CardPage from './pages/CardPage';
import Template from './pages/Template';
import { ThemeModeProvider } from "./context/ThemModeProvider";
import { Theme } from "./context/themeModeContext";
import HeaderPage from './Components/HeaderPage';

const App = () => {
  const [theme, setTheme] = useState(Theme.Light)
  const isLightTheme = theme === Theme.Light

  const onChangeTheme = (value: Theme) => {
    setTheme(value)
  };

  return (
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div className={isLightTheme ? "App" : "App _dark"}>
        <HeaderPage/>
        <Authorization/>
      </div>
    </ThemeModeProvider>
  )
}



export default App;
