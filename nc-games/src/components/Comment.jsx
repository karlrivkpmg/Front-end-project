import { useState } from "react";
import { postCommentById } from "../api";
export const Comment = ({setComments, review_id, renderComment}) =>{
    const [newComment, setNewComment] = useState("");
    const [successfulComment, setSuccessfulComment] = useState("");
    const [isLoadingComment, setIsLoadingComment] = useState(false);
    const [commentError, setCommentError] = useState(false);

    const handleSubmit = (event) => {
        setSuccessfulComment("");
        event.preventDefault();
        setIsLoadingComment(true);
            const comment ={"comment_id": Date.now(),
            "body":newComment,
            "review_id":review_id,
            "author":"tickle122",
            "votes":0,
            "created_at":"Just Now"
            }
            setComments((currComments)=>{
            return[comment,...currComments];
            });
            postCommentById(newComment, review_id)
            .then(()=>{
                setIsLoadingComment(false);
                setSuccessfulComment("Your comment has been posted :)");
            setNewComment("");
            })
            .catch((err)=>{
                setIsLoadingComment(false);
                setCommentError(true);
                setComments((currComments)=>{
                    return[...currComments.slice(1)];
                    });
            })
    };

    if(renderComment){
        return (
            <div>
            {!isLoadingComment &&
            <form className='Comment' onSubmit={handleSubmit}>
            <textarea 
            className="textarea"
            value={newComment}
            required
            onChange={(event) => setNewComment(event.target.value)}
            ></textarea>
            <section><button className="button">Comment</button></section>
        </form>
         }
        <p>{successfulComment}</p>
        {isLoadingComment && <p>Comment is being posted now</p>}
        {commentError && <p>Your comment failed to post, please try again</p>}
        </div>

        )
    }
   
}