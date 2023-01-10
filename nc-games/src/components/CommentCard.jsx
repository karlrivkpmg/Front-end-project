export const CommentCard = ({comment}) =>{
    return <>
    <br/>
    <section id="CommentCard">
    <h2><strong>{comment.author}</strong></h2>
    <h3> {comment.body}</h3>
    <p>Votes: {comment.votes}</p>
    </section>
    </>
}