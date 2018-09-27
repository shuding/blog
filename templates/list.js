import { MDXProvider } from '@mdx-js/tag'
import Head from 'next/head'

import theme from '../theme'

export default meta => ({ children }) => <MDXProvider components={{
  ...theme.components,
  ...theme.TemplateList,
}}><>
  <Head>
    <title>{meta.title}</title>
    <meta charSet="utf-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
  </Head>
  <theme.Container>
    <theme.components.h1>{meta.title}</theme.components.h1>
    <theme.Nav url={meta.url}/>
    <theme.Content>{children}</theme.Content>
    <theme.Footer/>
  </theme.Container>
</></MDXProvider>
