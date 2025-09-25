import { Layout } from "@/components/layout/layout"
import "@/styles/globals.css";

export const metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um único lugar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Layout>
        <body>{children}</body>
      </Layout>
    </html>
  )
}
