import {useState, useEffect} from 'react';

const URL = 'https://jsonplaceholder.typicode.com/users';

function useFetch() {
    
    const [users, setUSers] = useState([]);
    const showData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setUSers(data);
      //console.log(data);
    }
    useEffect( () => {
        showData();
    }, [])
   
  return {
    users
  }
}

export default useFetch;