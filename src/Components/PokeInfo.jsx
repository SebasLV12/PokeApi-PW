import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const PokeInfo=({id})=>{
    const [pokeInfo,setPokeInfo]=useState(null)
    const navigate=useNavigate()



    const fetchPokemonInfo=async()=>{
        const resp=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data=await resp.json()
        setPokeInfo(data)
        console.log("POKE INFO",data)

    }
    useEffect(()=>{
        if(id){
            fetchPokemonInfo()
        }
    },[])


    return(
        <div>
            {pokeInfo?(
                <div>
                    <div className="container">
                        <div className="col-md-6 text-center">
                            <h1>{pokeInfo.name}</h1>
                            <img src={pokeInfo.sprites.other.dream_world.front_default} alt={pokeInfo.name}/>
                        </div>
                        <div className="col-md-6">
                            <div className="abilities">
                                {
                                    pokeInfo.abilities.map((info,index)=>{
                                        return(
                                            <div key={index} className="group">
                                                <h2>{info.ability.name}</h2>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="mt-5 base-stats">
                                {
                                    pokeInfo.stats.map((info,index)=>{
                                        return(
                                            
                                                <p key={index}>
                                                    <b>{info.stat.name}</b>
                                                    : {info.base_stat}
                                                </p>
                                        )
                                    
                                    } )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ):<h1>Loading...</h1>}
            <div className="btn-group">
                <button onClick={()=>{navigate('/')}} >REGRESAR LISTA</button>
            </div>
        </div>
    )
}