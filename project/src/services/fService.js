const getAllFood = async () =>{
    return await fetch("https://dev-api.mstars.mn/api/foods" ,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    } )
}
export const fService = {
    getAllFood
}