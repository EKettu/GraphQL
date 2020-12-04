import React from 'react'

import { useQuery} from '@apollo/client';
import { ALL_AUTHORS} from '../queries'
import AuthorUpdate from './AuthorUpdate'

const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS)
  
  if (!props.show) {
    return null
  }
  if (result.loading)  {
    return <div>loading...</div>
  }

  const authors = result.data.allAuthors

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.map(author =>
            <tr key={author.name}>
              <td>{author.name}</td>
              <td>{author.born}</td>
              <td>{author.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
      <p></p>
      <AuthorUpdate></AuthorUpdate>
    </div>
  )
}

export default Authors