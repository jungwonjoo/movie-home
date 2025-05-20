import '../styles/global.css'
import Navigation from '../component/navigaition'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title:{
    template:"%s | Next Movies",
    default: "Loading..."
  },
  description: '아자아자아자!!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
