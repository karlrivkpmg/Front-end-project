import { useState, useEffect } from 'react';
import { getReviews } from '../api';
import { ReviewCard } from './ReviewCard';
import {Link} from 'react-router-dom';

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
                <Link style={{ textDecoration: 'none' }} to={`reviews/${review.review_id}`}>

                    <ReviewCard review={review}/>
                </Link>
            )
        })}
        </div>
    )
}