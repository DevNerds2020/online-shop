import React from 'react'
import { css, cx } from '@emotion/css'

const ContactCard = () => {
  return (
    <div className={css`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 50vh;
        width: 120vh;
        border: 1px solid black;
        padding: 10px;
    `}>
        <h1>
            تماس با ما
        </h1>
        <h4>
            شماره تماس
        </h4>
        <h4>
            آدرس
        </h4>

    </div>
  )
}

export default ContactCard