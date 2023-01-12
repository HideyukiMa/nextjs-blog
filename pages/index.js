import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I work as an engineer at SoftBank Corp. I started studying to become an engineer from 2023. Here is my playground.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Apps</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
          <Link href={'/apps/counter'}>Counter App of Redux Tookit</Link>
          <br />
          <small className={utilStyles.lightText}>
            January 12, 2023
          </small>
          </li>

          <li className={utilStyles.listItem}>
          <Link href={'/apps/first-post'}>First Post</Link>
          <br />
          <small className={utilStyles.lightText}>
            January 10, 2023
          </small>
          </li>

        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
