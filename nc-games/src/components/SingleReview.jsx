import { useParams } from "react-router-dom"
import { getCommentsById, getReviewsById } from "../api";
import {useState, useEffect} from 'react';
import { ReviewCard } from "./ReviewCard";
import { CommentCard } from "./CommentCard.jsx";
import { NoCommentsCard } from "./NoCommentsCard";

export const SingleReview = () =>{
    const [review, setReview] = useState({});
    const [comments, setComments] = useState([]);
    const [isLoadingReview, setIsLoadingReview] = useState(false);
    const [isLoadingComments, setIsLoadingComments] = useState(false);


    const {review_id} = useParams();

    useEffect(()=>{
        setIsLoadingReview(true);
        setIsLoadingComments(true);

        getCommentsById(review_id);
        getReviewsById(review_id).
        then((data)=>{
            setReview(data);
            setIsLoadingReview(false);
        }).then(()=>{
            return getCommentsById(review_id);
        }).then((data)=>{
            setComments(data);
            setIsLoadingComments(false);
        })
        }, [review_id])

        if(isLoadingReview){
            return(
                <p>Loading Review...</p>
            )
        }

        if(isLoadingComments){
            return(
                <p>Loading Comments...</p>
            )
        }

        if(comments.length ===0){
            return(
                <div>
                <ReviewCard key ={review.review_id} review={review}/>
                <NoCommentsCard key = {"noComments"}/>
              </div>
            )
        }

    return(
        <div>
        <ReviewCard key ={review.review_id} review={review}/>

        {comments.map((comment)=>{
            return(
                <CommentCard key={comment.comment_id} comment={comment}/>
            )
        })}
        

      </div>

    )

    
}