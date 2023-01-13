import {Link} from 'react-router-dom';
import { NavBarCategories } from './NavBarCategories';
export const Header = () => {
    return(
       
         <div>
            <h1 className="Header" id="Header">Karl's Boardgame Bonanza <Link className = "link-text" style={{ textDecoration: 'none'}} to={`/reviews`}>⌂</Link> <NavBarCategories></NavBarCategories>
 </h1>
            </div>
    )
   
}