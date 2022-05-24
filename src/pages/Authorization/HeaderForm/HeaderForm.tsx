import React from 'react';

import './HeaderForm.css'

const HeaderForm = (props: any) => {
    const {onHeaderClick, tabName} = props
    const isLoginActive = tabName === 'login'
    return (
        <div className='header__form'>
            <h2 className={isLoginActive ? 'title _title-active' : 'title'} onClick={() => onHeaderClick('login')}>Login</h2>
            <span>|</span>
            <h2 className={isLoginActive ?  'title' : 'title _title-active'} onClick={() => onHeaderClick('registration')}>Registration</h2>
        </div>
    )
}

export default HeaderForm
