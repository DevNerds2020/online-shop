import React, { Children } from 'react'
import { css, cx } from '@emotion/css'

const Container = ({ children }) => {
    return (
        <div
            className={css`
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                margin-right: 40px;
                justify-content: space-evenly;
                align-items: center;
                `}
        >
            {children}
        </div>
    )
}

export default Container