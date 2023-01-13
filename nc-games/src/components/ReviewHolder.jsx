import { useState, useEffect } from 'react';
import { getReviews } from '../api';
import { ReviewCard } from './ReviewCard';
import {Link, useParams} from 'react-router-dom';
import { ErrorComponent } from './ErrorComponent';

export const ReviewHolder = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const {slug} = useParams();
  
    useEffect(()=>{
        setIsLoading(true);
        getReviews(slug)
        .then((data)=>{
            setIsLoading(false);
            setReviews(data);
        })
    }, [slug])

    if(isLoading){
        return(
            <p>Loading...</p>
        )
    }

    return (
        <div>
        {reviews.map((review)=>{
            return(
                <Link key={`link ${review.review_id}`} style={{ textDecoration: 'none' }} to={`/reviews/${review.review_id}`}>
                <div>
                <ReviewCard key={review.review_id} review={review}/>
                </div>
                </Link>
            )
        })}
      
        </div>
       
    )
}