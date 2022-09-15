import '../styles/globals.css'
import { SnackbarProvider } from 'notistack'

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default MyApp