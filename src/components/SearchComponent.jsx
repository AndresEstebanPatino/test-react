import React from 'react';
import useSearch from '../hooks/useSearch';

function SearchComponent() {
    
    const {search, results, searcher} = useSearch();

  return (
    <div>
        <h3> User table</h3>

        <label htmlFor="search">Search</label>
        <input value={search} onChange={searcher} type="text" placeholder='Search' aria-label='search' className='form-control' />
        
        <table aria-label='table-users' className='table table-striped table-hover mt-5 shadow-lg'>
            <thead aria-label='table-users-head' className='text-white bg-curso'>
                <tr aria-label='table-users-row-head'>
                    <th>name</th>
                    <th>user name</th>
                </tr>
            </thead>
            <tbody aria-label='table-users-body'>
                {results.map( (user) => (
                    <tr key={user.id}>
                        <td aria-label='cell-name-user'>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button aria-label='boton cualquiera'>boton cuaquiera</button>
    </div>
  )
}

export default SearchComponent;