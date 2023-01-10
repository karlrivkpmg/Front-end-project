import { useParams } from "react-router-dom"
import { getReviewsById } from "../api";
import {useState, useEffect} from 'react';
import { ReviewCard } from "./ReviewCard";
export const SingleReview = () =>{
    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const {review_id} = useParams();

    useEffect(()=>{
        setIsLoading(true);
        getReviewsById(review_id).
        then((data)=>{
            setIsLoading(false);
            setReview(data);
        })
        }, [review_id])

        if(isLoading){
            return(
                <p>Loading...</p>
            )
        }

    return(
        <ReviewCard review={review}/>
    )
}