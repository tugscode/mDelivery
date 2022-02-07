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
        setFood({
            img: data.img ,
            name: data.name,
            discountPrice: data.discountPrice,
            price: data.price,
            sales: data.sales,
            percent: data.discountPercentage,
            ingredients: data.ingredients,
            key: data.name
        })
    } , [])
    return(
        <FoodContext.Provider value={[food, setFood]}>
            {props.children}
        </FoodContext.Provider>
    )
}
