import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function Guacamole() {
  return (
    <Layout>
      <Head>
        <title>Guacamole</title>
      </Head>
      <h1>Guacamole</h1>
      <h2>
        <Link href="/">
          <a>🏠</a>
        </Link>
      </h2>
    </Layout>
  )
}