import axios from 'axios'

const gamesApi = axios.create({
    baseURL : 'https://karl-rivett-boardgamez.onrender.com/api'
})

export const getReviews = (id) =>{
    return gamesApi.get("/reviews")
    .then((response)=>{
        console.log(response.data.reviews[0].review_body)
    return response.data.reviews;
})
}

export const getReviewsById = (id) =>{
    return gamesApi.get(`/reviews/${id}`)
    .then((response)=>{
    return response.data.review;
})
}