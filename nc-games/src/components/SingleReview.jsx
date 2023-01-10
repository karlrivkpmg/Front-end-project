import { useParams } from "react-router-dom"
import { getCommentsById, getReviewsById } from "../api";
import {useState, useEffect} from 'react';
import { ReviewCard } from "./ReviewCard";
import { CommentCard } from "./CommentCard.jsx";
export const SingleReview = () =>{
    const [review, setReview] = useState({});
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const {review_id} = useParams();

    useEffect(()=>{
        setIsLoading(true);
        getCommentsById(review_id);
        getReviewsById(review_id).
        then((data)=>{
            setReview(data);
        }).then(()=>{
            return getCommentsById(review_id);
        }).then((data)=>{
            setComments(data);
            setIsLoading(false);
        })
        }, [review_id])

        if(isLoading){
            return(
                <p>Loading...</p>
            )
        }

    return(
        <div>
        <ReviewCard review={review}/>
        {comments.map((comment)=>{
            return(
                <CommentCard comment={comment}/>
            )
        })}
      </div>

    )
}