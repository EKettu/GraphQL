import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'


import { useQuery} from '@apollo/client';
import { ALL_AUTHORS, ALL_BOOKS } from './queries'

const App = () => {
  const [page, setPage] = useState('authors')

  const authors = useQuery(ALL_AUTHORS)
  // const books = useQuery(ALL_BOOKS)

  if (authors.loading)  {
    return <div>loading...</div>
  }

  // if (books.loading)  {
  //   console.log("books loading")
  // }


  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {/* <button onClick={() => setPage('add')}>add book</button> */}
      </div>

      <Authors
        show={page === "authors" }
        data = {authors.data.allAuthors}
        // data = {data1}
      />

      {/* <Books
        show={page === "books"}
        data={books.data.allBooks}
      /> */}

      {/* <NewBook
        show={page === 'add'}
      /> */}

    </div>
  )
}

export default App