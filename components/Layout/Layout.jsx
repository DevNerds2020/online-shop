import React from 'react';
import Navigation from '../Navigation/Navigation';
import { css, cx } from '@emotion/css'

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <div className={css`
                display: flex;
                justify-content: center;
                height: 80vh;
                margin-top: 20px;
            `}>
            {children}
            </div>
        </>
    )
}

export default Layout;