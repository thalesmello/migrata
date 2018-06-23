import fetch from '../context_fetch'
import Link from 'next/link'

const Query = props => {
  const query = props.query
  return (
    <div>
      <h1>{query.id}</h1>
      <h2>{query.status}</h2>
      <pre>{query.text}</pre>
    </div>
  )
}

Query.getInitialProps = async context => {
  const id = context.query.id
  const { query } = await fetch(context, `api/fetch_query/${id}`)
  return { query }
}

export default Query
