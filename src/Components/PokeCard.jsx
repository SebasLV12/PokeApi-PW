import { useState,useEffect} from "react"

export const PokeCard=({pokemon,infoPokemon})=>{
    const [pokeDetails,setPokeDetails]=useState()

    const fetchPokemonDetails=async()=>{
        const resp=await fetch(pokemon.url)
        const data=await resp.json()
        setPokeDetails(data)
        console.log("data Pokemon",data)
    }

    useEffect(()=>{
        fetchPokemonDetails()
    },[])



    return(
        <div>
            {
                pokeDetails?(
                    <div className="pokeCard" key={pokeDetails.id} style={{ cursor: "pointer" }} 
                        onClick={()=>infoPokemon(pokeDetails.id)}>
                         <h2>{pokeDetails.id}</h2>
                        <img src={pokeDetails.sprites.front_default} alt={pokeDetails.name}/>  
                        <h3>{pokeDetails.name}</h3>
                    </div>
                ):(
                    <h1>No available...</h1>
                )
            }
           
        </div>
    )
}