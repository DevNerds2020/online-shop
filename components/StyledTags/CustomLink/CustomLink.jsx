import React from 'react'
import { css, cx } from '@emotion/css'
import Link from 'next/link'

const CustomLink = ({ name, url, params = {} }) => {
    return (
        <Link href={{ pathname: `/${url}`, query: params}} >
            <a
                className={css`
                padding: 10px;  
                cursor: pointer;
                text-decoration: none;
                &:hover {
                   color: darkblue;
                   transform: scale(1.2);
                }
            `}
            >
                {name}
            </a>
        </Link >
    )
}

export default CustomLink