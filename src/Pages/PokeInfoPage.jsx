import { NavHeader } from "../Components/NavHeader"
import { PokeInfo } from "../Components/PokeInfo"
import { useParams } from "react-router-dom"

export const PokeInfoPage = () => {
    const {id}=useParams()

    
    return(
        <div>
            <NavHeader/>
            <PokeInfo id={id}/>
        </div>
    )
}