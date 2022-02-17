import {createContext , useState, useContext , useEffect} from "react"
import { fService } from "../services/fService"
export const FoodContext = createContext({})

export function useFood(){
    return useContext(FoodContext)
}

export const FoodProvider = (props)=>{
    const [foods , setFoods] = useState([])
    useEffect(()=>{
        fService
        .getAllFood()
        .then((response)=>response.json())
        .then((data)=>{
            if(data.success){
                setFoods(data.data)
            }
        })
        .finally(()=>{})
    } ,[])
    return(
        <FoodContext.Provider value={[foods, setFoods]}>
            {props.children}
        </FoodContext.Provider>
    )
}
