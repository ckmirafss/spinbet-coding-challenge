import { Barlow } from 'next/font/google'
import '@/styles/globals.css'

const barlow = Barlow({ subsets: ['latin'], weight: ['400'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={barlow.className}>
      <Component {...pageProps} />
    </main>
  )
}
