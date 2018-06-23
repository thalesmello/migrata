const store = {
  query_1: {
    id: 'query_1',
    text: `SELECT 1 + 1 as number`,
    status: 'pending'
  },
  query_2: {
    id: 'query_1',
    text: `SELECT 1 + 1 as number`,
    status: 'pending'
  },
  create_table: {
    id: 'query_1',
    text: `CREATE TABLE students (name VARCHAR (100))`,
    status: 'pending'
  }
}

module.exports = {
  store ({ queryId, queryText }) {
    store[queryId] = queryText
  },

  fetch ({ queryId }) {
    return store[queryId]
  },

  listIds () {
    return Object.keys(store)
  }
}
