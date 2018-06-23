import fetch from 'isomorphic-fetch'

export default (context, path, ...args) => {
  const req = context.req
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  return fetch(`${baseUrl}/${path}`, ...args).then(r => r.json())
}
