import React from 'react'
import { css, cx } from '@emotion/css'

const ButtonContainer = ({ children }) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
      `}>
      {children}
    </div>
  )
}

export default ButtonContainer