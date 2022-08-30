import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react';
import DynamicTable from '../Components/Table';


function CharactersList() {

    const [characters, setCharacters] = useState([])
    const [isFetching, setIsFetching] = useState(true)


  useEffect(()=> {
    getTenCharacters()
  },[])

  const getTenCharacters = async() => {
    try{
      const response = await axios.get("https://swapi.dev/api/people/?page=1")
      const response2 = await axios.get("https://swapi.dev/api/people/?page=2")
      const response3 = await axios.get("https://swapi.dev/api/people/?page=3")
      const response4 = await axios.get("https://swapi.dev/api/people/?page=4")
      const response5 = await axios.get("https://swapi.dev/api/people/?page=5")
      const response6 = await axios.get("https://swapi.dev/api/people/?page=6")
      const response7 = await axios.get("https://swapi.dev/api/people/?page=7")
      const response8 = await axios.get("https://swapi.dev/api/people/?page=8")
      const response9 = await axios.get("https://swapi.dev/api/people/?page=9")


      setCharacters(response.data.results.concat (response2.data.results).concat(response3.data.results).concat(response4.data.results).concat(response5.data.results).concat(response6.data.results).concat(response7.data.results).concat(response8.data.results).concat(response9.data.results))
      setIsFetching(false)
    }catch(error){
      console.log(error)
    }
    

if(isFetching===true){
  return <p>Loading list</p>
}

  }
  return (
    <div>


<DynamicTable characters={characters}></DynamicTable>    


</div>
  )
}

export default CharactersList