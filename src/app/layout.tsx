import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Code Music',
  description: 'Player de Música'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
