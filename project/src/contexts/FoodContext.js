import {createContext , useState, useContext , useEffect} from "react"
import { UserContext } from "./UserContext"
export const FoodContext = createContext({})

export function useFood(){
    return useContext(FoodContext)
}

export const FoodProvider = (props)=>{
    const [food , setFood] = useState()
    useEffect(()=>{
        const data = JSON.parse(props)
    } , [])
    return(
        <FoodContext.Provider value={[food, setFood]}>
            {props.children}
        </FoodContext.Provider>
    )
}
