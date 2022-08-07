import React from 'react'
import { css, cx } from '@emotion/css'
import Link from 'next/link'

const CustomLink = ({ name, url, params = {}, children }) => {
    return (
        <Link href={{ pathname: `/${url}`, query: params}} >
            <a
                className={css`
                display: flex;
                text-decoration: none;
                padding: 7px;  
                cursor: pointer;
                text-decoration: none;
                &:hover {
                   color: darkblue;
                   transform: scale(1.2);
                }
            `}
            >
                {name ? name : children}
            </a>
        </Link >
    )
}

export default CustomLink