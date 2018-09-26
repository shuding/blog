import { MDXProvider } from '@mdx-js/tag'
import Head from 'next/head'

import theme from '../theme'

export default meta => ({ children }) => <MDXProvider components={theme.components}><>
  <Head>
    <title>{meta.title}</title>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
  </Head>
  <theme.Container>
    <theme.components.h1>{meta.title}</theme.components.h1>
    <div className='navigation'>
      <div className='meta'>Shu, <time>{meta.date}</time></div>
      <div className='back'><theme.components.a href='/blog'>back</theme.components.a></div>
      <style jsx>{`
        .navigation {
          display: flex;
          justify-content: space-between;
          margin: 3rem 0 1rem;
        }
        .meta {
          color: #bababa;
        }
      `}</style>
    </div>
    <theme.Content>{children}</theme.Content>
    <theme.Footer/>
  </theme.Container>
</></MDXProvider>
