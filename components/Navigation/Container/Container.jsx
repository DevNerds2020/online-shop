import React from 'react'
import { css, cx } from '@emotion/css'

const Container = ({ children }) => {
    return (
        <div className={css`
            background-color: #ADD8E6;
            font-size: 24px;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            align-items: center;`}
            >
            {children}
        </div>
    )
}

export default Container