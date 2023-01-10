import axios from 'axios'

const gamesApi = axios.create({
    baseURL : 'https://karl-rivett-boardgamez.onrender.com/api'
})

export const getReviews = () =>{
    return gamesApi.get("/reviews")
    .then((response)=>{
    return response.data.reviews;
})
}