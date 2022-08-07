import React from 'react'
import { css, cx } from '@emotion/css'

const Logo = ({ children }) => {
    return (
        <h3 className={css`
            padding: 10px;  
        `}>
            {children}
        </h3>
    )
}

export default Logo