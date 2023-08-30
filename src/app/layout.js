import '@/styles/global.scss'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body theme="dark">{children}</body>
    </html>
  )
}
