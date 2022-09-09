import {useState} from 'react'
import useFetch from './useFetch';

function useSearch() {
    const {users} = useFetch()
    const [search, setSearch] = useState("");
    
    const searcher = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }
    const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLowerCase()))

  return {
    search,
    results,
    searcher,
  }
}

export default useSearch;