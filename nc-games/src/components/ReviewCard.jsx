export const ReviewCard = ({review}) =>{
    return <>
    <br/>
    <section id="ReviewCard">
    <h2><strong>Title: {review.title}</strong></h2>
    <h3>Designer: {review.designer}</h3>
    <h3>Owner: {review.owner}</h3>
    <img src={review.review_img_url} alt={`pic of ${review.title}`}/>
    {review.review_body !== undefined &&
            <p>Body: {review.review_body}</p>
    }
    <p></p>
    <p>Votes: {review.votes} Comment Count: {review.comment_count}
    </p>
    </section>
    </>
}