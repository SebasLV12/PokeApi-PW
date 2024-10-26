import { useState,useEffect } from "react"
import { PokeCard } from "./PokeCard"
import { useNavigate } from "react-router-dom"

import "../styles/main.css"


export const PokemonList = () => {
    const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
    const [nextUrl,setNextUrl]=useState()
    const [prevUrl,setPrevUrl]=useState()
    const [pokeData,setPokeData]=useState([])
    const Navigate=useNavigate()
    const fetchPokemon=async()=>{

        const resp=await fetch(url)
        const data=await resp.json()
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        setPokeData(data.results)

    }
    useEffect(()=>{
        fetchPokemon()
    },[url])



    return (
        <div className="container">

                <div className="row">
                    {pokeData? (
                        pokeData.map((pokemon,index)=>{
                            return(                                
                            <div className="col mb-3" key={index}>
                                <PokeCard pokemon={pokemon} infoPokemon={ 
                                    (id)=>{
                                        Navigate(`/pokemon/${id}`)
                                    }
                                }/>
                            </div>
                            )
                        })
                    ):<div>Loading...</div>
                    }
                    <div className=" btn-group">
                        {prevUrl &&  
                                <button 
                                onClick={()=>{
                                    setUrl(prevUrl)
                                    setPokeData([])
                                }}>Previous</button>
                        }
                        {nextUrl &&  
                                <button  
                                onClick={()=>{
                                    setUrl(nextUrl)
                                    setPokeData([])
                                }}
                                
                                >Next</button>
                        }
                    </div>
                </div>
        </div>
    )
}