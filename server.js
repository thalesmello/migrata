const express = require('express')
const next = require('next')
const queryStore = require('./query_store')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.get('/api/fetch_query/:queryId', (req, res) => {
    const { queryId } = req.params
    const query = queryStore.fetch({ queryId })
    return res.json({ query })
  })

  server.get('/api/fetch_query_ids/', (req, res) => {
    const ids = queryStore.listIds()
    return res.json({ ids: ids })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
