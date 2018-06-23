import fetch from '../context_fetch'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const QueryLink = props => {
  return (
    <Link href={`queries?id=${props.id}`}>
      <a key={props.id}>{props.id}</a>
    </Link>
  )
}

const Index = props => (
  <div>
    <Head title='Home' />
    <Nav />

    <div className='hero'>
      <h1 className='title'>List of queries</h1>
      <p className='description'>Bellow are listed the queries</p>
      <ul>
        {props.ids.map(id => (
          <li>
            <QueryLink id={id} />
          </li>
        ))}
      </ul>
    </div>
  </div>
)

Index.getInitialProps = async context => {
  const { ids } = await fetch(context, 'api/fetch_query_ids/')
  return { ids: ids }
}

export default Index
