import React from 'react'
import { css, cx } from '@emotion/css'


const Button = (props) => {
    const { icon, text, handleClick } = props
    return (
        <div
            onClick={handleClick}
            className={css`
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            &:hover {
                color: darkblue;
                transform: scale(1.2);
            }`}>
            <div
                className={css`
                margin-left: 5px;
            `}>
                {text}
            </div>
            {React.cloneElement(icon, { size: '1.5em' })}
        </div>
    )
}
export default Button