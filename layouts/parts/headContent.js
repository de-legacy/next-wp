import Head from 'next/head'

export default function HeadContent(props) {
  return (
    <Head>
      {props.title ? <title>{props.title}</title> : <title>Next Blog</title> }

      { props.children }
    </Head>
  )
}
