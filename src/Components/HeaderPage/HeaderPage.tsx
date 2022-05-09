import React from 'react';
import './HeaderPage.css';
import { Theme, useThemeContext } from "../../context/themeModeContext";


const HeaderPage = () => {
    const { theme, onChangeTheme = () => {} } = useThemeContext()
    const isLightTheme = theme === Theme.Light
    const onClickTheme = () => {
        isLightTheme ? onChangeTheme(Theme.Dark) : onChangeTheme(Theme.Light)
    }
    return (
        <header className={isLightTheme ? "header" : "header _dark"}>
            <div className='header_container'>
                <div className='menu_icon'>
                   <span></span>
                </div>
                <h3>User Name</h3>
                <div className="checkbox__group">
                    <input type="checkbox" className="checkbox" id="checkbox"/>
                    <label onClick={onClickTheme} className="checkbox__label" htmlFor="checkbox"></label>
                </div>
            </div>
            
        </header>
    )
}

export default HeaderPage