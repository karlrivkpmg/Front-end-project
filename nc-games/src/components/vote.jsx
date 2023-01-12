import {useState} from 'react';
import { patchVotesById } from '../api';
export const Vote = ({votes, id, setError}) =>{
    const [votesChange, setVotesChange] = useState(0);
    function incVote(inc, id){
        if((votes+votesChange+inc)>-1){
            setVotesChange((currVotesChange)=>
            currVotesChange +inc);
        }
        patchVotesById(inc, id)
        .then(()=>{
            setError(null);
        })
        .catch((err)=>{
            setError({err});
        });
    }
    return (
        <section>
            {setError === undefined &&  <p>Votes: {votes}</p>}
           {setError &&  <p>Votes: {votes + votesChange} <button onClick={()=>{incVote(1, id)}}>👍</button><button onClick={()=>{incVote(-1, id)}}>👎</button></p>}
        </section>
    )
}