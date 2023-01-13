import axios from 'axios'

const gamesApi = axios.create({
    baseURL : 'https://karl-rivett-boardgamez.onrender.com/api'
})

export const getReviews = (category) =>{
    return gamesApi.get("/reviews", {params:{category:category}})
    .then((response)=>{
    return response.data.reviews;
})
}

export const getReviewsById = (id) =>{
    return gamesApi.get(`/reviews/${id}`)
    .then((response)=>{
    return response.data.review;
})
}

export const getCommentsById = (id) =>{
    return gamesApi.get(`/reviews/${id}/comments`)
    .then((response)=>{
    return response.data.comments;
})
}

export const patchVotesById = (inc, id)=>{
    //Don't worry abput strange object structure, backend code issue that's being managed here
    const incObj = {voteInc:{voteInc: inc}};
    return gamesApi.patch(`/reviews/${id}`, incObj);
}

export const postCommentById = (comment, id)=>{
    //Don't worry abput strange object structure, backend code issue that's being managed here
    const newCom = {newComment:{username:"tickle122", body: comment}}
    return gamesApi.post(`/reviews/${id}/comments`, newCom)
}

export const getCategories = () =>{
    return gamesApi.get('/categories')
    .then((response)=>{
        return response.data.categories;
    })
}