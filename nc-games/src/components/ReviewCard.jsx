import {Vote} from './vote';
export const ReviewCard = ({review, setError}) =>{
    console.log(setError);
    return <>
    <br/>
    <section id="ReviewCard">
    <h2><strong>Title: {review.title}</strong></h2>
    <h3>Designer: {review.designer}</h3>
    <h3>Owner: {review.owner}</h3>
    <img src={review.review_img_url} alt={`pic of ${review.title}`}/>
    {review.review_body !== undefined &&
            <p>{review.review_body}</p>
    }
   <Vote votes={review.votes} id={review.review_id} setError={setError}/>


    <p> Comment Count: {review.comment_count}
    </p>
    </section>
    </>
}