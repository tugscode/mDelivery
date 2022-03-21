import { createContext , useState , useContext , useEffect } from "react"
export const BasketContext = createContext({});

export function useBasket(){
    return useContext(BasketContext)
}

export const BasketProvider = (props) => {
    const [ basket, setBasket] = useState()
    useEffect(()=>{
        if(localStorage.getItem("userInfo")){
            const data = JSON.parse(localStorage.getItem("userInfo"))
            setBasket({
                 email: data.email,
            })
        }
    }, [])
    return(
        <BasketContext.Provider value={[basket , setBasket]}>
            {props.children}
        </BasketContext.Provider>
    )
}