import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="title">
        <Link href="/recipes/guacamole"><a>🥑</a></Link>
      </h1>
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum consequatur alias similique eos placeat ipsum porro, esse ab sapiente in obcaecati repellendus saepe aperiam. Neque voluptate maiores accusamus iste?
        </p>
      </section>
    </Layout>
  )
}
