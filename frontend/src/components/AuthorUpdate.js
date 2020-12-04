import React, {useState}  from 'react'

import { useMutation} from '@apollo/client';
import { UPDATE_AUTHOR, ALL_AUTHORS} from '../queries'

const AuthorUpdate = () => {

    const [name, setName] = useState('')
    const [born, setBorn] = useState('')

    const [ updateAuthor ] = useMutation(UPDATE_AUTHOR, {
        refetchQueries: [ {query: ALL_AUTHORS}]
    })
    
    // if (!props.show) {
    // return null
    // }

    const submit = async (event) => {
    event.preventDefault()
    
    console.log('update author...')
    updateAuthor({  variables: { name, setBornTo: born } })

    setName('')
    setBorn('')
    }

    return (
        <div>
        <form onSubmit={submit}>
            <div>
            name
            <input
                value={name}
                onChange={({ target }) => setName(target.value)}
            />
            </div>
            <div>
            born
            <input
                type='number'
                value={born}
                onChange={({ target }) => setBorn(parseInt(target.value))}
            />
            </div>
            <button type='submit'>update author</button>
        </form>
        </div>
    )
}

export default AuthorUpdate