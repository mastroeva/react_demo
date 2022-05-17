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
import { Provider } from 'react-redux';
import { store } from "./redux/store";

const App = () => {
  const [theme, setTheme] = useState(Theme.Light)
  const isLightTheme = theme === Theme.Light

  const onChangeTheme = (value: Theme) => {
    setTheme(value)
  };

  return (
    <Provider store={store}>
      <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
        <div className={isLightTheme ? "App" : "App _dark"}>
          <HeaderPage/>
          <Authorization/>
        </div>
      </ThemeModeProvider>
    </Provider>
  );
}



export default App;
