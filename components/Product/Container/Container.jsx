import React, { Children } from 'react'
import { css, cx } from '@emotion/css'

const Container = ({ children }) => {
    return (
        <div
            className={css`
                display: flex;
                flex-direction: column;
                margin-right: 70px;
                justify-content: space-evenly;
                align-items: center;
                height: 100%;
                `}
        >
            {children}
        </div>
    )
}

export default Container