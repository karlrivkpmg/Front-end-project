import { useState, useEffect } from 'react';
import { getReviews } from '../api';
import { ReviewCard } from './ReviewCard';

export const ReviewHolder = () =>{
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        getReviews()
        .then((data)=>{
            setReviews(data);
        })
    }, [])

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