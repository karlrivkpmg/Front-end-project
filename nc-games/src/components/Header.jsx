import {Link} from 'react-router-dom';
export const Header = () => {
    return(
       
         <div>
            <h1 className="Header" id="Header">Karl's Boardgame Bonanza <Link className = "link-text" style={{ textDecoration: 'none'}} to={`/`}>⌂</Link> </h1>
            </div>
           
     
    )
   
}