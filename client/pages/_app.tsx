import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TransactionContext, ThemeContext } from '../contexts';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContext>
      <TransactionContext>
        <Component {...pageProps} />
      </TransactionContext>
    </ThemeContext>
  )
}

export default MyApp
