const addItem = async (food_id , quantity , userEmail) => {
    return await fetch("https://dev-api.mstars.mn/api/basket/",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            food_id: food_id,
            user_email: userEmail,
            quantity: quantity,
            token: localStorage.getItem("token"),
        }),
    })
}
const getBasketInfo = async (userEmail) => {
    const token = localStorage.getItem("token")
    return await fetch("https://dev-api.mstars.mn/api/basket-info",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_email: userEmail,
            token: token
        }),
    })
}

export const basketService = {
    addItem,
    getBasketInfo,
}