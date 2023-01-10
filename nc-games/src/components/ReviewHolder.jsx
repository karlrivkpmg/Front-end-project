import { useState, useEffect } from 'react';
import { getReviews } from '../api';
import { ReviewCard } from './ReviewCard';

export const ReviewHolder = () =>{
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        getReviews()
        .then((data)=>{
            setIsLoading(false);
            setReviews(data);
        })
    }, [])

    if(isLoading){
        return(
            <p>Loading...</p>
        )
    }

    return (
        <div>
        {reviews.map((review)=>{
            return(
                <ReviewCard review={review}/>
            )
        })}
        </div>
    )
}