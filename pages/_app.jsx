import React from 'react'
import App from 'next/app'
import { ThemeProvider } from '@emotion/react'
import theme from '../configs/theme'
import { Provider } from 'react-redux'


import createMyStore from '../configs/store'


const store = createMyStore()
function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
